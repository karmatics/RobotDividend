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

  // Section 2: Part One - The Dozen
  static p_dozen_1() {
    return [
      "Picture twelve colonists stranded on a fertile, Earth-like planet, with no contact back home. Life is hard, but they get by. Survival demands that everyone puts in grueling, long hours from sunrise to nightfall. Two tend the crops. Two build and patch the shelters against storms. Two keep the water filtration system running. The rest split their waking hours between felling timber, repairing worn tools, and cooking for the group. Nobody gets a free pass, because missing even one person's labor puts everyone on the brink of hunger.",
      "On an isolated frontier planet, twelve pioneers struggle to establish a foothold. It is an exhausting existence, but they manage to endure. To keep starvation and exposure at bay, every single colonist works twelve-hour days. Two farm the fields, two maintain the shelters, two manage the water supply, and the rest rotate through foraging, tool-making, and communal cooking. The hours are brutal, but because every hand is accounted for, the colony survives."
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
      "Then, one day, a cargo pod drifts down from orbit. Earth has sent a fleet of solar-powered, self-maintaining robots, and between them they can handle everything the colony currently needs a human for: farming, construction, cooking, repairs."
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
      "Of course not — and it's worth noticing exactly why not. The crops still get harvested. The roofs still get patched. The physical things the colony actually needs keep showing up exactly as before. What vanished wasn't the wealth; it was the toil required to produce it. The twelve are now free to spend their afternoons hiking the ridgeline, reading, teaching one another, or simply sitting together over a meal none of them had to cook."
    ];
  }

  static fig_dozen() {
    return [
      "Fig. 1: Twelve colonists, one shared table, and a fleet of robots stepping off the cargo pod."
    ];
  }

  static p_dozen_6() {
    return [
      "This is the whole argument in miniature: work has never been the point. It's a means — a cost paid to get things people actually want: food, shelter, comfort, time with people they care about. When a machine can pay that cost instead of a person, nothing of value is lost. Something is gained."
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
      "The settlers still have their old phones and laptops, quietly running a local network, so instead of declaring some currency into existence out of nothing, they anchor it to something real and already standardized: the 2×4 lumber board coming off the community sawmill. Whenever the mill finishes a batch, the colony's small government registers a matching number of digital certificates — call the unit a Board. One digital Board can always be redeemed at the warehouse for one physical 2×4. Nobody actually hauls lumber to market, though. Day to day, people simply tap Boards, or fractions of one, back and forth on their phones to buy tomatoes, pay the doctor, or rent a spare room."
    ];
  }

  static fig_hundred() {
    return [
      "Fig. 2: A digital Board, redeemable for lumber, circulating hand to hand."
    ];
  }

  static p_hundred_4() {
    return [
      "Notice what the money is doing. It isn't wealth in itself — nobody can eat a Board. It's a receipt for verified labor, redeemable for a share of what the colony produces. And because there are no robots yet at this stage, that receipt system is airtight: if you don't work, you don't earn Boards, and if you don't earn Boards, you don't eat. Total human effort is still the one thing standing between the colony and hunger, so the currency simply mirrors that reality back at everyone, honestly."
    ];
  }

  // Section 4: Part Three - The Half-Robot Shipment
  static p_trans_1() {
    return [
      "A cargo pod finally touches down at the hundred-person colony—but this shipment brings only a partial fleet, enough to take over roughly half of the colony's necessary labor. The bots take on the most brutal physical tasks: heavy timber felling, row-crop farming, and deep sewer maintenance. But between simple equipment scarcity—there just aren't enough robots to go around yet—and tasks the current models aren't equipped to handle, fifty people's worth of labor is still required to keep the settlement humming.",
      "A shipment of automated equipment arrives at the settlement, but it's only a partial deployment. There simply aren't enough units to cover every task, and the current models still struggle with fine-dexterity work like precision fabrication, surgery, and nuanced maintenance. The machines absorb the crushing, back-breaking chores, but between equipment limits and mechanical scarcity, half of the settlement's total workload still requires human attention."
    ];
  }

  static p_trans_2() {
    return [
      "Run this through the old rulebook and there's an immediate crisis. Fifty people wake up with no job, no way to earn Boards, and therefore no way to buy the food the robots are now harvesting on everyone's behalf. Do you let half the colony go hungry while the other half works ten-hour shifts surrounded by a warehouse of surplus grain?",
      "Under traditional economic dogma, this triggers an instant catastrophe: fifty settlers are suddenly 'unemployed.' With no wages, they lack the means to purchase food that the machines are already harvesting in record volumes. Does half the population starve amidst towering silos of automated abundance simply because they lacked a shift to work?"
    ];
  }

  static p_trans_3() {
    return [
      "Obviously not — and the fix isn't complicated, it's an update to the accounting. The robotic fleet is jointly owned, community property, not the private machinery of one lucky colonist who got there first. Because it's producing a measurable surplus of food, lumber, and power on behalf of everyone, the government starts issuing a baseline stipend of Boards to every citizen, every month, no work required. Call it the Robot Dividend.",
      "Obviously not—and the resolution isn't ideological, it's mathematical. Because the automated machines operate as a shared public utility producing surplus food and energy for all, the community distributes an unconditional baseline dividend of Boards to every resident each month. Survival is decoupled from employment."
    ];
  }

  static p_trans_4() {
    return [
      "Set that dividend at a level that reliably covers basic housing, food, and essentials, and survival stops being conditional on employment. Nobody starves, because the robots — not their own two hands — are now doing half the colony's necessary labor."
    ];
  }

  static fig_trans() {
    return [
      "Fig. 3: Half the labor moves to machines; the dividend flows to everyone below."
    ];
  }

  static p_trans_5() {
    return [
      "Crucially, this doesn't make human contribution pointless. The clinic, the bakery, and the workshop still need staff, so they offer Boards on top of the baseline dividend to anyone who steps up. And because machines now absorb half the colony's total workload, nobody needs to grind out grueling forty-hour weeks anymore—many settlers happily work just a few hours a week to earn some extra Boards for luxury rations or a larger room. Every colonist now faces a genuine choice instead of a threat of starvation: live comfortably on the dividend and spend their days hiking, writing, or raising children—or trade a handful of hours of their free time for premium comforts.",
      "With the machines doing the heavy lifting, the overall demand for human labor collapses. Instead of mandatory ten-hour days, people can pick up a shift for just an afternoon or a few hours a week whenever extra hands are needed at the clinic or bakery. Those hours earn supplemental Boards on top of the universal dividend. Work transforms from a life-or-death coercion into a voluntary trade: live simply on the community's automated dividend, or chip in a bit of your week for extra perks and bespoke goods."
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
      "By this point the pattern should look familiar, because it already played out once, back on page one, with twelve colonists and zero robots doing the opposite job. The dividend simply grows to cover the whole colony's needs, the same way the original twelve never required \"jobs\" to eat once robots did everything for them. The only real difference is scale: a hundred people now share a fully automated economy through a currency system, instead of through twelve people's direct, personal trust in one another. The accounting layer — money, Boards, a dividend — was only ever a workaround for a group too large to run on memory and reputation alone. Once machines are doing all the necessary labor, that layer's job simplifies down to a single instruction: split the surplus."
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

  // Section 6: Conclusion
  static p_conc_1() {
    return [
      "Run the thought experiment back — from twelve colonists to a hundred, and from a hundred who must all work to a hundred whose robots do everything — and one thing stays constant the whole way through: the arrival of machines never once creates scarcity. Every time, it creates a surplus. Whether that surplus gets shared, through direct reputation among twelve neighbors or through a currency and a dividend among a hundred, was never a technical question. It's a bookkeeping one.",
      "Trace the progression from start to finish: automation never subtracts from physical reality; it multiplies it. The machine does not manufacture famine; it produces an abundance. Whether that abundance reaches everyone's table was never an engineering obstacle—it has always been an accounting decision."
    ];
  }

  static p_conc_2() {
    return [
      "Poverty in an automated world isn't a failure of production — production, by definition, is going up. It's a failure to update the ledger to match the abundance already sitting in the warehouse. The colonists who thought clearly about their situation never asked the machines to work less hard. They simply rewrote who gets to claim credit for what the machines produce."
    ];
  }

  static p_conc_scope() {
    return [
      "How our actual world navigates the transition to a post-scarcity monetary system is, of course, a practical question far beyond the scope of this essay. The goal here is to establish a clear baseline: we have to let go of the reflex assumption that you need a job in order to have money—especially in a future where the entire reason people don't have jobs is that the machines are already doing the work."
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
        title: "The Hundred: money and the \"2×4 standard\"",
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
          { id: "p_conc_scope", type: "p" }
        ]
      }
    ];
  }
}

globalThis.ArticleContent = ArticleContent;
if (typeof module !== "undefined" && module.exports) module.exports = ArticleContent;