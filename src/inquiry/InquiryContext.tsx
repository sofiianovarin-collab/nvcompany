import { createContext, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { inquiryCopy } from "../content/site";

type InquiryContextValue = {
  openInquiry: (trigger: HTMLElement) => void;
  closeMenu: () => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function useInquiry() {
  const value = useContext(InquiryContext);
  if (!value) throw new Error("useInquiry must be used inside InquiryProvider");
  return value;
}

export function InquiryProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const onContact = pathname === "/contact" || pathname === "/contact/";
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [service, setService] = useState("");
  const [clientLabel, setClientLabel] = useState("");
  const [clientValue, setClientValue] = useState("");
  const [message, setMessage] = useState("");

  function openInquiry(trigger: HTMLElement) {
    lastTrigger.current = trigger;
    setMenuOpen(false);
    setMessage("");
    const nextService = trigger.getAttribute("data-inquiry-service") || "";
    const nextClient = trigger.getAttribute("data-inquiry-client") || "";
    const nextLabel = trigger.getAttribute("data-inquiry-client-label") || nextClient;
    setService(nextService);
    setClientLabel(nextLabel);
    setClientValue(nextClient);
    dialogRef.current?.showModal();
    window.setTimeout(() => document.getElementById("inquiry-company")?.focus(), 0);
  }

  function closeInquiry() {
    dialogRef.current?.close();
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      formRef.current?.reset();
      setMessage("");
      setService("");
      setClientLabel("");
      setClientValue("");
      const opener = lastTrigger.current;
      const openerHidden = opener ? opener.offsetParent === null : false;
      const menuToggle = document.querySelector<HTMLElement>(".menu-toggle");
      const returnTarget = openerHidden ? menuToggle : opener;
      returnTarget?.focus();
    };
    const onClick = (event: MouseEvent) => {
      if (event.target === dialog) dialog.close();
    };
    dialog.addEventListener("close", onClose);
    dialog.addEventListener("click", onClick);
    return () => {
      dialog.removeEventListener("close", onClose);
      dialog.removeEventListener("click", onClick);
    };
  }, [onContact]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || document.querySelector("dialog[open]")) return;
      setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setMessage(inquiryCopy.success);
    document.getElementById("form-message")?.focus();
  }

  return (
    <InquiryContext.Provider value={{ openInquiry, closeMenu: () => setMenuOpen(false), menuOpen, setMenuOpen }}>
      {children}
      {onContact ? null : (
      <dialog id="inquiry" aria-labelledby="inquiry-title" ref={dialogRef}>
        <div className="dialog-head">
          <p className="eyebrow">{inquiryCopy.eyebrow}</p>
          <button className="close-dialog" type="button" aria-label={inquiryCopy.closeLabel} onClick={closeInquiry}>
            ×
          </button>
        </div>
        <h2 id="inquiry-title">{inquiryCopy.title}</h2>
        <p className="preview-note">{inquiryCopy.note}</p>
        <p id="inquiry-service" className="service-context" hidden={service === ""}>
          {service ? `Selected service: ${service}` : ""}
        </p>
        <p id="inquiry-client" className="service-context" hidden={clientLabel === ""}>
          {clientLabel ? `Selected client: ${clientLabel}` : ""}
        </p>
        <form id="inquiry-form" method="dialog" action="#" ref={formRef} onSubmit={onSubmit}>
          <input id="inquiry-service-field" name="service" type="hidden" value={service} readOnly />
          <div className="form-row">
            <div className="field">
              <label htmlFor="inquiry-company">{inquiryCopy.company}</label>
              <input id="inquiry-company" name="company" autoComplete="organization" required />
            </div>
            <div className="field">
              <label htmlFor="inquiry-email">{inquiryCopy.email}</label>
              <input id="inquiry-email" name="email" type="email" autoComplete="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="inquiry-type">{inquiryCopy.clientType}</label>
              <select id="inquiry-type" name="clientType" required defaultValue={clientValue} key={clientValue}>
                <option value="" disabled>
                  {inquiryCopy.clientPrompt}
                </option>
                {inquiryCopy.clients.map((client) => (
                  <option key={client}>{client}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="inquiry-targets">{inquiryCopy.targets}</label>
              <input id="inquiry-targets" name="targets" autoComplete="off" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="inquiry-objective">{inquiryCopy.objective}</label>
            <textarea id="inquiry-objective" name="objective" required />
          </div>
          <button className="pill" type="submit">
            {inquiryCopy.submit} <span aria-hidden="true">↗</span>
          </button>
          <p id="form-message" className="form-message" role="status" tabIndex={-1}>
            {message}
          </p>
        </form>
      </dialog>
      )}
    </InquiryContext.Provider>
  );
}
