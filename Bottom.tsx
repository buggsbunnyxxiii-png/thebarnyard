import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLink, Counter, MaskLine, Reveal, RuleDraw, SectionLabel } from "../components/ui";
import { Mark } from "./Header";

export function Studio() {
  return (
    <section id="studio" className="relative bg-paper-2 py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="05" title="Design Studio & Timber Shop" />

        <div className="mt-16 grid grid-cols-12 gap-y-12 lg:gap-x-14">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-display text-[clamp(2.5rem,5.2vw,4.75rem)] font-light leading-[1.0] tracking-[-0.028em] text-ink">
              <MaskLine>Discover how</MaskLine>
              <MaskLine delay={0.1} className="italic text-oxide">
                your home is crafted.
              </MaskLine>
            </h2>

            <Reveal delay={0.18}>
              <p className="mt-8 max-w-lg text-[1.02rem] leading-[1.85] text-ink/72">
                Visit the Yankee Barn Homes design studio and experience the craftsmanship behind custom post and beam homes. Their process combines design expertise, precision panel construction, and quality timber materials.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {[
                {
                  k: "Visit",
                  lines: ["131 Yankee Barn Road", "Grantham, NH 03753"],
                },
                {
                  k: "Call",
                  lines: ["800 · 258 · 9786", "info@yankeebarnhomes.com"],
                },
                {
                  k: "Studio Hours",
                  lines: ["Monday – Friday · 8:00 – 5:00", "Saturday · By appointment"],
                },
                {
                  k: "Tours",
                  lines: ["Timber shop & panel facility", "tours available by appointment"],
                },
              ].map((block, i) => (
                <div key={block.k}>
                  <RuleDraw className="mb-5 bg-ink/18" delay={0.08 * i} />
                  <p className="label text-oxide">{block.k}</p>
                  <div className="mt-3 space-y-1.5">
                    {block.lines.map((line) => (
                      <p key={line} className="text-[0.98rem] leading-relaxed text-ink/78">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <ArrowLink href="#contact">Book a studio visit</ArrowLink>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.12}>
              <figure>
                <div className="grain overflow-hidden">
                  <img
                    src="images/studio.jpg"
                    alt="Design studio interior with drawings and timber samples"
                    className="aspect-[4/3] w-full object-cover lg:aspect-[4/4.4]"
                  />
                </div>
                <figcaption className="hairline mt-4 flex items-baseline justify-between gap-6 border-t pt-3">
                  <span className="label text-taupe">
                    Fig. 04 — The design studio, Grantham
                  </span>
                  <span className="label tnum text-taupe/80">43.7726° N</span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10 grid grid-cols-3 gap-8">
                {[
                  { v: 20, s: " acres", l: "Studio and timber shop" },
                  { v: 1969, s: "", l: "Building since 1969", decimals: 0 },
                  { v: 100, s: "%", l: "Quality timber craftsmanship" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-light leading-none tracking-[-0.03em] text-oxide">
                      <Counter to={s.v} suffix={s.s} decimals={s.decimals ?? 0} />
                    </p>
                    <p className="mt-3 text-[0.85rem] leading-snug text-ink/62">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Quote() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1180px] px-5 text-center sm:px-8">
        <Reveal>
          <svg
            width="52"
            height="42"
            viewBox="0 0 52 42"
            fill="none"
            aria-hidden="true"
            className="mx-auto text-oxide/45"
          >
            <path
              d="M21.6 0C11.2 4.6 4 15.2 4 26.4 4 35.2 9.6 42 17.6 42c6.2 0 11-4.6 11-10.8 0-6-4.2-10.4-10-10.4-1.4 0-2.8.2-3.8.8 1.8-8 8-14.6 15.6-18.2L21.6 0Zm27 0c-10.4 4.6-17.6 15.2-17.6 26.4 0 8.8 5.6 15.6 13.6 15.6 6.2 0 11-4.6 11-10.8 0-6-4.2-10.4-10-10.4-1.4 0-2.8.2-3.8.8 1.8-8 8-14.6 15.6-18.2L48.6 0Z"
              fill="currentColor"
            />
          </svg>
        </Reveal>

        <Reveal delay={0.12}>
          <blockquote className="mt-10 font-display text-[clamp(1.75rem,4.2vw,3.55rem)] font-light leading-[1.22] tracking-[-0.022em] text-ink">
            “We toured a lot of builders. Yankee Barn was the only one where the structure
            <em className="italic text-oxide"> was</em> the architecture — and where the
            people drawing the house had actually stood inside the frame.”
          </blockquote>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mx-auto mt-12 flex w-fit items-center gap-5">
            <span className="h-px w-12 bg-oxide/50" />
            <p className="label text-taupe">
              Sarah &amp; Tom Whitfield · Washington, New Hampshire
            </p>
            <span className="h-px w-12 bg-oxide/50" />
          </div>
          <p className="label mt-4 text-taupe/70">
            Owners of a 2,408 sq ft Grantham Lakehouse · Raised 2023
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const FIELD =
  "w-full border-b border-ink/22 bg-transparent py-3.5 text-[1rem] text-ink placeholder:text-taupe/65 transition-colors duration-300 focus:border-oxide focus:outline-none";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Custom post & beam home",
    timeline: "Within the next year",
    message: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="relative bg-ink py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="label tnum text-oxide-light">06</span>
              <span className="label text-cream/70">Start Your Home</span>
            </div>

            <h2 className="mt-10 font-display text-[clamp(2.65rem,5.8vw,5.5rem)] font-light leading-[0.98] tracking-[-0.03em] text-cream">
              <MaskLine>Let's raise</MaskLine>
              <MaskLine delay={0.1} className="italic text-oxide-light">
                something lasting.
              </MaskLine>
            </h2>

            <Reveal delay={0.18}>
              <p className="mt-9 max-w-md text-[1.05rem] leading-[1.9] text-cream/72">
                Tell us a little about your land, your timeline and the way you want to
                live. A member of our design team will be in touch within two business
                days — no pressure, no obligation.
              </p>
            </Reveal>

            <div className="mt-12 space-y-8">
              <RuleDraw className="bg-cream/22" />
              <div>
                <p className="label text-cream/50">Call the studio</p>
                <a
                  href="tel:8002589786"
                  className="tnum mt-2 block font-display text-3xl font-light text-cream transition-colors hover:text-oxide-light"
                >
                  800 · 258 · 9786
                </a>
              </div>
              <div>
                <p className="label text-cream/50">Write to us</p>
                <a
                  href="mailto:info@yankeebarnhomes.com"
                  className="mt-2 block text-lg text-cream/90 transition-colors hover:text-oxide-light"
                >
                  info@yankeebarnhomes.com
                </a>
              </div>
              <div>
                <p className="label text-cream/50">The shop</p>
                <p className="mt-2 text-lg leading-relaxed text-cream/90">
                  131 Yankee Barn Road
                  <br />
                  Grantham, NH 03753
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <div className="bg-paper p-7 sm:p-11">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="py-10"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lichen/12">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                        <path
                          d="M4 13.5 10 19.5 22 7"
                          stroke="#5B6B4F"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-8 font-display text-[clamp(1.9rem,3.6vw,2.85rem)] font-light leading-tight tracking-[-0.02em] text-ink">
                      Thank you, {form.name.split(" ")[0] || "friend"}.
                    </h3>
                    <p className="mt-5 max-w-md text-[1.02rem] leading-[1.85] text-ink/72">
                      Your request is with our design team in Grantham. We'll reach out at{" "}
                      <span className="text-oxide">{form.email || "your email"}</span> within
                      two business days to schedule an introductory call.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="label mt-9 border-b border-ink/30 pb-1 text-ink transition-colors hover:border-oxide hover:text-oxide"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="label block text-taupe">
                          Full Name
                        </label>
                        <input
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Jane Emerson"
                          className={`${FIELD} mt-2`}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="label block text-taupe">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="jane@example.com"
                          className={`${FIELD} mt-2`}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="label block text-taupe">
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="(603) 555-0142"
                          className={`${FIELD} tnum mt-2`}
                        />
                      </div>
                      <div>
                        <label htmlFor="type" className="label block text-taupe">
                          Project Type
                        </label>
                        <div className="relative">
                          <select
                            id="type"
                            value={form.type}
                            onChange={(e) => setForm({ ...form, type: e.target.value })}
                            className={`${FIELD} mt-2 appearance-none pr-8`}
                          >
                            <option>Custom post &amp; beam home</option>
                            <option>Modify an existing plan</option>
                            <option>Barn conversion / addition</option>
                            <option>Timber frame package only</option>
                            <option>Just exploring</option>
                          </select>
                          <svg
                            width="11"
                            height="7"
                            viewBox="0 0 11 7"
                            fill="none"
                            aria-hidden="true"
                            className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-taupe"
                          >
                            <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="1.2" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="label block text-taupe">Timeline</p>
                      <div className="mt-3.5 flex flex-wrap gap-2.5">
                        {["Within the next year", "1 – 2 years", "2 + years", "Undecided"].map(
                          (option) => {
                            const active = form.timeline === option;
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => setForm({ ...form, timeline: option })}
                                className={`label border px-5 py-3 transition-all duration-300 ${
                                  active
                                    ? "border-oxide bg-oxide text-paper"
                                    : "border-ink/18 text-ink/70 hover:border-ink/45 hover:text-ink"
                                }`}
                              >
                                {option}
                              </button>
                            );
                          }
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="label block text-taupe">
                        About Your Project
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Where is the land, and what are you imagining?"
                        className={`${FIELD} mt-2 resize-none`}
                      />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-6 pt-2">
                      <p className="max-w-xs text-[0.78rem] leading-relaxed text-taupe">
                        We keep your details private and never share them.
                      </p>
                      <button
                        type="submit"
                        disabled={sending}
                        className="label group inline-flex items-center gap-4 bg-ink px-9 py-4.5 text-paper transition-colors duration-300 hover:bg-oxide disabled:opacity-60"
                        style={{ paddingTop: "1.15rem", paddingBottom: "1.15rem" }}
                      >
                        {sending ? "Sending…" : "Request Consultation"}
                        <svg width="22" height="9" viewBox="0 0 22 9" fill="none" aria-hidden="true">
                          <path
                            d="M0 4.5h20M16 1l4 3.5-4 3.5"
                            stroke="currentColor"
                            strokeWidth="1.1"
                            className="transition-transform duration-500 group-hover:translate-x-1"
                          />
                        </svg>
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FOOTER_COLS = [
  {
    title: "Homes",
    links: ["Signature Plans", "Custom Design", "Timber Frame Packages", "Barn Conversions", "Recently Raised"],
  },
  {
    title: "Company",
    links: ["Our Story", "The Design Studio", "Timber & Performance", "Client Stories", "Careers"],
  },
  {
    title: "Resources",
    links: ["Planning Guide", "Cost & Budgeting", "Land Assessment", "FAQ", "Client Login"],
  },
];

export function Footer() {
  return (
    <footer className="grain relative bg-char pt-20 sm:pt-24">
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-4 text-cream">
              <Mark className="h-12 w-12 text-oxide-light" />
              <div>
                <p className="label text-[0.82rem] tracking-[0.26em] text-cream">
                  Yankee Barn Homes
                </p>
                <p className="label mt-1.5 text-cream/50">Post. Beam. Dream.™</p>
              </div>
            </div>

            <p className="mt-9 max-w-sm text-[0.98rem] leading-[1.9] text-cream/62">
              Custom post &amp; beam and timber frame homes, designed, engineered and
              panelized in Grantham, New Hampshire since 1969.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {["Instagram", "Pinterest", "Houzz", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#top"
                  className="label border border-cream/22 px-5 py-2.5 text-cream/72 transition-colors duration-300 hover:border-oxide-light hover:bg-oxide-light hover:text-char"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className="hairline-cream border-t pt-5">
                <p className="label text-cream/50">{col.title}</p>
                <ul className="mt-6 space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="group inline-flex items-center gap-2 text-[0.95rem] text-cream/72 transition-colors duration-300 hover:text-oxide-light"
                      >
                        <span className="h-px w-0 bg-oxide-light transition-all duration-300 group-hover:w-4" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="col-span-12 lg:col-span-2">
            <div className="hairline-cream border-t pt-5">
              <p className="label text-cream/50">Visit</p>
              <p className="mt-6 text-[0.95rem] leading-[1.9] text-cream/72">
                131 Yankee Barn Road
                <br />
                Grantham, NH 03753
              </p>
              <a
                href="tel:8002589786"
                className="tnum mt-5 block text-[1.15rem] text-cream transition-colors hover:text-oxide-light"
              >
                800 · 258 · 9786
              </a>
            </div>
          </div>
        </div>

        {/* oversized wordmark */}
        <div className="mt-20 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="whitespace-nowrap font-display text-[clamp(2.15rem,7.9vw,8.25rem)] font-light leading-[1.05] tracking-[-0.045em] text-cream/12"
          >
            Raised in New Hampshire
          </motion.p>
        </div>

        <div className="hairline-cream mt-12 flex flex-wrap items-center justify-between gap-x-10 gap-y-4 border-t py-9">
          <p className="label text-cream/42">
            © {new Date().getFullYear()} Yankee Barn Homes · All rights reserved
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {["Privacy Policy", "Terms of Use", "Accessibility", "Licensing"].map((l) => (
              <a
                key={l}
                href="#top"
                className="label text-cream/42 transition-colors hover:text-cream/85"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
