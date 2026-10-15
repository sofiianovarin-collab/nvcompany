import { Link } from "react-router-dom";
import { TwoSidedMarket } from "../../graphics/Artwork";
import { useInquiry } from "../../inquiry/InquiryContext";
import "./MarketMaking.css";

export function MarketMakingPage() {
  const { openInquiry } = useInquiry();
  return (
    <main id="main">
        <section className="mm-hero" aria-labelledby="mm-title">
          <div className="wrap mm-hero-grid">
            <div>
              <nav className="crumb" aria-label="Breadcrumb">
                <ol>
                  <li><Link to="/" >Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link to="/#services" >Services</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page">Market Making</li>
                </ol>
              </nav>
              <p className="eyebrow">Market making and liquidity</p>
              <h1 id="mm-title">Two-sided liquidity.<br />A measured approach.</h1>
              <p className="mm-scope">Initial proposed scope: centralized-exchange spot markets.</p>
              <div className="hero-actions">
                <button className="pill inquiry-open" type="button" data-inquiry-service="Market Making" onClick={(event) => openInquiry(event.currentTarget)}>Discuss your market <span aria-hidden="true">↗</span></button>
                <a className="text-link" href="#reporting">Explore the reporting framework <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="mm-hero-copy">
              <p>A proposed market-making service for exchanges and token issuers, with defined quoting parameters, inventory limits and clear liquidity reporting.</p>
              <figure className="book" data-ambient="on">
                <div className="book-sides" aria-hidden="true"><span>Bid side</span><span>Ask side</span></div>
                <TwoSidedMarket />
                <figcaption>Illustrative market structure. No market data.</figcaption>
              </figure>
            </div>
          </div>
        </section>
    
        <section className="mm-mandates" id="mandates" aria-labelledby="mandates-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">01 / Potential mandate areas</p>
                <h2 id="mandates-title">Defined around your market.</h2>
              </div>
              <p>Start with the objectives, eligible venues, and responsibilities of the engagement.</p>
            </div>
            <div className="service-grid">
              <article className="service-card mm-card">
                <div className="card-top">
                  <span className="number">01</span>
                  <span className="card-tag">For exchanges</span>
                </div>
                <h3>Exchange<br />Market Making</h3>
                <p>A potential exchange mandate would define the trading pairs, quoting schedule, order parameters and market-quality measures used to review liquidity.</p>
                <p className="mm-scope-line">Pair scope · Quoting rules · Reporting</p>
              </article>
              <article className="service-card mm-card">
                <div className="card-top">
                  <span className="number">02</span>
                  <span className="card-tag">For token issuers</span>
                </div>
                <h3>Token<br />Liquidity</h3>
                <p>A potential issuer mandate would assess the asset, intended venues, available inventory and reporting requirements before a limited pilot.</p>
                <p className="mm-scope-line">Venue scope · Inventory terms · Review process</p>
              </article>
            </div>
          </div>
        </section>
    
        <section className="mm-quote" id="quoting" aria-labelledby="quoting-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">02 / Proposed quoting approach</p>
                <h2 id="quoting-title">From market context<br />to quoting decisions.</h2>
              </div>
              <p>Objectives and thresholds would be agreed for each mandate before any quoting activity begins. A fixed price, volume, spread, or uptime is not promised.</p>
            </div>
            <div className="mm-steps">
              <article>
                <h3>Assess</h3>
                <p>Review venue rules, price references, volatility and current liquidity.</p>
              </article>
              <article>
                <h3>Quote</h3>
                <p>Define two-sided order parameters, price bands and order sizes within agreed limits.</p>
              </article>
              <article>
                <h3>Manage</h3>
                <p>Monitor inventory, outstanding orders and deviations. Adjust or pause within the approved mandate.</p>
              </article>
            </div>
          </div>
        </section>
    
        <section className="mm-risk" id="risk" aria-labelledby="risk-title">
          <div className="wrap mm-risk-grid">
            <div>
              <p className="eyebrow">03 / Risk and responsibilities</p>
              <h2 id="risk-title">Defined limits.<br />Clear responsibilities.</h2>
              <p className="mm-note">Asset ownership, account permissions, funding, and responsibility must be agreed before operation. Trading access and withdrawal approval stay separate. These controls are proposed. They are not described here as deployed or audited.</p>
            </div>
            <ul className="control-list">
              <li>
                <h3>Inventory limits</h3>
                <p>Agreed asset limits, funding, and escalation rules.</p>
              </li>
              <li>
                <h3>Venue exposure</h3>
                <p>Defined venues, pairs, and exposure boundaries.</p>
              </li>
              <li>
                <h3>Data and order checks</h3>
                <p>Stale-data handling and cancellation confirmation.</p>
              </li>
              <li>
                <h3>Access and reconciliation</h3>
                <p>Separate trading access from withdrawals, with balance and trade reconciliation.</p>
              </li>
            </ul>
          </div>
        </section>
    
        <section className="quality mm-report" id="reporting" aria-labelledby="reporting-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">04 / Proposed reporting framework</p>
                <h2 id="reporting-title">Measure market quality.<br />Explain the results.</h2>
              </div>
              <p>Measurement definitions would be agreed before operation and explained in the reporting process.</p>
            </div>
            <div className="quality-grid">
              <article className="quality-card">
                <h3>Spread</h3>
                <p>Best ask minus best bid, expressed in basis points relative to mid-price. State the venue, pair, and observation period.</p>
              </article>
              <article className="quality-card">
                <h3>Bid &amp; Ask Depth</h3>
                <p>Buy-side and sell-side liquidity shown separately within a stated price band. Total market depth is kept apart from the firm’s contribution.</p>
              </article>
              <article className="quality-card">
                <h3>Quote Presence</h3>
                <p>The proportion of agreed observation time when qualifying two-sided quotes are present. Qualifying conditions and exceptions are part of the definition.</p>
              </article>
            </div>
            <details>
              <summary>View the sample report structure</summary>
              <div className="mm-structure">
                <p className="report-flag">Illustrative report structure</p>
                <p>Fields a report would name. No measured values, clients, or file download are included.</p>
                <dl>
                  <dt>Venue / pair</dt>
                  <dd>Named when a mandate exists. Left blank in this structure.</dd>
                  <dt>Period</dt>
                  <dd>The observation window agreed in the mandate.</dd>
                  <dt>Price band</dt>
                  <dd>The band used for depth, stated with the definition.</dd>
                  <dt>Metric definitions</dt>
                  <dd>Spread, bid-side depth, ask-side depth, and quote presence, each with its rule.</dd>
                  <dt>Exceptions</dt>
                  <dd>Hours, interruptions, or exclusions written into the mandate.</dd>
                  <dt>Commentary</dt>
                  <dd>A written note on the window. Not a performance result.</dd>
                </dl>
              </div>
            </details>
            <p className="quality-note">Metric definitions only. No operating results, service targets, or client performance are shown.</p>
          </div>
        </section>
    
        <section className="mm-process" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">05 / Proposed engagement process</p>
                <h2 id="process-title">A clear process<br />before the first quote.</h2>
              </div>
              <p>Assessment does not guarantee acceptance, a launch date, or support hours.</p>
            </div>
            <div className="steps">
              <article className="step">
                <span className="number">01 / Assess</span>
                <h3>Assess the market</h3>
                <p>Review requirements, eligibility, and market context.</p>
              </article>
              <article className="step">
                <span className="number">02 / Agree</span>
                <h3>Agree the mandate</h3>
                <p>Define ownership, scope, limits, and reporting expectations.</p>
              </article>
              <article className="step">
                <span className="number">03 / Validate</span>
                <h3>Validate the setup</h3>
                <p>Complete technical testing and a limited pilot.</p>
              </article>
              <article className="step">
                <span className="number">04 / Review</span>
                <h3>Review and refine</h3>
                <p>Review the agreed measures before considering expansion.</p>
              </article>
            </div>
          </div>
        </section>
    
        <section className="mm-faq" id="faq" aria-labelledby="faq-title">
          <div className="wrap mm-faq-grid">
            <div>
              <p className="eyebrow">06 / Questions before an engagement</p>
              <h2 id="faq-title">Before a<br />mandate begins.</h2>
            </div>
            <div>
              <details>
                <summary>Which markets would the initial service cover?</summary>
                <p>The initial proposed scope is centralized-exchange spot markets. Specific venues and pairs would be confirmed during assessment.</p>
              </details>
              <details>
                <summary>How would performance be reviewed?</summary>
                <p>Through agreed definitions of spread, bid-side and ask-side depth, quote presence and documented exceptions.</p>
              </details>
              <details>
                <summary>Who would own the assets and accounts?</summary>
                <p>Ownership, funding, account permissions and responsibilities must be specified in the mandate before operation.</p>
              </details>
              <details>
                <summary>Is a particular price or trading result guaranteed?</summary>
                <p>No. Market conditions change, and service objectives must be distinguished from guaranteed outcomes.</p>
              </details>
            </div>
          </div>
        </section>
    
        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="wrap contact-grid">
            <div>
              <p className="eyebrow">Start with the right questions</p>
              <h2 id="contact-title">Let’s discuss your liquidity requirements.</h2>
              <p>Discuss objectives, venues, and the scope of a potential mandate.</p>
            </div>
            <button className="pill inquiry-open" type="button" data-inquiry-service="Market Making" onClick={(event) => openInquiry(event.currentTarget)}>Discuss your market <span aria-hidden="true">↗</span></button>
          </div>
        </section>
      </main>
    
  );
}
