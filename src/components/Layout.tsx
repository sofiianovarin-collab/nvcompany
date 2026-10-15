import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { brand, footer, pages } from "../content/site";
import { useMotion } from "../motion/MotionContext";
import { usePageMotion } from "../motion/usePageMotion";
import { useScrollReset } from "../motion/useScrollReset";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  const { pathname } = useLocation();
  const { paused, reduced, togglePaused } = useMotion();
  useScrollReset();
  usePageMotion(pathname);
  const normalized = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const page = pages.find((item) => item.path === normalized);

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]');
    if (!page) {
      document.body.className = "";
      delete document.body.dataset.pageTitle;
      document.title = `${brand.displayName} — Page not found`;
      description?.setAttribute("content", "That address is not part of this design concept.");
      return;
    }
    document.body.className = page.bodyClass;
    if (page.pageTitle) document.body.dataset.pageTitle = page.pageTitle;
    else delete document.body.dataset.pageTitle;
    document.title = page.pageTitle ? `${brand.displayName} — ${page.pageTitle}` : `${brand.displayName} — ${brand.homeTitle}`;
    description?.setAttribute("content", page.description);
  }, [page]);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="concept">
        <span>{brand.conceptBanner}</span>
        <span>{footer.brandNote}</span>
        <button
          className="motion-toggle"
          type="button"
          aria-pressed={paused || reduced}
          onClick={() => {
            if (!reduced) togglePaused();
          }}
        >
          {reduced || !paused ? "Pause animation" : "Play animation"}
        </button>
      </div>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
