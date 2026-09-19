import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Counter, MaskLine, Reveal, RuleDraw, SectionLabel } from "../components/ui";

const PLANS = [
  {
    id: "cabot",
    name: "Classic Barn Home",
    sqft: "2,367",
    beds: "3",
    baths: "2.5",
    frame: "Post & Beam",
    place: "New England Cape",
    image: "images/exterior-barn.jpg",
    blurb:
      "A classic barn silhouette with lofted post-and-beam volume throughout. The great room rises the full height of the frame, with a sleeping loft tucked under the eaves.",
  },
  {
    id: "lakehouse",
    name: "Custom Timber Residence",
    sqft: "2,408",
    beds: "4",
    baths: "3",
    frame: "Post & Beam",
    place: "Lakeside / Open Plan",
    image: "images/hero-interior.jpg",
    blurb:
      "Open concept living defined entirely by the timber frame — no interior load walls, so light and sightlines travel the length of the house and out to the water.",
  },
  {
    id: "granite",
    name: "Mountain Retreat",
    sqft: "2,733",
    beds: "3",
    baths: "2",
    frame: "Single-Story Post & Beam",
    place: "Sloping Lot / Walk-Out",
    image: "images/exterior-dusk.jpg",
    blurb:
      "Everything on one level, designed to sit into a hillside. Vaulted ceilings carry the open plan while the primary suite and study stay quietly apart from the communal rooms.",
  },
  {
    id: "eastman",
    name: "Single-Level Timber Home",
    sqft: "1,824",
    beds: "2–4",
    baths: "2.5",
    frame: "Compact Post & Beam",
    place: "Right-Sized Living",
    image: "images/kitchen.jpg",
    blurb:
      "Proof that a smaller footprint needn't feel small. Vaulted ceilings, an open first level and a finished lower level deliver everything a larger home affords.",
  },
];

