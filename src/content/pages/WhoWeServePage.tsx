import { Link } from "react-router-dom";
import { Ecosystem, ExchangeMini, IssuerMini } from "../../graphics/Artwork";
import { useInquiry } from "../../inquiry/InquiryContext";
import "./WhoWeServe.css";

export function WhoWeServePage() {
  const { openInquiry } = useInquiry();
  return (
    <main id="main">
        <section className="wws-hero" aria-labelledby="wws-title">
          <div className="wrap">
            <div className="wws-hero-grid">
              <div>
                <nav className="crumb" aria-label="Breadcrumb">
                  <ol>
                    <li><Link to="/" >Home</Link></li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page">Who We Serve</li>
                  </ol>
                </nav>
                <p className="eyebrow">Who we serve</p>
                <h1 id="wws-title">Different markets.<br />Specific requirements.</h1>
                <p className="wws-kicker">One market-making discipline. Two distinct client briefs.</p>
              </div>
              <div className="wws-hero-copy">
                <p>For exchanges and token issuers evaluating a structured approach to liquidity, with scope, responsibilities and reporting defined around the market.</p>
                <div className="brief-pair" role="group" aria-label="Proposed client groups">
                  <div className="brief-card" tabIndex={0}>
                    <ExchangeMini />
                    <span>Market quality</span>
                    <strong>Exchanges</strong>
                  </div>
                  <span className="brief-join"></span>
                  <div className="brief-card" tabIndex={0}>
                    <IssuerMini />
                    <span>Venue context</span>
                    <strong>Token Issuers</strong>
                  </div>
                </div>
                <div className="hero-actions">
                  <button className="pill inquiry-open" type="button" onClick={(event) => openInquiry(event.currentTarget)}>Discuss your requirements <span aria-hidden="true">↗</span></button>
                </div>
              </div>
            </div>
            <figure className="ecosystem" data-ambient="on">
              <Ecosystem />
              <figcaption className="art-caption">Illustrative connection of the two briefs. No clients are named.</figcaption>
            </figure>
            <div className="jump">
              <div className="jump-links">
                <a href="#exchanges">For Exchanges <span aria-hidden="true">↓</span></a>
                <a href="#token-issuers">For Token Issuers <span aria-hidden="true">↓</span></a>
              </div>
              <p>Choose the brief that fits your organization. Both models share the same proposed service.</p>
            </div>
          </div>
        </section>
    
        <section className="wws-exchanges" id="exchanges" aria-labelledby="exchanges-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">01 / For exchanges · Proposed mandate</p>
                <h2 id="exchanges-title">Define market quality.<br />Make it reviewable.</h2>
              </div>
              <p>A proposed exchange mandate would align eligible pairs, quoting parameters and market-quality reporting with the venue's requirements.</p>
            </div>
            <div className="pair-grid">
              <div className="pair-col">
                <p className="pair-label">Possible needs</p>
                <article>
                  <h3>Fragmented liquidity</h3>
                  <p>Understand the eligible pairs and the venue-specific trading environment.</p>
                </article>
                <article>
                  <h3>Uneven depth</h3>
                  <p>Assess bid-side and ask-side liquidity within defined price bands.</p>
                </article>
                <article>
                  <h3>Limited visibility</h3>
                  <p>Agree how quoting activity, exceptions, and market quality will be reviewed.</p>
                </article>
              </div>
              <div className="pair-col">
                <p className="pair-label">Potential mandate outputs</p>
                <article>
                  <h3>Scoped two-sided quoting</h3>
                  <p>Agreed pairs, order parameters, schedule, and inventory limits.</p>
                </article>
                <article>
                  <h3>Defined market-quality measures</h3>
                  <p>Spread, bid and ask depth, and qualifying quote presence.</p>
                </article>
                <article>
                  <h3>Regular reporting</h3>
                  <p>Agreed observation periods, metric definitions, exceptions, and commentary.</p>
                </article>
              </div>
            </div>
            <div className="wws-actions">
              <button className="text-link inquiry-open" type="button" data-inquiry-client="Exchange" data-inquiry-client-label="Exchanges" onClick={(event) => openInquiry(event.currentTarget)}>Discuss exchange liquidity <span aria-hidden="true">↗</span></button>
              <Link to="/services/market-making/" className="text-link" >Explore Market Making <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
    
        <section className="wws-issuers" id="token-issuers" aria-labelledby="issuers-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">02 / For token issuers · Proposed mandate</p>
                <h2 id="issuers-title">Plan liquidity around<br />the trading environment.</h2>
              </div>
              <p>A proposed issuer mandate would assess the asset, intended venues, available inventory and responsibilities before a limited pilot.</p>
            </div>
            <div className="pair-grid">
              <div className="pair-col">
                <p className="pair-label">Possible needs</p>
                <article>
                  <h3>Venue selection</h3>
                  <p>Evaluate intended trading environments and their operational requirements.</p>
                </article>
                <article>
                  <h3>Available inventory</h3>
                  <p>Clarify funding, asset ownership, account permissions, and limits.</p>
                </article>
                <article>
                  <h3>Launch and ongoing review</h3>
                  <p>Define readiness, observation periods, and criteria for revisiting the mandate.</p>
                </article>
              </div>
              <div className="pair-col">
                <p className="pair-label">Potential deliverables</p>
                <article>
                  <h3>Venue assessment</h3>
                  <p>A brief covering market context, constraints, and proposed scope.</p>
                </article>
                <article>
                  <h3>Pilot liquidity plan</h3>
                  <p>Defined pairs, responsibilities, quoting parameters, and risk boundaries.</p>
                </article>
                <article>
                  <h3>Reporting framework</h3>
                  <p>Measures and commentary for reviewing the agreed objectives.</p>
                </article>
              </div>
            </div>
            <div className="wws-actions">
              <button className="text-link inquiry-open" type="button" data-inquiry-client="Token issuer" data-inquiry-client-label="Token Issuers" onClick={(event) => openInquiry(event.currentTarget)}>Discuss token liquidity <span aria-hidden="true">↗</span></button>
              <Link to="/services/market-making/" className="text-link" >Explore Market Making <span aria-hidden="true">↗</span></Link>
            </div>
            <p className="quality-note">Potential mandate outputs only. No listings, price support, fundraising, returns, or launch dates are promised.</p>
          </div>
        </section>
    
        <section className="wws-compare" id="compare" aria-labelledby="compare-title">
          <div className="wrap">
            <p className="eyebrow">03 / Compare the mandate focus</p>
            <h2 id="compare-title">One discipline.<br />Different briefs.</h2>
            <table className="compare-table">
              <caption className="visually-hidden">Exchange and token-issuer briefs for the same proposed market-making practice</caption>
              <thead>
                <tr>
                  <th scope="col">Focus</th>
                  <th scope="col">Exchanges</th>
                  <th scope="col">Token Issuers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Starting point</th>
                  <td data-label="Exchanges">Venue and trading-pair requirements</td>
                  <td data-label="Token Issuers">Asset and intended-venue assessment</td>
                </tr>
                <tr>
                  <th scope="row">Operational scope</th>
                  <td data-label="Exchanges">Pair-level quoting and venue constraints</td>
                  <td data-label="Token Issuers">Inventory, venue scope, and pilot readiness</td>
                </tr>
                <tr>
                  <th scope="row">Responsibilities</th>
                  <td data-label="Exchanges">Account access, funding, and escalation</td>
                  <td data-label="Token Issuers">Ownership, permissions, and agreed limits</td>
                </tr>
                <tr>
                  <th scope="row">Review</th>
                  <td data-label="Exchanges">Market-quality indicators and exceptions</td>
                  <td data-label="Token Issuers">The same indicators, read in the issuer's market context</td>
                </tr>
              </tbody>
            </table>
            <p className="wws-clarify">These are two client briefs for the same proposed market-making practice. They are not separate investment or custody businesses.</p>
          </div>
        </section>
    
        <section className="wws-process" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">04 / A shared engagement process</p>
                <h2 id="process-title">A clear starting point<br />for either mandate.</h2>
              </div>
              <p>A short summary of the proposed Market Making process. The detailed methodology stays on that page.</p>
            </div>
            <div className="steps">
              <article className="step">
                <span className="number">01 / Assess</span>
                <h3>Assess the market</h3>
                <p>Review objectives, market context, and counterparty requirements.</p>
              </article>
              <article className="step">
                <span className="number">02 / Agree</span>
                <h3>Agree the mandate</h3>
                <p>Agree scope, ownership, limits, and reporting definitions.</p>
              </article>
              <article className="step">
                <span className="number">03 / Validate</span>
                <h3>Validate the setup</h3>
                <p>Complete technical testing and a limited pilot.</p>
              </article>
              <article className="step">
                <span className="number">04 / Review</span>
                <h3>Review and refine</h3>
                <p>Review agreed measures before considering expansion.</p>
              </article>
            </div>
            <Link to="/services/market-making/" className="text-link" >Explore Market Making <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
    
        <section className="wws-prepare" id="prepare" aria-labelledby="prepare-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">05 / Prepare for the first conversation</p>
                <h2 id="prepare-title">Start with the right context.</h2>
              </div>
              <p>Identify your organization and service region, intended markets, objectives, and reporting needs.</p>
            </div>
            <div className="input-row">
              <p>Venue &amp; pairs</p>
              <p>Current objectives</p>
              <p>Inventory &amp; ownership</p>
              <p>Reporting needs</p>
            </div>
            <p className="mm-note">The first conversation should also cover the proposed account and funding structure. Do not send API keys, private keys, passwords, or funds.</p>
          </div>
        </section>
    
        <section className="mm-faq" id="faq" aria-labelledby="faq-title">
          <div className="wrap mm-faq-grid">
            <div>
              <p className="eyebrow">06 / Before the first discussion</p>
              <h2 id="faq-title">A few questions.</h2>
            </div>
            <div>
              <details>
                <summary>Which client types does this page cover?</summary>
                <p>Exchanges and token issuers considering the initial proposed centralized-exchange spot-market scope.</p>
              </details>
              <details>
                <summary>Are particular venues or assets already supported?</summary>
                <p>Venue and asset coverage would be confirmed during assessment before a mandate is agreed.</p>
              </details>
              <details>
                <summary>What would be agreed before operation?</summary>
                <p>Scope, ownership, funding, permissions, limits, responsibilities, measurements and reporting.</p>
              </details>
            </div>
          </div>
        </section>
    
        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="wrap contact-grid">
            <div>
              <p className="eyebrow">Start with the right questions</p>
              <h2 id="contact-title">Let’s discuss your requirements.</h2>
              <p>Start with your organization, intended markets and liquidity objectives.</p>
            </div>
            <button className="pill inquiry-open" type="button" onClick={(event) => openInquiry(event.currentTarget)}>Talk to our team <span aria-hidden="true">↗</span></button>
          </div>
        </section>
      </main>
    
  );
}
