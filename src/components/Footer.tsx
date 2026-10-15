import { Link, useLocation } from "react-router-dom";
import { brand, footer } from "../content/site";
import { BrandMark } from "./BrandMark";

export function Footer() {
  const { pathname } = useLocation();
  const onContact = pathname === "/contact" || pathname === "/contact/";

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <a className="brand" href="#top" aria-label={`${brand.displayName}, Back to top`}>
          <BrandMark />
          <span className="brand-name">
            <span>{brand.displayName}</span>
            <small>{brand.nameStatus}</small>
          </span>
        </a>
        <div className="footer-copy">
          <p>
            <Link className="footer-contact" to={footer.contactTo} aria-current={onContact ? "page" : undefined}>
              {footer.contactLabel}
            </Link>
          </p>
          <p className="strong">{footer.summary}</p>
          <p>{footer.entity}</p>
          <p>{footer.claims}</p>
          <p>{footer.preview}</p>
        </div>
      </div>
    </footer>
  );
}
