import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 30,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.95, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Text that rises out of a clipped mask — the page's signature entrance. */
export function MaskLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className={`block ${className}`}
        initial={reduce ? { opacity: 0 } : { y: "108%" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
        transition={{ duration: 1.05, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function RuleDraw({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`h-px w-full origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    />
  );
}

export function SectionLabel({
  index,
  title,
  tone = "ink",
}: {
  index: string;
  title: string;
  tone?: "ink" | "cream";
}) {
  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <span
        className={`label tnum shrink-0 ${
          tone === "cream" ? "text-oxide-light" : "text-oxide"
        }`}
      >
        {index}
      </span>
      <span className={`label shrink-0 ${tone === "cream" ? "text-cream/80" : "text-ink/70"}`}>
        {title}
      </span>
      <div
        className={`h-px flex-1 ${
          tone === "cream" ? "bg-cream/25" : "bg-ink/15"
        }`}
      />
    </div>
  );
}

export function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.7,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(to * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref} className="tnum">
      {prefix}
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export function ArrowLink({
  href,
  children,
  tone = "ink",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "ink" | "cream";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 ${
        tone === "cream" ? "text-cream" : "text-ink"
      } ${className}`}
    >
      <span className="label border-b border-current pb-1 transition-colors group-hover:text-oxide">
        {children}
      </span>
      <svg
        width="30"
        height="10"
        viewBox="0 0 30 10"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-500 ease-out group-hover:translate-x-1.5"
      >
        <path
          d="M0 5h28M24 1l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </a>
  );
}
