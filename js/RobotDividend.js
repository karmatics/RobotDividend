class RobotDividend {
  async run(env) {
    if (!env || !env.container) {
      throw new Error("[RobotDividend] run() requires an environment object with a valid container.");
    }
    this.env = env;
    this.container = env.container;
    this.activeVariants = {};
    this.selectedBlockId = null;

    this.initUI();
    this.renderArticle();
    this.setupAssistantDialog();
  }

  initUI() {
    this.container.innerHTML = "";

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

    const strip = makeElement("div", { className: "variant-strip" });
    const label = makeElement("span", { style: { color: "#94a3b8", fontWeight: "600" } }, `#${blockId}`);
    strip.appendChild(label);

    if (variants.length > 1) {
      variants.forEach((_, idx) => {
        const badge = makeElement("span", {
          className: `variant-badge ${idx === currentIdx ? "active" : ""}`,
          onclick: (e) => {
            e.stopPropagation();
            this.activeVariants[blockId] = idx;
            this.renderArticle();
            if (this.assistantDialog) this.updateAssistant(blockId);
          }
        }, `v${idx + 1}`);
        strip.appendChild(badge);
      });
    }

    const inspectBtn = makeElement("button", {
      className: "block-inspect-btn",
      onclick: (e) => {
        e.stopPropagation();
        this.selectBlock(blockId);
      }
    }, "Edit / AI Prompt");
    strip.appendChild(inspectBtn);

    wrapper.appendChild(strip);

    wrapper.addEventListener("click", () => {
      this.selectBlock(blockId);
    });

    return wrapper;
  }

  selectBlock(blockId) {
    this.selectedBlockId = blockId;
    document.querySelectorAll(".block-wrapper").forEach((el) => el.classList.remove("block-selected"));
    const el = document.getElementById(`block-${blockId}`);
    if (el) el.classList.add("block-selected");
    this.updateAssistant(blockId);
  }

  setupAssistantDialog() {
    this.assistantContent = makeElement("div", { style: { padding: "4px" } });

    this.assistantDialog = UITools.makeDialog({
      appendTo: document.body,
      title: "AI Editing Studio & Variant Manager",
      size: [390, 500],
      position: [Math.max(20, window.innerWidth - 430), 40],
      contentElement: this.assistantContent
    });

    this.updateAssistant("p_scarcity_1");
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
    if (this.assistantDialog && typeof this.assistantDialog.close === "function") {
      this.assistantDialog.close();
    }
  }
}

globalThis.RobotDividend = RobotDividend;
if (typeof module !== "undefined" && module.exports) module.exports = RobotDividend;