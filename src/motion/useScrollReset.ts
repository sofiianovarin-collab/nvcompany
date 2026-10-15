import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollReset() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ block: "start", behavior: "auto" });
        root.style.scrollBehavior = previous;
        return;
      }
    }

    window.scrollTo(0, 0);
    root.scrollTop = 0;
    document.body.scrollTop = 0;
    root.style.scrollBehavior = previous;
  }, [pathname, hash]);
}
