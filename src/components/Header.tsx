import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { brand, inquiryCopy, navItems } from "../content/site";
import { useInquiry } from "../inquiry/InquiryContext";
import { BrandMark } from "./BrandMark";

export function Header() {
  const { pathname } = useLocation();
  const { menuOpen, setMenuOpen, openInquiry } = useInquiry();
  const [scrolled, setScrolled] = useState(false);
  const onContact = pathname === "/contact" || pathname === "/contact/";

  useEffect(() => {
    setMenuOpen(false);
    setScrolled(window.scrollY > 8);
  }, [pathname, setMenuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"} id="top">
      <div className="wrap header-inner">
        {pathname === "/" ? (
          <a className="brand" href="#top" aria-label={`${brand.displayName}, homepage`}>
            <BrandMark />
            <span className="brand-name">
              <span>{brand.displayName}</span>
              <small>{brand.nameStatus}</small>
            </span>
          </a>
        ) : (
          <Link className="brand" to="/" aria-label={`${brand.displayName}, homepage`}>
            <BrandMark />
            <span className="brand-name">
              <span>{brand.displayName}</span>
              <small>{brand.nameStatus}</small>
            </span>
          </Link>
        )}
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-label">{menuOpen ? "Close" : "Menu"}</span>
          <span aria-hidden="true">☰</span>
        </button>
        <nav id="site-nav" className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Main">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.activePrefix);
            const className = active ? "is-here" : undefined;
            if (item.id === "services" && pathname === "/") {
              return (
                <a key={item.id} href="#services" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              );
            }
            return (
              <Link key={item.id} to={item.to} className={className} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            );
          })}
          {onContact ? (
            <a className="pill" href="#inquiry" onClick={() => setMenuOpen(false)}>
              {inquiryCopy.headerCta} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <button
              className="pill inquiry-open"
              type="button"
              data-inquiry-service={pathname.startsWith("/services/") ? "Market Making" : undefined}
              onClick={(event) => openInquiry(event.currentTarget)}
            >
              {inquiryCopy.headerCta} <span aria-hidden="true">↗</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
