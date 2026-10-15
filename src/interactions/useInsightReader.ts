import { useEffect } from "react";
import { useInquiry } from "../inquiry/InquiryContext";

export function useInsightReader() {
  const { setMenuOpen } = useInquiry();

  useEffect(() => {
    const filters = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-filter]"));
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".guide-card"));
    const count = document.getElementById("guide-count");
    const empty = document.getElementById("guide-empty");

    function applyFilter(category: string) {
      filters.forEach((button) => {
        button.setAttribute("aria-pressed", button.getAttribute("data-filter") === category ? "true" : "false");
      });
      let visible = 0;
      cards.forEach((card) => {
        const show = category === "all" || card.getAttribute("data-category") === category;
        card.hidden = !show;
        if (show) visible += 1;
      });
      if (empty) empty.hidden = visible !== 0;
      if (count) count.textContent = `Showing ${visible} ${visible === 1 ? "guide." : "guides."}`;
    }

    const filterCleanups = filters.map((button) => {
      const onClick = () => applyFilter(button.getAttribute("data-filter") || "all");
      button.addEventListener("click", onClick);
      return () => button.removeEventListener("click", onClick);
    });

    const reader = document.getElementById("reader") as HTMLDialogElement | null;
    const readerBody = document.getElementById("reader-body");
    let readerTrigger: HTMLElement | null = null;
    const openers = Array.from(document.querySelectorAll<HTMLButtonElement>(".guide-open"));

    const openerCleanups = openers.map((button) => {
      const onClick = () => {
        const card = button.closest(".guide-card");
        if (!card || !reader || !readerBody) return;
        readerTrigger = button;
        const category = document.getElementById("reader-category");
        const title = document.getElementById("reader-title");
        if (category) category.textContent = card.getAttribute("data-category") || "";
        if (title) title.textContent = card.querySelector("h3")?.textContent || "";
        readerBody.replaceChildren();
        card.querySelectorAll(".guide-body > *").forEach((node) => {
          readerBody.appendChild(node.cloneNode(true));
        });
        setMenuOpen(false);
        reader.showModal();
        title?.focus();
      };
      button.addEventListener("click", onClick);
      return () => button.removeEventListener("click", onClick);
    });

    const onReaderClick = (event: MouseEvent) => {
      if (event.target === reader) reader?.close();
    };
    const onReaderClose = () => {
      const openerHidden = readerTrigger ? readerTrigger.offsetParent === null : false;
      const menuToggle = document.querySelector<HTMLElement>(".menu-toggle");
      const returnTarget = openerHidden ? menuToggle : readerTrigger;
      returnTarget?.focus();
    };
    const closeButton = reader?.querySelector<HTMLButtonElement>(".close-dialog");
    const onCloseClick = () => reader?.close();
    reader?.addEventListener("click", onReaderClick);
    reader?.addEventListener("close", onReaderClose);
    closeButton?.addEventListener("click", onCloseClick);

    return () => {
      filterCleanups.forEach((cleanup) => cleanup());
      openerCleanups.forEach((cleanup) => cleanup());
      reader?.removeEventListener("click", onReaderClick);
      reader?.removeEventListener("close", onReaderClose);
      closeButton?.removeEventListener("click", onCloseClick);
    };
  }, [setMenuOpen]);
}
