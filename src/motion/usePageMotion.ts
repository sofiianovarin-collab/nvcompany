import { useLayoutEffect } from "react";

const revealSelector = [
  ".section-intro",
  ".service-ribbon",
  ".service-card",
  ".quality-card",
  ".quality-note",
  ".report",
  ".audience-grid > *",
  ".steps > *",
  ".firm-grid > *",
  ".insight-card",
  ".contact-grid > *",
  ".phase-row",
  ".overview-grid a",
  ".bound-grid article",
  ".ap-lead",
  ".process-trail",
  ".fm-art",
  ".fm-points article",
  ".pair-col",
  ".guide-card",
  ".guide-toolbar",
  ".jump",
  ".ecosystem",
  ".dialogue-art",
  ".ct-topics article",
  ".ct-form-panel",
  ".mm-card",
  ".fm-explore .wrap > *",
].join(",");

export function usePageMotion(pathname: string) {
  useLayoutEffect(() => {
    const main = document.getElementById("main");
    if (!main) return;
    const reduced = document.documentElement.dataset.reduced === "true";
    const sections = [...main.querySelectorAll("section")];
    const hero = sections[0];
    const entered: HTMLElement[] = [];

    if (hero && !reduced) {
      const nodes = [...hero.querySelectorAll<HTMLElement>(":scope > .wrap > *")];
      nodes.forEach((node, index) => {
        node.dataset.enter = String(index);
        node.style.setProperty("--enter", String(index));
        entered.push(node);
      });
    }

    const selected = [...main.querySelectorAll<HTMLElement>(revealSelector)].filter((node) => !hero?.contains(node));
    const unique = selected.filter((node, _, list) => !list.some((other) => other !== node && other.contains(node)));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-shown");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    unique.forEach((node, index) => {
      node.setAttribute("data-reveal", "");
      node.style.setProperty("--reveal", String(index % 6));
      if (reduced) node.classList.add("is-shown");
      else revealObserver.observe(node);
    });

    const fallback = window.setTimeout(() => {
      unique.forEach((node) => node.classList.add("is-shown"));
    }, 1600);

    const ambientNodes = [...main.querySelectorAll<HTMLElement>("[data-ambient]")];
    const ambientObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          (entry.target as HTMLElement).dataset.ambient = entry.isIntersecting ? "on" : "off";
        });
      },
      { threshold: 0.02 },
    );
    ambientNodes.forEach((node) => ambientObserver.observe(node));

    return () => {
      window.clearTimeout(fallback);
      revealObserver.disconnect();
      ambientObserver.disconnect();
      entered.forEach((node) => {
        delete node.dataset.enter;
        node.style.removeProperty("--enter");
      });
      unique.forEach((node) => {
        node.removeAttribute("data-reveal");
        node.classList.remove("is-shown");
        node.style.removeProperty("--reveal");
      });
    };
  }, [pathname]);
}