export function Homes() {
  const [active, setActive] = useState(1);
  const plan = PLANS[active];

  return (
    <section id="homes" className="relative bg-paper-2 py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="02" title="Post & Beam Home Designs" />

        <div className="mt-14 grid grid-cols-12 items-end gap-y-8 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-display text-[clamp(2.5rem,5.6vw,5.25rem)] font-light leading-[0.98] tracking-[-0.028em] text-ink">
              <MaskLine>Custom timber homes</MaskLine>
              <MaskLine delay={0.1} className="italic text-oxide">
                designed around your lifestyle.
              </MaskLine>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.16}>
              <p className="text-[1.02rem] leading-[1.85] text-ink/70">
                Yankee Barn Homes creates custom panelized post and beam homes. Explore flexible designs that combine traditional craftsmanship, energy-conscious construction, and layouts tailored to each homeowner.
              </p>
            </Reveal>
          </div>
        </div>

        {/* feature */}
        <div className="relative mt-14">
          <div className="grain relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={plan.id}
                src={plan.image}
                alt={`${plan.name} — ${plan.frame}`}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/9] lg:aspect-[21/9]"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1C1714]/70 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap items-end justify-between gap-6"
                >
                  <div>
                    <p className="label text-cream/70">{plan.place}</p>
                    <h3 className="mt-3 font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-medium leading-none tracking-[-0.02em] text-cream">
                      {plan.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-x-10 gap-y-4">
                    {[
                      ["Sq Ft", plan.sqft],
                      ["Beds", plan.beds],
                      ["Baths", plan.baths],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <p className="label text-cream/60">{k}</p>
                        <p className="tnum mt-1.5 font-display text-2xl font-light text-cream">
                          {v}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* data slab overlapping the image edge */}
          <Reveal delay={0.1}>
            <div className="relative z-10 -mt-px grid grid-cols-12 gap-y-6 bg-paper lg:-mr-10 lg:max-w-[46rem] lg:px-10 lg:py-10">
              <div className="col-span-12 px-6 pt-8 lg:col-span-9 lg:px-0 lg:pt-0">
                <p className="text-[1.05rem] leading-[1.85] text-ink/78">{plan.blurb}</p>
                <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
                  <span className="label bg-lichen/12 px-4 py-2 text-lichen">
                    {plan.frame}
                  </span>
                  <a
                    href="#contact"
                    className="label border-b border-ink/30 pb-1 text-ink transition-colors hover:border-oxide hover:text-oxide"
                  >
                    Request the floor plans
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* rail */}
        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {PLANS.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`group relative w-[75vw] shrink-0 snap-start text-left transition-opacity duration-500 sm:w-[42vw] lg:w-[22rem] ${
                active === i ? "opacity-100" : "opacity-65 hover:opacity-100"
              }`}
            >
              <div className="grain overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className={`aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05] ${
                    active === i ? "grayscale-0" : "grayscale-[35%]"
                  }`}
                />
              </div>
              <div
                className={`mt-4 h-px w-full origin-left transition-transform duration-700 ${
                  active === i ? "scale-x-100 bg-oxide" : "scale-x-0 bg-ink/25"
                }`}
              />
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h4 className="font-display text-xl font-medium tracking-[-0.015em] text-ink">
                  {p.name}
                </h4>
                <span className="label tnum text-taupe">{p.sqft} sf</span>
              </div>
              <p className="label mt-2 text-taupe/85">{p.frame}</p>
            </button>
          ))}
          <div className="w-2 shrink-0 lg:w-0" />
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    body: "We start with how you actually live — the land, the light, the way you gather. Site photos, a rough budget, and a conversation with our design team about what the house needs to do.",
    meta: "Weeks 1–3",
  },
  {
    n: "02",
    title: "Design Studio",
    body: "Our in-house designers translate that brief into elevations, floor plans and a three-dimensional timber model. You see every post and beam before a single board is cut.",
    meta: "Weeks 4–14",
  },
  {
    n: "03",
    title: "Timber Fabrication",
    body: "Kiln-dried Douglas fir is cut and test-fitted in our Grantham shop, while the True Wall and True Roof panels are assembled to your exact dimensions.",
    meta: "Weeks 15–22",
  },
  {
    n: "04",
    title: "Raising Day",
    body: "Your package arrives on site with engineering, connections and a crew that has done this hundreds of times. The frame typically stands within three to five days.",
    meta: "Days 1–5 on site",
  },
  {
    n: "05",
    title: "Finish & Handover",
    body: "Your builder closes in the envelope, finishes the interior, and we stay involved through the final walkthrough — because a Yankee Barn home is a long relationship, not a transaction.",
    meta: "Ongoing",
  },
];

export function Process() {
  return (
    <section id="process" className="relative bg-paper py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="03" title="The Process" />

        <div className="mt-14 grid grid-cols-12 gap-y-10 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-display text-[clamp(2.5rem,5.6vw,5.25rem)] font-light leading-[0.98] tracking-[-0.028em] text-ink">
                <MaskLine>From first sketch</MaskLine>
                <MaskLine delay={0.1}>to the day the</MaskLine>
                <MaskLine delay={0.2} className="italic text-oxide">
                  frame goes up.
                </MaskLine>
              </h2>
              <Reveal delay={0.24}>
                <p className="mt-8 max-w-md text-[1.02rem] leading-[1.85] text-ink/70">
                  Building a custom home is a big undertaking. Our process is designed to
                  make the decisions clear, the timeline visible, and the craftsmanship
                  consistent from the first meeting to the final peg.
                </p>
              </Reveal>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="label group inline-flex items-center gap-4 bg-ink px-8 py-4 text-paper transition-colors duration-300 hover:bg-oxide"
                >
                  Book a design consultation
                  <svg width="22" height="9" viewBox="0 0 22 9" fill="none" aria-hidden="true">
                    <path
                      d="M0 4.5h20M16 1l4 3.5-4 3.5"
                      stroke="currentColor"
                      strokeWidth="1.1"
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <div className="relative">
              <motion.div
                className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-ink/15"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              />
              {STEPS.map((step, i) => (
                <div key={step.n} className="relative pb-12 pl-10 last:pb-0">
                  <motion.span
                    className="absolute left-0 top-[9px] h-[15px] w-[15px] rounded-full border border-oxide bg-paper"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-12% 0px" }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <Reveal delay={0.06 * i}>
                    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                      <span className="label tnum text-oxide">{step.n}</span>
                      <h3 className="font-display text-[clamp(1.55rem,2.9vw,2.35rem)] font-medium leading-tight tracking-[-0.02em] text-ink">
                        {step.title}
                      </h3>
                      <span className="label ml-auto text-taupe">{step.meta}</span>
                    </div>
                    <p className="mt-4 max-w-xl text-[1.02rem] leading-[1.85] text-ink/72">
                      {step.body}
                    </p>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Performance() {
  return (
    <section id="timber" className="grain relative overflow-hidden bg-char py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="04" title="Timber & Performance" tone="cream" />

        <div className="mt-16 grid grid-cols-12 gap-y-14 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-display text-[clamp(2.5rem,5.4vw,5rem)] font-light leading-[1.0] tracking-[-0.028em] text-cream">
              <MaskLine>Built to stand</MaskLine>
              <MaskLine delay={0.1}>
                for <span className="italic text-oxide-light">generations.</span>
              </MaskLine>
            </h2>

            <Reveal delay={0.18}>
              <p className="mt-9 max-w-xl text-[1.05rem] leading-[1.9] text-cream/72">
                A timber frame is only half the story. Around it we wrap our precision-cut
                True Wall and True Roof panels — a continuous, high-performance insulation
                layer that eliminates thermal bridging, seals out draughts, and keeps the
                mechanical systems working far less than they otherwise would.
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-2">
              {[
                { value: 55, suffix: "+", label: "Years designing & raising frames", decimals: 0 },
                { value: 2400, suffix: "+", label: "Homes delivered across the country", decimals: 0 },
                { value: 40, prefix: "R-", suffix: "", label: "Wall & roof insulation target", decimals: 0 },
                { value: 4.5, suffix: " days", label: "Typical timber frame raising", decimals: 1 },
              ].map((stat, i) => (
                <div key={stat.label}>
                  <RuleDraw className="mb-6 bg-cream/25" delay={0.1 * i} />
                  <p className="font-display text-[clamp(2.6rem,5vw,4.25rem)] font-light leading-[0.92] tracking-[-0.035em] text-cream">
                    <Counter
                      to={stat.value}
                      prefix={stat.prefix ?? ""}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </p>
                  <p className="mt-4 max-w-[15rem] text-[0.92rem] leading-relaxed text-cream/58">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.12}>
              <figure className="relative">
                <div className="grain overflow-hidden">
                  <img
                    src="images/timber-joint.jpg"
                    alt="Mortise and tenon oak timber joint with wooden peg"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 mix-blend-multiply" style={{ background: "linear-gradient(180deg, rgba(36,29,25,0) 55%, rgba(36,29,25,0.55) 100%)" }} />
                <figcaption className="hairline-cream mt-5 flex items-baseline justify-between gap-6 border-t pt-4">
                  <span className="label text-cream/70">
                    Fig. 03 — Mortise &amp; tenon, pegged
                  </span>
                  <span className="label text-cream/45">White Oak</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
