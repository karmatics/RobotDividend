class ArticleContent {
  static getMeta() {
    return {
      kicker: "A thought experiment on work, money, and machines",
      title: "The Robot Dividend",
      subtitle: "What actually happens to a society when machines can finally do all the work?"
    };
  }

  static getImagePrompts() {
    return {
      masterAnchor: "Cinematic 35mm film still, shot on Arri Alexa with anamorphic lenses, natural golden hour frontier lighting. Style reminiscent of Earth 2, Firefly, and Terra Nova: authentic planetary colony aesthetic, realistic wear and tear, weathered matte composite materials, solar array frames, hydraulic utility pistons, unpainted titanium and dusty polymer mixed with rough-hewn timber, canvas shade tarps, and utilitarian denim and canvas workwear. Photorealistic, atmospheric dust motes, subtle lens flare, realistic depth of field, tactile textures. No sleek white plastic, no neon cyberpunk, no post-apocalyptic rubble.",
      fig_dozen: "Cinematic wide-angle shot of a frontier planetary colony. In the foreground, twelve colonists of varied ages and builds in dusty utility flightsuits and canvas work vests sit around a long, hand-crafted wooden trestle table set outdoors in front of a prefab habitat. In the middle ground, a scorched, heat-tiled cargo pod rests on stabilizer pads in a clearing of alien grass. Stepping down from the pod's ramp is a squad of rugged, solar-powered bipedal and quadruped agricultural utility machines with matte olive and unpainted titanium chassis, hydraulic articulated joints, and tool grips. Warm afternoon sunlight, rolling prairie hills and terraformed pine-like trees in the background, authentic Earth 2 and Firefly frontier sci-fi atmosphere, photorealistic 8k.",
      fig_hundred: "A bustling open-air frontier community sawmill on an alien world. In the foreground, a close-up medium shot shows two colonists in heavy leather work gloves and dust-caked denim shirts exchanging payment: one holds a rugged, scratched handheld data slate displaying an amber-monochrome digital certificate depicting a standardized lumber board, while the other holds a physical, freshly milled yellow-pine 2x4 board with a glowing stamped verification barcode. In the background, stacks of uniform cut timber sit under canvas awnings, powered by a rugged hybrid tractor with solar panels and high-torque treads. Golden hazy sunlight, sawdust floating through light beams, photorealistic cinematic film still.",
      fig_trans: "A rugged logging and farming perimeter on a frontier colony. In the background, massive heavy-duty mechanical harvester robots with multi-tread tracks and articulated hydraulic chainsaw arms fell and stack massive alien trees, kicking up plumes of dirt and pine needles. In the foreground, a group of relaxed human colonists sit on a tailgate of an electric utility truck under a shade tarp with warm mugs, holding a tablet showing monthly community distribution ledgers. They are observing the automated harvesting without stress or fatigue. Natural daylight, atmospheric mist, realistic machinery wear and grease, grounded practical sci-fi film still.",
      fig_auto: "A relaxed, sunlit settlement town square and open-air wooden café veranda on a thriving frontier colony planet. In the foreground, a colonist sits on the wooden porch steps playing an acoustic wooden guitar for a small gathering of smiling friends drinking tea, surrounded by hand-painted ceramic mugs and sketchbooks. In the background, quiet autonomous utility drones and compact robotic weeders glide smoothly through lush agricultural terraced fields. A sense of relaxed freedom and chosen vocations, warm late-afternoon sun, terracotta and cedar architectural details mixed with solar roof tiles, beautiful cinematic realism."
    };
  }

  // Section 1: The Scarcity Illusion
  static p_scarcity_1() {
    return [
      "Whenever the conversation turns to AI and robots eventually doing most of the work humans do today, the reaction is almost always the same: if the machines take every job, how will anyone earn enough to eat, pay rent, or see a doctor?",
      "Ask almost anyone what happens when machines take over human labor, and the worry is virtually instantaneous: without jobs, how does anyone buy food, cover housing, or afford healthcare?"
    ];
  }

  static p_scarcity_2() {
    return [
      "Sit with that fear for a second, because it's a strange one. We are worried that inventing a technology capable of producing an overwhelming surplus of food, housing, energy, healthcare and manufactured goods will somehow leave humanity worse off. More of everything, produced with less human effort, adding up to poverty — that should set off alarm bells on its own.",
      "Pause on that anxiety for a moment, because it defies basic arithmetic. We are terrified that achieving an effortless surplus of food, shelter, clean power, and medicine will plunge humanity into ruin. The idea that having vastly more of everything with far less human struggle leads to poverty should strike us immediately as an absurdity."
    ];
  }

  static p_scarcity_3() {
    return [
      "The fear isn't really about machines. It's a mix-up between money and wealth. Money has never been food, or a roof, or a doctor's visit. It's an accounting trick we invented so scarce goods could be rationed fairly in a world where getting anything done required human sweat. For as long as anyone can remember, the equation in our heads has read labor equals money equals survival. So the instant labor is pulled out of that equation, instinct tells us the whole thing collapses and we starve.",
      "The confusion stems from conflating money with actual wealth. Money is not a meal, an apartment, or medical care—it is simply a bookkeeping token engineered to ration scarcity when every ounce of output demanded human perspiration. Because human history has always run on the formula: labor → wages → survival, our nervous system panics the instant labor is severed from the chain."
    ];
  }

  static p_scarcity_4() {
    return [
      "To see why that instinct is wrong, it helps to strip away tax codes, central banks, stock markets, and every other piece of financial plumbing bolted onto modern economies, and instead watch the whole story unfold from scratch — one relationship, then one ledger, at a time — on a small, isolated colony far from any of it."
    ];
  }

  static p_dozen_1() {
      return [
        "Picture twelve colonists settled on a fertile, Earth-like planet with no contact back home. Everyone works hard, but they live reasonably well. Two tend the crops. Two build and maintain the shelters. Two keep the water filtration system humming. The rest split their time felling timber, repairing worn tools, and cooking. Life is steady and honest, but because every pair of hands is needed to keep the community running, nobody takes an indefinite holiday.",
        "On an isolated frontier planet, twelve pioneers establish a self-sufficient homestead. Everyone puts in an honest, full day's work, and in return they enjoy decent meals and secure shelter. A couple of colonists farm, a couple build and patch habitations, and others take on water maintenance, timber, and communal cooking. They get by comfortably, but keeping that standard requires regular effort from all twelve.",
        "Imagine twelve people establishing a new colony. The work is steady and people put in solid days, but nobody is starving and the living is decent. Two settlers handle agriculture, two handle carpentry, two watch the water systems, while the rest manage tools and food prep. As long as everyone pulls their weight, life on the frontier is stable and comfortable."
      ];
    }
  static p_dozen_2() {
    return [
      "There's no money here, and no need for any. Twelve people is small enough that everyone knows everyone else intimately. You know who spent the morning knee-deep in the irrigation ditch and who was up on the roof in the rain fixing a leak. Reputation does the job a ledger would do in a larger group — contribution is visible, freeloading is nearly impossible to hide, and food, water, and shelter get shared without anyone needing to keep score.",
      "Within a tight circle of twelve, currency is completely redundant. Direct social visibility does all the heavy lifting. Everyone sees who worked the irrigation lines and who repaired the solar converters. Mutual accountability replaces ledgers; freeloading is immediately conspicuous, and survival essentials circulate freely because reputation is the only credit that matters."
    ];
  }

  static p_dozen_3() {
      return [
        "Then, one day, a cargo pod drifts down from orbit. Earth has sent a fleet of automated utility robots equipped with their own self-contained power packs and diagnostic systems. Between them, they can handle almost everything the colony needs a human for: plowing, construction, cooking, and heavy repairs.",
        "Then a supply pod touches down. Inside is a squad of versatile autonomous machines, complete with an onboard self-sustaining power system. Straight out of the crate, they are capable of handling the heavy lifting: planting crops, hauling timber, maintaining infrastructure, and preparing meals.",
        "Everything changes when a supply drop arrives carrying a complement of rugged utility automatons. Powered by their own modular energy systems and built for self-maintenance, these machines can do all the routine physical chores: farming, carpentry, plumbing, and cooking."
      ];
    }
  static p_dozen_4() {
    return [
      "Do the twelve colonists panic because they've just \"lost their jobs\"?",
      "Do these twelve pioneers shudder in fear because their labor has been rendered obsolete?"
    ];
  }

  static p_dozen_5() {
    return [
      "Of course not — because the real breakthrough of the robots isn't just that they produce more stuff; it's that the colonists no longer have to work. For the first time, survival is completely decoupled from sweat. Yes, the machines mill sturdier lumber, plant larger fields, and build better homes at machine speed. But the profound transformation is human freedom: the twelve colonists don't have to spend their waking hours toiling just to stay alive. Their time is entirely their own. They can read, explore, study, craft, or simply spend endless sunny afternoons together doing whatever they want.",
      "Not at all. While having more food and sturdier habitations is great, the true miracle of the machines is much simpler: people no longer have to work. Compulsory labor vanishes overnight. Because autonomous utility units handle the plowing, hauling, maintenance, and cooking, the settlers are freed from the daily grind of survival. The defining gift of automation isn't just a bigger pile of goods—it is total sovereignty over their own time.",
      "Far from it. Extra grain and roomier housing are welcome benefits, but they miss the real point: the machines eliminate the need for human labor entirely. No one has to chop wood in the freezing rain or spend dawn-to-dusk pulling weeds just to earn the right to eat. The work is done, survival is guaranteed, and the colonists are finally free to spend their lives doing whatever they choose."
    ];
  }
  static fig_dozen() {
      return [
        "Fig. 1: Twelve colonists, a surplus harvest, and utility robots stepping off the cargo pod.",
        "Fig. 1: Machine speed transforms the homestead: larger houses, plentiful food, and zero required chores."
      ];
    }

  static p_dozen_6() {
    return [
      "This is the core insight: work was never the ultimate goal of human existence; it was merely the price of admission to stay alive. When machines pay that price for us, we don't lose our livelihood—we gain our lives. The arrival of automated labor means nobody has to work anymore unless they genuinely choose to.",
      "Work has always been a means to an end—a tax paid in sweat to secure food, shelter, and comfort. When automatons pay that tax instead of people, nothing of human value is destroyed. What is gained is the rarest commodity in human history: the freedom to spend your days doing whatever you want."
    ];
  }
  // Section 3: Part Two - The Hundred
  static p_hundred_1() {
    return [
      "Now shift your focus across the continent to a separate settlement on the other side of the planet—a sister colony of a hundred people that hasn't received any automated pods. Here, every brick, timber, and crop is still produced entirely by human hands. But with a hundred settlers, something fundamental breaks down. A hundred sits right around what anthropologists call Dunbar’s number: roughly the ceiling on how many interpersonal relationships a human mind can track closely enough to know, by memory alone, who has been pulling their weight. Reputation can no longer balance the books.",
      "To see how money enters the picture, imagine an entirely different colony on the far side of the planet: a community of a hundred pioneers where machines haven't arrived yet, and everyone still toils under the old rules. In a group this size, organic trust fails. You hit Dunbar’s number—the threshold where you can no longer keep mental tabs on a hundred different people's daily work. Without that direct personal visibility, reputation alone can no longer serve as the economic ledger."
    ];
  }

  static p_hundred_2() {
    return [
      "Without some way to verify contribution, trade turns messy. A farmer has no simple way to know whether the stranger asking for tomatoes spent yesterday chopping firewood or napping in the shade. To keep exchange fair and freeloading rare, the colony needs a stand-in for trust: money.",
      "Scale dissolves organic trust. A farmer cannot audit whether the newcomer requesting a bushel of grain spent the morning felling timber or resting in a hammock. To prevent social friction and keep distribution orderly among relative strangers, the settlement requires a portable surrogate for verified contribution: a monetary unit."
    ];
  }

  static p_hundred_3() {
      return [
        "Rather than inventing a fiat currency out of thin air, the community anchors its money to something tangible and standardized: milled lumber from the local sawmill. They create a unit called the Credit, pegged directly to a standard 2×4 board. If you're building a shed or an extra bedroom and need raw timber, you can always cash in your Credits at the lumber yard for physical 2×4s. But day to day, whether tracked in paper scrip or on a simple digital balance, Credits circulate just like dollars to buy groceries, hire an electrician, or pay the settlement doctor.",
        "To keep exchange clear, the colony backs its currency with real material wealth: standard yellow-pine 2×4s produced at the community sawmill. They call the unit a Credit. One Credit can always be redeemed at the storage yard for an actual 2×4 board—handy whenever someone is adding an extension to their home or building furniture. For everyday trade, Credits simply circulate like ordinary dollars, on paper or digital ledgers, buying bread, tailoring, or medical care.",
        "They establish a standard monetary unit: the Credit, backed one-to-one by standardized timber from the town mill. Anyone who needs building materials for a project can walk into the warehouse and cash their Credits in for actual 2×4 lumber. In daily life, nobody drags boards through the marketplace; people simply swap Credits like dollars to purchase food, services, and shelter."
      ];
    }

  static fig_hundred() {
      return [
        "Fig. 2: The Credit standard: redeemable for milled 2×4 lumber, circulating like dollars for daily trade.",
        "Fig. 2: A warehouse-backed Credit: usable as building materials or traded freely for goods and services."
      ];
    }

  static p_hundred_4() {
    return [
      "Notice why this currency standard works. Unlike gold, which carries value mostly because everyone agrees it does, milled lumber has immediate, intrinsic utility: you can always use a standard 2×4 to frame an extra room, shore up a storm wall, or build furniture. The Credit isn't an abstract fiction; it is directly redeemable for something eminently useful on the frontier. At the same time, it serves as an honest claim check on the colony's combined output. Before automation, this system is strict: if you don't contribute labor, you don't earn Credits, and without Credits you can't draw on community resources.",
      "The Credit is anchored in real, tangible utility. Unlike gold—which holds value largely by convention—a standard 2×4 board has unmistakable practical worth: it directly builds shelter, fences, and tools. Anyone holding a Credit holds a guarantee for something undeniably useful in the settlement. In an unautomated colony, this makes the ledger airtight: every unit of lumber and grain demands human sweat, so earning Credits requires contributing work.",
      "Choosing milled lumber anchors the economy in something with genuine, practical value. A 2×4 isn't like gold, whose worth relies on shared belief; it is something you can immediately use to build a roof over your head. The Credit is a promise backed by physical utility. Before machines arrive, that standard enforces reality: without labor, nothing gets built, so access to the colony's bounty must be earned with work."
    ];
  }
  static p_trans_1() {
      return [
        "Then a cargo pod touches down carrying an automated workforce, but only enough units to handle about half the colony's total labor. The machines take over the heaviest tasks: clearing land, felling trees, and rough framing. But between limited machinery and nuanced jobs that require human dexterity, plenty of work remains across the settlement.",
        "A partial shipment of utility robots lands at the hundred-person colony. There aren't enough machines to automate everything, but they immediately take over the hardest chores—deep excavation, row planting, and bulk logging. Roughly half of the community's total workload still demands human hands."
      ];
    }

  static p_trans_2() {
      return [
        "Under traditional rules, this looks like an existential shock. If machines do half the work, half the workforce could suddenly find themselves without an income—and without Credits, how do they purchase the food and lumber the machines are producing in record quantities? Letting half the population go hungry while community silos overflow with machine-harvested grain would be sheer madness.",
        "Seen through the old lens, automation sounds like disaster: fewer available shifts means fewer people earning Credits. But the food in the warehouse didn't vanish; it multiplied. Letting people go without meals or housing simply because automated equipment made their old tasks obsolete is a failure of bookkeeping, not a shortage of goods."
      ];
    }

  static p_trans_3() {
      return [
        "The solution is straightforward: an update to the accounting. The robots are community property, deployed for everyone's benefit. Because they generate a steady, automated surplus of food, materials, and power, the settlement issues an unconditional baseline stipend of Credits to every citizen each month. Call it the Robot Dividend.",
        "The community simply updates its ledger. Since the automated fleet belongs to everyone and pumps out surplus staples, the colony distributes a regular baseline of Credits to every settler, unconditionally. The dividend decouples basic survival from having to hold down a job."
      ];
    }
  static p_trans_4() {
    return [
      "Set that dividend at a level that reliably covers basic housing, food, and essentials, and survival stops being conditional on employment. Nobody starves, because the robots — not their own two hands — are now doing half the colony's necessary labor."
    ];
  }

  static fig_trans() {
      return [
        "Fig. 3: Heavy chores move to machines; the dividend flows to all, while work becomes a choice.",
        "Fig. 3: Public automation funds a baseline Credit dividend—some work full-time, others choose leisure."
      ];
    }
  static p_trans_5() {
      return [
        "Crucially, this dividend doesn't abolish work—it makes it optional. In the real world, labor doesn't divide neatly into everyone working four-hour shifts. Some colonists choose not to work at all, living comfortably on their baseline dividend while raising children, writing, or studying. Others choose to work full-time running the bakery, managing the nursery, or designing specialized tools, earning extra Credits to buy luxury rations, custom furnishings, or larger quarters. Work shifts from a coerced requirement for survival into a personal choice.",
        "This matches how human preferences actually function. Rather than forcing everyone into half-time schedules, the system lets people choose their own balance. Some settlers decide to step away from formal employment entirely, happily living on their monthly dividend to pursue research, art, or leisure. Others prefer to work full-time in clinics, fabrication shops, or kitchens, collecting handsome stacks of supplemental Credits to spend on high-end comforts and bigger building projects.",
        "Instead of an artificial mandate where everyone works shorter hours, the colony looks a lot like real life: some people choose full-time careers because they love building or teaching, while others work no formal jobs whatsoever and live purely on the dividend. Those who take on shifts earn extra Credits on top of their stipend, letting them afford fancy meals or craft goods, while those who don't work still enjoy secure food and shelter."
      ];
    }
  // Section 5: Part Four - Full Automation
  static p_auto_1() {
    return [
      "Push the thought experiment one step further. Say the next shipment brings enough robots to take over the last of the necessary work — the toolmaking, the cooking, even most of the medicine. What happens now?"
    ];
  }

  static p_auto_2() {
      return [
        "The pattern should now be unmistakable. The Credit dividend simply expands to cover the colony's entire material baseline, just like the original twelve colonists enjoyed total abundance once machines did all the chores. The only distinction is scale: a hundred people coordinate an automated economy through Credits and ledgers, whereas twelve people could rely on direct face-to-face trust. Money was only ever a bridge for communities too large to run on memory. When machines handle the work, the rule is simple: distribute the surplus.",
        "With full automation, the ledger fulfills its true purpose. The monthly Credit dividend easily covers all food, clothing, housing, and comforts. The accounting layer—Credits, ledgers, distribution—was merely a tool invented when populations outgrew Dunbar's number and needed a way to measure scarce sweat. Once machines supply all the sweat, money stops being a rationing device for survival and becomes a simple method for sharing abundance.",
        "What worked for the twelve now works for the hundred. The universal dividend of Credits now purchases whatever anyone needs from automated warehouses. The Credit was never magical; it was simply a bookkeeping device for organizing labor among strangers. Once the labor is performed entirely by machines, the ledger's sole function is to hand out the bounty."
      ];
    }
  static fig_auto() {
    return [
      "Fig. 4: Robots keep the colony running; people spend their days on what they choose."
    ];
  }

  static p_auto_3() {
    return [
      "In this world, nobody really has to work. People simply do whatever they want with their time. That's not to say that people can't still offer specific goods or custom creations for money if they choose to, but in general, if you want to be a musician and play for an audience, you can just play any of the cafés or venues without worrying about whether you get paid. Getting paid isn't the point anymore. You're playing because you enjoy it, you're sharing it with people who appreciate it, and that's how it should be.",
      "Jobs as a ticket for survival cease to exist entirely. Work becomes voluntary vocation. If someone wants to make music, they can simply play in any public space, venue, or café without the anxious calculation of whether it pays the rent. You create because you love creating, not because you need to satisfy a ledger to stay alive."
    ];
  }

  static quote_abundance() {
    return [
      "The arrival of machines never once creates scarcity. Every single time, it creates a surplus."
    ];
  }

  static p_conc_1() {
      return [
        "Run the thought experiment back — from twelve colonists to a hundred, and from a hundred who must all work to a hundred whose robots do everything — and one thing stays constant the whole way through: the arrival of machines never once creates scarcity. Every time, it creates a surplus. It's not a question of whether the math adds up, because the math obviously does. When physical production multiplies, the total wealth of the community multiplies with it.",
        "Trace the progression from start to finish: automation never subtracts from physical reality; it multiplies it. The machine does not manufacture famine; it produces an abundance. The question is never whether the underlying math balances, because the math is undeniable: when you have more food, more housing, and more power produced than ever before, the society is indisputably wealthier.",
        "Across both settlements, the lesson is identical: machines do not destroy wealth, they generate an outright surplus. Anyone asking whether the math works out is looking at the wrong ledger. The physical math is absolute: when machines produce twice as much in half the time, the abundance is real, tangible, and ready for distribution."
      ];
    }
  static p_conc_2() {
      return [
        "Poverty in an automated world isn't an engineering failure — production is at an all-time high. It is an accounting failure: refusing to update the ledger to reflect the mountain of goods sitting in the depot. The colonists who solved this didn't tell the machines to slow down. They simply decided that everyone was entitled to enjoy the fruits of what the machines produced.",
        "Deprivation amid automated machinery is never a shortage of stuff; it is an outdated rulebook. When automated factories and farms run around the clock, abundance is already a physical fact. The only real step the pioneers had to take was recognizing that the community as a whole should reap the fruits of mechanical labor, rather than locking the warehouses until someone showed up with a timecard.",
        "A society that starves in front of automated granaries suffers from an intellectual confusion, not a material deficit. You do not need to invent busywork to justify feeding people when machines are already doing the heavy lifting. You simply update the distribution system so every citizen enjoys the fruits of automated production."
      ];
    }

  static p_conc_scope() {
      return [
        "Whether you call this Universal Basic Income, Universal High Income, or a negative income tax, critics reflexively ask the same question: Does the math actually add up? As this thought experiment demonstrates, the fundamental math obviously does. We will dive into the specific policy levers, transition phases, and monetary mechanics for Earth in a subsequent document. But the essential baseline is established: we must let go of the reflex assumption that you need a job in order to get food, shelter, healthcare, gadgets, and comfort — especially when the entire reason you don't have a job is that the machines are already making them.",
        "Whether framed as UBI, Universal High Income, or negative taxation, policy debates almost always bog down in doubt over whether the numbers balance. Yet at the macroeconomic level, the math is indisputable: when machines produce a surplus of essentials, society can afford to distribute them. Navigating a practical transition on modern Earth involves intricate institutional steps that we will explore in a companion paper. But our conceptual starting point must be clear: human beings should not need a formal job just to qualify for the goods and tools of life when machines are doing the producing.",
        "Call it a dividend, UBI, or Universal High Income — the persistent anxiety is whether the math holds water. It obviously does: physical abundance guarantees the balance sheet. Setting up the real-world plumbing, taxes, and transitional safety nets is a detailed roadmap we'll outline in a future piece. For now, the core conclusion stands: you don't have to invent busywork to justify letting people enjoy food, housing, technology, and leisure in an automated world."
      ];
    }

  static manifest() {
      return [
        {
          section: "scarcity",
          title: "The scarcity illusion",
          blocks: [
            { id: "p_scarcity_1", type: "p" },
            { id: "p_scarcity_2", type: "p" },
            { id: "p_scarcity_3", type: "p" },
            { id: "p_scarcity_4", type: "p" }
          ]
        },
        {
          section: "dozen",
          partLabel: "Part One",
          title: "The Dozen: pure abundance",
          blocks: [
            { id: "p_dozen_1", type: "p" },
            { id: "p_dozen_2", type: "p" },
            { id: "p_dozen_3", type: "p" },
            { id: "p_dozen_4", type: "p" },
            { id: "p_dozen_5", type: "p" },
            { id: "fig_dozen", type: "figure", icon: "🤖" },
            { id: "p_dozen_6", type: "p" }
          ]
        },
        {
          section: "hundred",
          partLabel: "Part Two",
          title: "The Hundred: the Credit standard",
          blocks: [
            { id: "p_hundred_1", type: "p" },
            { id: "p_hundred_2", type: "p" },
            { id: "p_hundred_3", type: "p" },
            { id: "fig_hundred", type: "figure", icon: "🪵" },
            { id: "p_hundred_4", type: "p" }
          ]
        },
        {
          section: "trans",
          partLabel: "Part Three",
          title: "The half-robot shipment: the transition to a dividend",
          blocks: [
            { id: "p_trans_1", type: "p" },
            { id: "p_trans_2", type: "p" },
            { id: "p_trans_3", type: "p" },
            { id: "p_trans_4", type: "p" },
            { id: "fig_trans", type: "figure", icon: "⚙️" },
            { id: "p_trans_5", type: "p" }
          ]
        },
        {
          section: "auto",
          partLabel: "Part Four",
          title: "Full automation: the free colony",
          blocks: [
            { id: "p_auto_1", type: "p" },
            { id: "p_auto_2", type: "p" },
            { id: "fig_auto", type: "figure", icon: "🌱" },
            { id: "p_auto_3", type: "p" },
            { id: "quote_abundance", type: "quote" }
          ]
        },
        {
          section: "conclusion",
          partLabel: "Conclusion",
          title: "Updating the ledger",
          blocks: [
            { id: "p_conc_1", type: "p" },
            { id: "p_conc_2", type: "p" },
            { id: "p_conc_perpetual", type: "p" },
            { id: "p_conc_scope", type: "p" }
          ]
        }
      ];
    }
  static p_conc_perpetual() {
      return [
        "To people trained in traditional scarcity, an unconditional dividend often sounds suspiciously like a perpetual motion machine — an attempt to get free energy or free lunch out of nowhere. But this is the exact opposite. A perpetual motion machine is impossible because in a closed system you cannot extract more energy than you put in. An automated economy, however, is not a closed system. The robotic fleet and AI represent a massive, continuous influx of external labor, power, and productive capacity. You aren't conjuring wealth from thin air; you are simply harvesting the physical output that autonomous machines are pouring into the colony every single day.",
        "Skeptics often dismiss universal dividends as economic perpetual motion, assuming that distributing wealth without mandatory human jobs means getting something for nothing. In reality, the mechanics work in reverse. Perpetual motion machines fail because closed systems have rigid thermodynamic limits. But introducing automation breaks the system wide open: robots and machine intelligences inject colossal amounts of fresh physical work into the world. The surplus isn't imaginary accounting; it is the concrete result of thousands of machine hours operating on your behalf.",
        "At first glance, receiving goods without requiring sweat sounds like trying to build a machine that runs forever on nothing. But the physics here is straightforward: this is not a closed loop. The robots, automated tractors, and generative systems are actively doing the heavy lifting. They harvest the grain, mill the timber, and maintain the infrastructure. The reason the math works is that you have added a massive new producer to the equation."
      ];
    }
}

globalThis.ArticleContent = ArticleContent;
if (typeof module !== "undefined" && module.exports) module.exports = ArticleContent;