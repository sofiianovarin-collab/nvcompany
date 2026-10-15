import { useEffect, useRef } from "react";

const steps = ["assess", "agree", "validate", "review"];

export function ProcessTrail() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg || document.documentElement.dataset.reduced === "true") return;
    svg.classList.add("trail-live");
    const segments = [...svg.querySelectorAll<SVGPathElement>(".seg")];
    const mark = (activeIndex: number) => {
      segments.forEach((segment, index) => {
        segment.classList.toggle("is-lit", index <= activeIndex);
      });
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          mark(steps.indexOf(entry.target.id));
        });
      },
      { threshold: 0.45 },
    );
    const nodes = steps.map((id) => document.getElementById(id)).filter((node): node is HTMLElement => node !== null);
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="process-trail">
      <svg ref={ref} viewBox="0 0 960 88" role="img" aria-labelledby="trail-title">
        <title id="trail-title">Four proposed phases: assess, agree, validate, and review.</title>
        <path className="seg" d="M48 44h200" />
        <path className="seg" d="M248 44h200" />
        <path className="seg" d="M448 44h200" />
        <path className="seg" d="M648 44h264" />
        <g fill="#F7F5F0" stroke="#1C6259" strokeWidth="2">
          <circle cx="48" cy="44" r="8" />
          <circle cx="248" cy="44" r="8" />
          <circle cx="448" cy="44" r="8" />
          <circle cx="712" cy="44" r="8" />
          <circle cx="912" cy="44" r="8" />
        </g>
      </svg>
    </div>
  );
}
