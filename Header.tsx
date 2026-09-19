import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLink, MaskLine, Reveal, RuleDraw, SectionLabel } from "../components/ui";

const NAV = [
  {
    label: "HOME STYLES",
    items: ["View All Home Styles","In Development","Architect-Designed Homes","Barn Homes","Carriage Houses","Coastal Homes","Contemporary Homes","Cottages","Farmhouses","Mountain Homes","Specialty Builds"],
  },
  {
    label: "HOMESTEAD COTTAGES",
    items: ["The Cove","The Croft","The Haven","The Nook","The Retreat","The Ridge"],
  },
  {
    label: "BUILD WITH US",
    items: ["Design Process","Construction Process","Panelized Building","Timber Frame Construction","Frequently Asked Questions"],
  },
  {
    label: "WHERE WE BUILD",
    items: ["Hamptons Collection","Massachusetts Collection","New England Collection","New Hampshire Collection","New York Collection","Vermont Collection","National Collection"],
  },
  {
    label: "RESOURCES",
    items: ["TrueBuild Companion","Timeline Calculator","Budget Calculator","Blog","Articles"],
  },
  {
    label: "ABOUT US",
    items: ["About Yankee Barn Homes","Our History","News and Publications","Client Testimonials","Careers"],
  },
];

export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 46 46" className={className} fill="none" aria-hidden="true">
      <path d="M3 21.5 23 4l20 17.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7.5 21.5V42h31V21.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.2 21.5h41.6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M15 21.5V42M31 21.5V42" stroke="currentColor" strokeWidth="1.4" />
      <path d="M15 31h16" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          open
            ? "bg-paper"
            : scrolled
              ? "bg-paper/95 backdrop-blur-md shadow-[0_1px_0_rgba(28,23,20,0.12)]"
              : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1560px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#top"
            className={`flex items-center gap-3 transition-colors ${
              scrolled || open ? "text-ink" : "text-cream"
            }`}
          >
            <Mark className="h-9 w-9 shrink-0" />
            <span className="leading-none">
              <span className="label block text-[0.72rem] tracking-[0.26em]">
                Yankee Barn
              </span>
              <span className="label mt-1 block text-[0.58rem] opacity-60">
                Custom Post & Beam Homes · Since 1969
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <div key={item.label} className="group relative py-2">
                <button className={`label relative transition-colors ${scrolled ? "text-ink/75 hover:text-ink" : "text-cream/80 hover:text-cream"}`}>
                  {item.label}
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 bg-paper p-4 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  {item.items.map((sub) => (
                    <a key={sub} href={"/" + sub.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")} className="block px-3 py-2 text-sm text-ink/80 hover:bg-ink/5 hover:text-ink">
                      {sub}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:8002589786"
              className={`label tnum hidden transition-colors sm:block ${
                scrolled ? "text-ink/70 hover:text-oxide" : "text-cream/75 hover:text-cream"
              }`}
            >
              800 · 258 · 9786
            </a>
            <a
              href="#contact"
              className={`label hidden px-6 py-3.5 transition-all duration-300 sm:block ${
                scrolled
                  ? "bg-ink text-paper hover:bg-oxide"
                  : "bg-cream text-ink hover:bg-oxide hover:text-cream"
              }`}
            >
              Request Information
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className={`flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden ${
                scrolled || open ? "text-ink" : "text-cream"
              }`}
            >
              <span
                className={`h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span className={`h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-paper px-8 lg:hidden"
          >
            <nav className="flex flex-col">
              {NAV.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hairline flex items-baseline gap-5 border-b py-5"
                >
                  <span className="label tnum text-oxide">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-4xl font-light text-ink">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>
            <a href="tel:8002589786" className="label tnum mt-10 text-oxide">
              800 · 258 · 9786
            </a>
            <p className="label mt-3 text-taupe">131 Yankee Barn Road · Grantham, NH</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const TICKER = [
  "Post & Beam",
  "Kiln-Dried Douglas Fir",
  "True Wall & True Roof Panels",
  "Cedar Clad",
  "Granite State Craft",
  "Grantham, New Hampshire",
  "Since 1969",
];

export function Hero() {
  return (
    <>
      <section
        id="top"
        className="grain relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <motion.img
            src="images/hero-interior.jpg"
            alt="Sunlit post and beam great room with exposed Douglas fir timbers"
            className="h-full w-full object-cover object-[58%_50%]"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1714]/88 via-[#1C1714]/55 to-[#1C1714]/15" />
          <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[#1C1714]/92 via-[#1C1714]/35 to-transparent" />
        </div>

        <div className="mx-auto w-full max-w-[1560px] px-5 pb-14 pt-36 sm:px-8 sm:pb-20 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-5"
          >
            <span className="h-px w-12 bg-oxide-light sm:w-20" />
            <span className="label text-cream/80">
              Custom Timber Frame Homes · New England
            </span>
          </motion.div>

          <h1 className="mt-8 max-w-[16ch] font-display text-[clamp(3.15rem,8.6vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.028em] text-cream">
            <MaskLine delay={0.15}>Post.</MaskLine>
            <MaskLine delay={0.27}>Beam.</MaskLine>
            <MaskLine delay={0.39} className="text-oxide-light italic">
              Dream.
            </MaskLine>
          </h1>

          <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal delay={0.55} className="lg:col-span-6 xl:col-span-5">
              <p className="max-w-xl text-[1.0625rem] leading-[1.75] text-cream/85 sm:text-lg">
                For over fifty-five years we have designed, engineered and raised custom
                post &amp; beam homes from our shop in Grantham, New Hampshire — kiln-dried
                Douglas fir, hand-cut joinery, and an insulated envelope built to outlast
                the weather.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-9 gap-y-5">
                <a
                  href="#contact"
                  className="label group inline-flex items-center gap-3 bg-cream px-8 py-4 text-ink transition-colors duration-300 hover:bg-oxide hover:text-cream"
                >
                  Request Information
                  <svg width="22" height="9" viewBox="0 0 22 9" fill="none" aria-hidden="true">
                    <path
                      d="M0 4.5h20M16 1l4 3.5-4 3.5"
                      stroke="currentColor"
                      strokeWidth="1.1"
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </svg>
                </a>
                <a href="#homes" className="label border-b border-cream/50 pb-1 text-cream/90 transition-colors hover:border-oxide-light hover:text-oxide-light">
                  Explore the Collection
                </a>
              </div>
            </Reveal>

            {/* photo-credit slab, overlapping the image edge */}
            <Reveal delay={0.7} className="lg:col-span-6 lg:col-start-7 xl:col-span-5 xl:col-start-8">
              <div className="hairline-cream border-t pt-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  {[
                    ["Above", "The Grantham Lakehouse"],
                    ["Footprint", "2,408 sq ft"],
                    ["Frame", "Post & Beam · Douglas Fir"],
                    ["Region", "Grantham, New Hampshire"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <p className="label text-cream/50">{k}</p>
                      <p className="mt-2 text-[0.9rem] leading-snug text-cream/90">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
          <span className="label text-cream/45">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-cream/50 to-transparent" />
        </div>
      </section>

      {/* oxide ticker strip */}
      <div className="relative overflow-hidden bg-oxide py-4">
        <div className="ticker-track flex w-max items-center">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center">
              {TICKER.map((item) => (
                <span key={`${dup}-${item}`} className="flex items-center">
                  <span className="label px-8 text-cream/90">{item}</span>
                  <span className="h-[5px] w-[5px] rotate-45 bg-cream/55" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function Manifesto() {
  return (
    <section className="relative bg-paper py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="01" title="The Yankee Barn Way" />

        <div className="mt-16 grid grid-cols-12 gap-y-12 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-3">
            <Reveal>
              <p className="font-display text-[5.5rem] font-light leading-[0.8] tracking-[-0.04em] text-oxide tnum">
                1969
              </p>
              <p className="label mt-4 text-taupe">The year our first frame went up</p>
              <div className="hairline mt-8 border-t pt-6">
                <p className="max-w-xs text-[0.95rem] leading-[1.8] text-ink/70">
                  We craft our custom timber frames and assemble our True Wall and True
                  Roof panels in our Grantham facility — then ship them, ready to raise,
                  anywhere in the country.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <Reveal delay={0.1}>
              <p className="font-display text-[clamp(1.75rem,3.6vw,3.15rem)] font-light leading-[1.22] tracking-[-0.018em] text-ink">
                <span className="float-left mr-4 font-display text-[4.6rem] font-semibold leading-[0.76] text-oxide sm:text-[5.6rem]">
                  A
                </span>
                home should feel as though it was always meant to stand there — settled
                into its land, honest about how it was made, and warm in every season.
              </p>
            </Reveal>

            <RuleDraw className="my-12 bg-ink/15" delay={0.15} />

            <div className="grid gap-10 sm:grid-cols-2">
              <Reveal delay={0.12}>
                <p className="text-[1.02rem] leading-[1.85] text-ink/75">
                  That is the whole idea behind a Yankee Barn home. Our designers work
                  with the grain of the timber rather than against it, so the structure
                  is never hidden behind drywall and trim — it <em className="italic">is</em>{" "}
                  the architecture. Posts, beams and braces become the rhythm of the rooms.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="text-[1.02rem] leading-[1.85] text-ink/75">
                  Around that frame we wrap a precision-cut insulated envelope: pre-fit
                  panels that arrive flat, go up quickly, and hold the heat where it
                  belongs. The result is a house that looks hand-built and performs like
                  a modern one.
                </p>
              </Reveal>
            </div>

            <div className="mt-12">
              <ArrowLink href="#process">See how a frame becomes a home</ArrowLink>
            </div>
          </div>
        </div>

        {/* image band */}
        <div className="mt-20 grid gap-6 sm:mt-24 sm:grid-cols-12">
          <Reveal className="sm:col-span-7">
            <figure>
              <div className="grain overflow-hidden">
                <img
                  src="images/kitchen.jpg"
                  alt="Timber frame kitchen with exposed beams and pendant lighting"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                />
              </div>
              <figcaption className="hairline mt-4 flex items-baseline justify-between gap-6 border-t pt-3">
                <span className="label text-taupe">
                  Fig. 01 — Kitchen &amp; dining, exposed frame
                </span>
                <span className="label tnum text-taupe/80">Photo · YBH Studio</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.12} className="sm:col-span-5">
            <figure>
              <div className="grain overflow-hidden">
                <img
                  src="images/raising.jpg"
                  alt="Timber frame bay lifted by crane during raising day"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                />
              </div>
              <figcaption className="hairline mt-4 flex items-baseline justify-between gap-6 border-t pt-3">
                <span className="label text-taupe">Fig. 02 — Raising day</span>
                <span className="label tnum text-taupe/80">Grantham, NH</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
