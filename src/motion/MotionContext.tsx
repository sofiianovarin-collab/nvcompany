import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from "react";

type MotionContextValue = {
  paused: boolean;
  reduced: boolean;
  togglePaused: () => void;
};

const MotionContext = createContext<MotionContextValue | null>(null);

export function useMotion() {
  const value = useContext(MotionContext);
  if (!value) throw new Error("useMotion must be used inside MotionProvider");
  return value;
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useLayoutEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      const nextReduced = media.matches;
      setReduced(nextReduced);
      const root = document.documentElement;
      root.dataset.reduced = nextReduced ? "true" : "false";
      root.dataset.motion = nextReduced || paused ? "still" : "run";
      root.classList.toggle("motion-ready", !nextReduced);
    };
    apply();
    media.addEventListener("change", apply);
    const onVisibility = () => {
      document.documentElement.dataset.hidden = document.hidden ? "true" : "false";
    };
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      media.removeEventListener("change", apply);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [paused]);

  return (
    <MotionContext.Provider value={{ paused, reduced, togglePaused: () => setPaused((value) => !value) }}>
      {children}
    </MotionContext.Provider>
  );
}
