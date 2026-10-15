import { useEffect } from "react";
import { contactFormCopy } from "../content/site";

export function useContactForm() {
  useEffect(() => {
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    if (!form) return;
    const status = document.getElementById("contact-status");
    const checks: { id: string; invalid: (el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => boolean; message: string }[] = [
      { id: "contact-company", invalid: (el) => el.value.trim() === "", message: contactFormCopy.errors.company },
      { id: "contact-email", invalid: (el) => el.value.trim() === "", message: contactFormCopy.errors.emailRequired },
      {
        id: "contact-email",
        invalid: (el) => el.value.trim() !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()),
        message: contactFormCopy.errors.emailInvalid,
      },
      { id: "contact-type", invalid: (el) => el.value === "", message: contactFormCopy.errors.type },
      { id: "contact-region", invalid: (el) => el.value.trim() === "", message: contactFormCopy.errors.region },
      {
        id: "contact-website",
        invalid: (el) => {
          const value = el.value.trim();
          if (value === "") return false;
          try {
            const url = new URL(value);
            return url.protocol !== "http:" && url.protocol !== "https:";
          } catch {
            return true;
          }
        },
        message: contactFormCopy.errors.website,
      },
      { id: "contact-message", invalid: (el) => el.value.trim() === "", message: contactFormCopy.errors.message },
    ];

    function clearField(el: HTMLElement) {
      el.removeAttribute("aria-invalid");
      const error = document.getElementById(el.getAttribute("data-error") || "");
      if (error) {
        error.hidden = true;
        error.textContent = "";
      }
      const described = el.getAttribute("data-described") || "";
      if (described) el.setAttribute("aria-describedby", described);
      else el.removeAttribute("aria-describedby");
    }

    const fields = Array.from(form.querySelectorAll<HTMLElement>("[data-error]"));
    const fieldCleanups = fields.map((el) => {
      const onInput = () => clearField(el);
      el.addEventListener("input", onInput);
      el.addEventListener("change", onInput);
      return () => {
        el.removeEventListener("input", onInput);
        el.removeEventListener("change", onInput);
      };
    });

    const params = new URLSearchParams(window.location.search);
    const clientPresets: Record<string, string> = { exchange: "Exchange", "token-issuer": "Token Issuer" };
    const presetClient = clientPresets[params.get("client") || ""];
    const typeField = document.getElementById("contact-type") as HTMLSelectElement | null;
    if (presetClient && typeField) typeField.value = presetClient;
    if (params.get("service") === "market-making") {
      const serviceNote = document.getElementById("contact-service");
      if (serviceNote) {
        serviceNote.hidden = false;
        serviceNote.textContent = contactFormCopy.serviceNote;
      }
    }

    const onSubmit = (event: Event) => {
      event.preventDefault();
      const seen = new Set<HTMLElement>();
      const firstInvalid: { current: HTMLElement | null } = { current: null };
      checks.forEach((check) => {
        const el = document.getElementById(check.id) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
        if (!el || seen.has(el)) return;
        clearField(el);
        const failed = checks.find((item) => item.id === check.id && item.invalid(el));
        seen.add(el);
        if (!failed) return;
        el.setAttribute("aria-invalid", "true");
        const error = document.getElementById(el.getAttribute("data-error") || "");
        if (error) {
          error.hidden = false;
          error.textContent = failed.message;
        }
        const described = [el.getAttribute("data-described"), error?.id].filter(Boolean).join(" ");
        if (described) el.setAttribute("aria-describedby", described);
        if (!firstInvalid.current) firstInvalid.current = el;
      });
      if (!status) return;
      if (firstInvalid.current) {
        status.textContent = contactFormCopy.invalid;
        firstInvalid.current.focus();
        return;
      }
      status.textContent = contactFormCopy.success;
      status.focus();
    };

    form.addEventListener("submit", onSubmit);
    return () => {
      form.removeEventListener("submit", onSubmit);
      fieldCleanups.forEach((cleanup) => cleanup());
    };
  }, []);
}
