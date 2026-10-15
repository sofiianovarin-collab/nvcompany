import { Link } from "react-router-dom";
import { FirmPlanes } from "../../graphics/Artwork";
import { useInquiry } from "../../inquiry/InquiryContext";
import "./Firm.css";

export function FirmPage() {
  const { openInquiry } = useInquiry();
  return (
    <main id="main">
        <section className="fm-hero" aria-labelledby="fm-title">
          <div className="wrap fm-hero-grid">
            <div>
              <nav className="crumb" aria-label="Breadcrumb">
                <ol>
                  <li><Link to="/" >Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page">The Firm</li>
                </ol>
              </nav>
              <p className="eyebrow">The firm</p>
              <h1 id="fm-title">A clear identity.<br />A focused mandate.</h1>
              <div className="hero-actions">
                <Link to="/approach/" className="pill" >Explore our approach <span aria-hidden="true">↗</span></Link>
                <button className="text-link inquiry-open" type="button" onClick={(event) => openInquiry(event.currentTarget)}>Talk to our team <span aria-hidden="true">↗</span></button>
              </div>
            </div>
            <div className="fm-hero-copy">
              <p>A proposed digital asset market-making practice centered on defined scope, risk discipline and transparent reporting.</p>
              <figure className="fm-marks">
                <ol>
                  <li>Liquidity</li>
                  <li>Limits</li>
                  <li>Reporting</li>
                </ol>
                <figcaption>A concept for the practice. No operating claim.</figcaption>
              </figure>
            </div>
          </div>
        </section>
    
        <section className="fm-focus" aria-labelledby="focus-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">01 / Proposed firm focus</p>
                <h2 id="focus-title">Built around market quality.</h2>
              </div>
              <p>The proposed practice would focus on centralized-exchange spot-market liquidity for exchanges and token issuers, with objectives, responsibilities and reporting agreed for each mandate.</p>
            </div>
            <div className="fm-focus-grid">
              <figure className="fm-art" data-ambient="on">
                <FirmPlanes />
                <figcaption className="art-caption">Abstract structure. No company premises are shown.</figcaption>
              </figure>
              <div className="fm-points">
                <article>
                  <h3>Two-sided liquidity</h3>
                  <p>A proposed approach to quoting within defined market and order parameters.</p>
                </article>
                <article>
                  <h3>Defined operating limits</h3>
                  <p>Inventory, venue exposure, access and escalation boundaries agreed before operation.</p>
                </article>
                <article>
                  <h3>Clear reporting</h3>
                  <p>Agreed market-quality definitions, observation periods, exceptions and commentary.</p>
                </article>
              </div>
            </div>
            <div className="fm-links">
              <Link to="/services/market-making/" className="text-link" >Explore Market Making <span aria-hidden="true">↗</span></Link>
              <Link to="/who-we-serve/" className="text-link" >Who We Serve <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
    
        <section className="fm-principles" aria-labelledby="principles-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">02 / Proposed principles</p>
                <h2 id="principles-title">Discipline in the details.</h2>
              </div>
              <p>These are principles of the proposed operating model. They are not evidence of deployed controls or completed work.</p>
            </div>
            <div className="fm-principle-grid">
              <article>
                <h3>Scope before activity</h3>
                <p>Understand the market and document the intended mandate before a pilot.</p>
              </article>
              <article>
                <h3>Responsibilities before access</h3>
                <p>Agree ownership, funding, permissions and escalation responsibilities.</p>
              </article>
              <article>
                <h3>Evidence before claims</h3>
                <p>Define measurements and use verifiable information when explaining capabilities or results.</p>
              </article>
              <article>
                <h3>Review before expansion</h3>
                <p>Assess whether controls, resources and mandate terms support a proposed change.</p>
              </article>
            </div>
          </div>
        </section>
    
        <section className="fm-people" aria-labelledby="people-title">
          <div className="wrap fm-people-grid">
            <div>
              <p className="eyebrow">03 / Proposed responsibility framework</p>
              <h2 id="people-title">People and responsibilities.</h2>
              <p>These functions would be assigned in the operating model. They do not describe an existing team, a named leader, or a particular staffing structure.</p>
            </div>
            <div className="fm-roles">
              <article>
                <h3>Trading</h3>
                <p>Quoting parameters, inventory decisions and decisions within the agreed mandate.</p>
              </article>
              <article>
                <h3>Engineering &amp; operations</h3>
                <p>Technical connections, order-state handling, reconciliation and operational review.</p>
              </article>
              <article>
                <h3>Risk &amp; client coverage</h3>
                <p>Limits, escalation, mandate requirements and reporting discussions.</p>
              </article>
            </div>
          </div>
        </section>
    
        <section className="fm-explore" aria-labelledby="explore-title">
          <div className="wrap">
            <p className="eyebrow">04 / Explore the practice</p>
            <h2 id="explore-title">Continue the conversation.</h2>
            <div className="fm-explore-grid">
              <Link to="/services/market-making/" >
                <span>Market Making <span aria-hidden="true">↗</span></span>
                <em>Explore the proposed service and reporting framework.</em>
              </Link>
              <Link to="/approach/" >
                <span>Our Approach <span aria-hidden="true">↗</span></span>
                <em>Explore scope, responsibilities, validation and review.</em>
              </Link>
            </div>
          </div>
        </section>
    
        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <div className="contact-grid">
              <div>
                <p className="eyebrow">Start with the right questions</p>
                <h2 id="contact-title">Start a professional conversation.</h2>
                <p>Discuss your organization, intended markets and liquidity requirements.</p>
              </div>
              <button className="pill inquiry-open" type="button" onClick={(event) => openInquiry(event.currentTarget)}>Talk to our team <span aria-hidden="true">↗</span></button>
            </div>
          </div>
        </section>
      </main>
    
  );
}
