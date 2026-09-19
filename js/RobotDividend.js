class RobotDividend {

  async run(env) {
    if (!env || !env.container) {
      throw new Error("[RobotDividend] run() requires an environment object with a valid container.");
    }
    this.env = env;
    this.container = env.container;
    this.activeVariants = {};
    this.selectedBlockId = null;
    this.assistantDialog = null;

    // Restore preferred theme
    const savedTheme = localStorage.getItem("robot_dividend_theme") || "light";
    if (savedTheme === "dark") {
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }

    this.initUI();
    this.renderArticle();
  }

  initUI() {
    this.container.innerHTML = "";

    // Floating Navigation Bar
    this.navBar = makeElement("nav", { className: "reader-nav-bar" }, [
      ["div", { className: "reader-nav-brand" }, [
        ["span", {}, "⚡"],
        ["span", {}, "The Robot Dividend"]
      ]],
      ["div", { className: "reader-nav-actions" }, [
        ["button", {
          className: "nav-btn",
          title: "Toggle Light / Dark reading palette",
          onclick: () => this.toggleTheme()
        }, "🌓 Theme"],
        ["button", {
          className: "nav-btn primary",
          title: "Export formatted essay for Quora or publication",
          onclick: () => this.showExportDialog()
        }, "📤 Export for Quora"]
      ]]
    ]);
    document.body.appendChild(this.navBar);

    // Progress Bar
    this.progressTrack = makeElement("div", { className: "reading-progress-track" });
    this.progressBar = makeElement("div", { className: "reading-progress-bar" });
    this.progressTrack.appendChild(this.progressBar);
    document.body.appendChild(this.progressTrack);

    this._scrollHandler = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        this.progressBar.style.width = `${progress}%`;
      }
    };
    window.addEventListener("scroll", this._scrollHandler, { passive: true });

    this.shell = makeElement("div", { className: "article-shell" });
    this.articleContainer = makeElement("div", { className: "article-container" });
    this.shell.appendChild(this.articleContainer);
    this.container.appendChild(this.shell);
  }
  renderArticle() {
    this.articleContainer.innerHTML = "";
    const meta = ArticleContent.getMeta();

    const header = makeElement("header", { className: "article-header" }, [
      ["div", { className: "article-meta-row" }, [
        ["span", { className: "article-kicker" }, meta.kicker],
        ["span", { className: "article-read-time" }, "7 min read"]
      ]],
      ["h1", { className: "article-title" }, meta.title],
      ["p", { className: "article-subtitle" }, meta.subtitle]
    ]);
    this.articleContainer.appendChild(header);

    const manifest = ArticleContent.manifest();
    manifest.forEach((sec) => {
      const secWrap = makeElement("section", { className: "section-divider" });

      if (sec.partLabel) {
        secWrap.appendChild(makeElement("div", { className: "section-part-label" }, sec.partLabel));
      }
      secWrap.appendChild(makeElement("h2", { className: "section-heading" }, sec.title));

      sec.blocks.forEach((b) => {
        const blockEl = this.renderBlock(b);
        secWrap.appendChild(blockEl);
      });

      this.articleContainer.appendChild(secWrap);
    });
  }

  renderBlock(blockDef) {
    const blockId = blockDef.id;
    const variants = (typeof ArticleContent[blockId] === "function") ? ArticleContent[blockId]() : ["[Missing block]"];
    const currentIdx = this.activeVariants[blockId] || 0;
    const currentText = variants[currentIdx] || variants[0];

    const wrapper = makeElement("div", {
      className: `block-wrapper ${this.selectedBlockId === blockId ? "block-selected" : ""}`,
      id: `block-${blockId}`
    });

    let contentEl;
    if (blockDef.type === "figure") {
      contentEl = makeElement("figure", { className: "block-figure" }, [
        ["span", { className: "block-figure-icon" }, blockDef.icon || "📎"],
        ["figcaption", { className: "block-figure-caption" }, currentText]
      ]);
    } else if (blockDef.type === "quote") {
      contentEl = makeElement("blockquote", { className: "block-quote" }, currentText);
    } else {
      contentEl = makeElement("p", { className: "block-p" }, currentText);
    }

    wrapper.appendChild(contentEl);

    // Subtle Gutter Controls: sits in the right margin so it adds ZERO vertical height
    const gutterControls = makeElement("div", { className: "block-gutter-controls" });

    if (variants.length > 1) {
      const vCol = makeElement("div", { className: "gutter-v-col" });
      variants.forEach((_, idx) => {
        const badge = makeElement("button", {
          className: `gutter-v-badge ${idx === currentIdx ? "active" : ""}`,
          title: `Switch to variant ${idx + 1}`,
          onclick: (e) => {
            e.stopPropagation();
            this.activeVariants[blockId] = idx;
            this.renderArticle();
            if (this.assistantDialog && this.assistantDialog.element?.isConnected) {
              this.updateAssistant(blockId);
            }
          }
        }, `${idx + 1}`);
        vCol.appendChild(badge);
      });
      gutterControls.appendChild(vCol);
    }

    // Edit studio popup trigger
    const inspectBtn = makeElement("button", {
      className: "gutter-inspect-btn",
      title: `Edit & AI studio for #${blockId}`,
      onclick: (e) => {
        e.stopPropagation();
        this.selectBlock(blockId, true);
      }
    }, "✎");
    gutterControls.appendChild(inspectBtn);

    // Monospace method anchor tooltip visible strictly on hovering the gutter controls
    const idTip = makeElement("span", {
      className: "gutter-id-tip"
    }, `#${blockId}`);
    gutterControls.appendChild(idTip);

    wrapper.appendChild(gutterControls);

    wrapper.addEventListener("click", () => {
      this.selectBlock(blockId, true);
    });

    return wrapper;
  }
  selectBlock(blockId, openDialog = false) {
    this.selectedBlockId = blockId;
    document.querySelectorAll(".block-wrapper").forEach((el) => el.classList.remove("block-selected"));
    const el = document.getElementById(`block-${blockId}`);
    if (el) el.classList.add("block-selected");

    if (openDialog) {
      this.setupAssistantDialog(blockId);
    } else if (this.assistantDialog && this.assistantDialog.element?.isConnected) {
      this.updateAssistant(blockId);
    }
  }

  setupAssistantDialog(blockId = "p_scarcity_1") {
    // If dialog exists and is alive on screen, merely bring to front and refresh content
    if (this.assistantDialog && this.assistantDialog.element && this.assistantDialog.element.isConnected) {
      this.assistantDialog.bringToFront();
      this.updateAssistant(blockId);
      return;
    }

    this.assistantContent = makeElement("div", { style: { padding: "4px" } });

    this.assistantDialog = UITools.makeDialog({
      appendTo: document.body,
      title: "AI Editing Studio & Variant Manager",
      size: [410, 520],
      position: [Math.max(20, window.innerWidth - 440), 68],
      contentElement: this.assistantContent,
      onClose: () => {
        this.assistantDialog = null;
      }
    });

    this.updateAssistant(blockId);
  }
  updateAssistant(blockId) {
    if (!this.assistantContent) return;
    this.assistantContent.innerHTML = "";

    const isFigure = blockId.startsWith("fig_");
    const imgPrompts = ArticleContent.getImagePrompts?.() || {};
    const specificPrompt = imgPrompts[blockId];

    const variants = (typeof ArticleContent[blockId] === "function") ? ArticleContent[blockId]() : [];
    const activeIdx = this.activeVariants[blockId] || 0;

    const header = makeElement("div", { 
      style: { 
        marginBottom: "14px", 
        borderBottom: "1px solid rgba(255,255,255,0.1)", 
        paddingBottom: "10px" 
      } 
    }, [
      ["div", { style: { fontSize: "11px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" } }, isFigure ? "Figure Image Specification" : "Active Method Anchor"],
      ["div", { style: { fontSize: "14px", fontWeight: "700", color: "#60a5fa", marginTop: "2px" } }, `ArticleContent.${blockId}()`],
      ["div", { style: { fontSize: "11px", color: "rgba(255,255,255,0.6)", marginTop: "3px" } }, isFigure ? "Photorealistic Frontier Sci-Fi Image" : `Available text versions: ${variants.length}`]
    ]);
    this.assistantContent.appendChild(header);

    if (isFigure && specificPrompt) {
      const promptCard = makeElement("div", {
        style: {
          background: "rgba(37,99,235,0.15)",
          border: "1px solid rgba(96,165,250,0.35)",
          borderRadius: "8px",
          padding: "12px",
          marginBottom: "14px"
        }
      }, [
        ["div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" } }, [
          ["span", { style: { fontWeight: "700", fontSize: "11px", color: "#93c5fd", textTransform: "uppercase" } }, "Midjourney / DALL-E Prompt"],
          ["span", { style: { fontSize: "10px", color: "rgba(255,255,255,0.5)" } }, "Earth 2 / Firefly Style"]
        ]],
        ["div", { style: { fontSize: "12px", color: "#e2e8f0", lineHeight: "1.45", maxHeight: "150px", overflowY: "auto" } }, specificPrompt]
      ]);
      this.assistantContent.appendChild(promptCard);

      const copyImagePromptBtn = makeElement("button", {
        className: "uw-btn primary",
        style: { width: "100%", marginBottom: "10px", padding: "8px" },
        onclick: () => {
          const fullPrompt = `${imgPrompts.masterAnchor} -- Scene: ${specificPrompt}`;
          navigator.clipboard.writeText(fullPrompt);
          alert(`Copied full photorealistic prompt for #${blockId} to your clipboard!`);
        }
      }, "🎨 Copy Image Prompt (With Master Style)");
      this.assistantContent.appendChild(copyImagePromptBtn);
    }

    const listWrap = makeElement("div", { style: { display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" } });
    variants.forEach((txt, idx) => {
      const isCur = idx === activeIdx;
      const vCard = makeElement("div", {
        style: {
          background: isCur ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.04)",
          border: isCur ? "1px solid #3b82f6" : "1px solid rgba(255,255,255,0.08)",
          borderRadius: "6px",
          padding: "10px",
          cursor: "pointer"
        },
        onclick: () => {
          this.activeVariants[blockId] = idx;
          this.renderArticle();
          this.updateAssistant(blockId);
        }
      }, [
        ["div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "4px" } }, [
          ["span", { style: { fontWeight: "700", fontSize: "11px", color: isCur ? "#93c5fd" : "#94a3b8" } }, `Version ${idx + 1}${isCur ? " (Active)" : ""}`],
          ["span", { style: { fontSize: "10px", color: "rgba(255,255,255,0.4)" } }, `${txt.length} chars`]
        ]],
        ["div", { style: { fontSize: "12px", color: "#cbd5e1", lineHeight: "1.4" } }, txt]
      ]);
      listWrap.appendChild(vCard);
    });
    this.assistantContent.appendChild(listWrap);

    const copyPromptBtn = makeElement("button", {
      className: "uw-btn",
      style: { width: "100%", marginBottom: "10px" },
      onclick: () => {
        const patchPrompt = 
`Please rewrite or provide an alternative version for paragraph method \`ArticleContent.${blockId}\`.
Output the change as a surgical method patch container:

<` + `script data-file="RobotDividend/js/ArticleContent.js" data-method="ArticleContent.${blockId}" data-action="patch">
static ${blockId}() {
  return [
    ${JSON.stringify(variants[activeIdx] || "")},
    "Your alternative version goes here..."
  ];
}
<` + `/script>`;

        navigator.clipboard.writeText(patchPrompt);
        alert(`Copied prompt template to clipboard!\n\nYou can paste this directly to the AI to request alternative versions for #${blockId}.`);
      }
    }, "📋 Copy AI Text Patch Prompt");
    this.assistantContent.appendChild(copyPromptBtn);

    const viewTopBtn = makeElement("button", {
      className: "uw-btn",
      style: { width: "100%" },
      onclick: () => {
        const el = document.getElementById(`block-${blockId}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, "🔍 Scroll to this block in article");
    this.assistantContent.appendChild(viewTopBtn);
  }

  destroy() {
    if (this._scrollHandler) {
      window.removeEventListener("scroll", this._scrollHandler);
    }
    if (this.progressTrack && this.progressTrack.parentNode) {
      this.progressTrack.remove();
    }
    if (this.navBar && this.navBar.parentNode) {
      this.navBar.remove();
    }
    if (this.assistantDialog && typeof this.assistantDialog.close === "function") {
      this.assistantDialog.close();
      this.assistantDialog = null;
    }
  }
  toggleTheme() {
    const isDark = document.body.classList.toggle("theme-dark");
    localStorage.setItem("robot_dividend_theme", isDark ? "dark" : "light");
  }

  showExportDialog() {
    const meta = ArticleContent.getMeta();
    const manifest = ArticleContent.manifest();

    // Generate clean, simple HTML tailored for Quora's rich-text limits
    const htmlParts = [];
    htmlParts.push(`<h2>${meta.title}</h2>`);
    htmlParts.push(`<p><em>${meta.subtitle}</em></p>`);

    manifest.forEach((sec) => {
      if (sec.partLabel) {
        htmlParts.push(`<h3>${sec.partLabel}: ${sec.title}</h3>`);
      } else {
        htmlParts.push(`<h3>${sec.title}</h3>`);
      }

      sec.blocks.forEach((b) => {
        const variants = (typeof ArticleContent[b.id] === "function") ? ArticleContent[b.id]() : [];
        const idx = this.activeVariants[b.id] || 0;
        const text = variants[idx] || variants[0] || "";

        if (b.type === "quote") {
          htmlParts.push(`<blockquote><p>${text}</p></blockquote>`);
        } else if (b.type === "figure") {
          htmlParts.push(`<p><strong>[${b.icon || "Figure"}: ${text}]</strong></p>`);
        } else {
          htmlParts.push(`<p>${text}</p>`);
        }
      });
    });

    const simpleHtml = htmlParts.join("\n");

    // Create plain text fallback
    const plainText = simpleHtml
      .replace(/<h2>(.*?)<\/h2>/g, "$1\n\n")
      .replace(/<h3>(.*?)<\/h3>/g, "$1\n\n")
      .replace(/<blockquote><p>(.*?)<\/p><\/blockquote>/g, "> $1\n\n")
      .replace(/<p><em>(.*?)<\/em><\/p>/g, "$1\n\n")
      .replace(/<p><strong>(.*?)<\/strong><\/p>/g, "$1\n\n")
      .replace(/<p>(.*?)<\/p>/g, "$1\n\n");

    let showingCode = false;

    const previewBox = makeElement("div", {
      className: "export-rendered-preview",
      innerHTML: simpleHtml
    });

    const codeBox = makeElement("textarea", {
      className: "export-code-view",
      readonly: "true",
      value: simpleHtml
    });

    const toggleBtn = makeElement("button", {
      className: "uw-btn",
      onclick: () => {
        showingCode = !showingCode;
        if (showingCode) {
          previewBox.style.display = "none";
          codeBox.style.display = "block";
          toggleBtn.textContent = "👁️ Show Formatted Preview";
        } else {
          codeBox.style.display = "none";
          previewBox.style.display = "block";
          toggleBtn.textContent = "📄 View Simple HTML Code";
        }
      }
    }, "📄 View Simple HTML Code");

    const copyRichBtn = makeElement("button", {
      className: "uw-btn primary",
      onclick: (e) => {
        const btn = e.currentTarget;
        if (navigator.clipboard && window.ClipboardItem) {
          const htmlBlob = new Blob([simpleHtml], { type: "text/html" });
          const textBlob = new Blob([plainText], { type: "text/plain" });
          navigator.clipboard.write([
            new ClipboardItem({
              "text/html": htmlBlob,
              "text/plain": textBlob
            })
          ]).then(() => {
            btn.textContent = "✓ Copied! Paste directly in Quora";
            setTimeout(() => { btn.textContent = "📋 Copy for Quora (Direct Paste)"; }, 2500);
          }).catch(() => {
            this._fallbackCopy(simpleHtml, btn);
          });
        } else {
          this._fallbackCopy(simpleHtml, btn);
        }
      }
    }, "📋 Copy for Quora (Direct Paste)");

    const dialogContent = makeElement("div", { className: "export-container" }, [
      ["p", { className: "export-desc" }, 
        "Formatted with basic HTML headers, italics, and blockquotes compatible with Quora's rich-text editor. Click 'Copy for Quora' and press Ctrl+V / Cmd+V directly into Quora."
      ],
      ["div", { className: "export-view-container" }, [
        previewBox,
        codeBox
      ]],
      ["div", { className: "export-footer-bar" }, [
        toggleBtn,
        copyRichBtn
      ]]
    ]);

    UITools.makeDialog({
      appendTo: document.body,
      title: "Export for Quora & Publications",
      size: [600, 520],
      position: [Math.max(20, Math.floor(window.innerWidth / 2 - 300)), 70],
      contentElement: dialogContent
    });
  }

  _fallbackCopy(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
      if (btn) {
        btn.textContent = "✓ HTML Copied!";
        setTimeout(() => { btn.textContent = "📋 Copy for Quora (Direct Paste)"; }, 2500);
      }
    });
  }
}

globalThis.RobotDividend = RobotDividend;
if (typeof module !== "undefined" && module.exports) module.exports = RobotDividend;