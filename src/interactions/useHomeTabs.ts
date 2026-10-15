import { useEffect } from "react";

export function useHomeTabs() {
  useEffect(() => {
    const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    if (!tabs.length) return;

    function selectTab(selected: HTMLButtonElement) {
      tabs.forEach((tab) => {
        const active = tab === selected;
        tab.setAttribute("aria-selected", active ? "true" : "false");
        tab.tabIndex = active ? 0 : -1;
        const panel = document.getElementById(tab.getAttribute("aria-controls") || "");
        if (panel) panel.hidden = !active;
      });
    }

    const cleanups = tabs.map((tab, index) => {
      const onClick = () => selectTab(tab);
      const onKey = (event: KeyboardEvent) => {
        let next: number | null = null;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = tabs.length - 1;
        else return;
        event.preventDefault();
        selectTab(tabs[next]);
        tabs[next].focus();
      };
      tab.addEventListener("click", onClick);
      tab.addEventListener("keydown", onKey);
      return () => {
        tab.removeEventListener("click", onClick);
        tab.removeEventListener("keydown", onKey);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);
}
