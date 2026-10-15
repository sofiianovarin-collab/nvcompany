import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main id="main">
      <section className="ct-hero" aria-labelledby="missing-title">
        <div className="wrap">
          <p className="eyebrow">Missing page</p>
          <h1 id="missing-title">This page is not available.</h1>
          <div className="hero-actions">
            <Link className="pill" to="/">
              Back to the homepage <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
