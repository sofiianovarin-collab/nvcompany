import { Link } from "react-router-dom";
import { LiquidityField, ServiceRibbon } from "../../graphics/Artwork";
import { useInquiry } from "../../inquiry/InquiryContext";
import { useHomeTabs } from "../../interactions/useHomeTabs";

export function HomePage() {
  const { openInquiry } = useInquiry();
  useHomeTabs();
  return (
    <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">Market making and liquidity · Proposed offering</p>
              <h1 id="hero-title">Liquidity for<br />digital asset<br />markets.</h1>
            </div>
            <div className="hero-copy">
              <p>A proposed market-making practice focused on two-sided liquidity, inventory discipline, and clear market-quality reporting.</p>
              <div className="hero-actions">
                <button className="pill inquiry-open" type="button" onClick={(event) => openInquiry(event.currentTarget)}>Discuss your liquidity needs <span aria-hidden="true">↗</span></button>
                <a className="text-link" href="#approach">Explore the approach <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <p className="hero-note">Proposed capabilities · Validate before launch</p>
            <figure className="hero-art" data-ambient="on">
              <LiquidityField />
              <figcaption className="art-caption">Decorative illustration. No market data.</figcaption>
            </figure>
          </div>
        </section>
    
        <section className="services" id="services" aria-labelledby="services-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">01 / Proposed service areas</p>
                <h2 id="services-title">Two needs.<br />One liquidity focus.</h2>
              </div>
              <p>Start with a defined scope, agreed market-quality measures, and reporting as part of the work. Reporting is not a separate business.</p>
            </div>
            <ServiceRibbon />
            <div className="service-grid">
              <article className="service-card">
                <div className="card-top">
                  <span className="number">01</span>
                  <span className="card-tag">For exchanges</span>
                </div>
                <h3>Exchange<br />Market Making</h3>
                <p>A proposed service for exchanges that want structured two-sided quoting and inventory controls. The mandate would name the pairs, the limits, and the measures used to review the market.</p>
                <Link to="/services/market-making/" className="text-link" >Explore market making <span aria-hidden="true">↗</span></Link>
              </article>
              <article className="service-card">
                <div className="card-top">
                  <span className="number">02</span>
                  <span className="card-tag">For token issuers</span>
                </div>
                <h3>Token<br />Liquidity</h3>
                <p>A proposed service for token issuers evaluating liquidity on selected venues. Planning stays specific to the asset, the venues, and whether the scope is a launch or ongoing support.</p>
                <a className="text-link" href="#clients">Explore the audience <span aria-hidden="true">↗</span></a>
              </article>
            </div>
          </div>
        </section>
    
        <section className="audience" id="clients" aria-labelledby="clients-title">
          <div className="wrap audience-grid">
            <div>
              <p className="eyebrow">02 / Who we would serve</p>
              <h2 id="clients-title">Different markets.<br />Specific requirements.</h2>
              <p className="audience-copy">The operating model should follow the market, the mandate, and the counterparty. Nothing here describes a current client.</p>
            </div>
            <div>
              <div className="tablist" role="tablist" aria-label="Proposed client groups">
                <button className="tab" role="tab" id="tab-exchanges" aria-controls="panel-exchanges" aria-selected="true" tabIndex={0} type="button">Exchanges</button>
                <button className="tab" role="tab" id="tab-issuers" aria-controls="panel-issuers" aria-selected="false" tabIndex={-1} type="button">Token Issuers</button>
              </div>
              <div className="tabpanel" role="tabpanel" id="panel-exchanges" aria-labelledby="tab-exchanges" tabIndex={0}>
                <h3>Designed around<br />market quality.</h3>
                <p>A potential exchange mandate would be written before any quoting starts.</p>
                <ul className="topic-list">
                  <li>Market-quality objectives, stated as targets</li>
                  <li>Trading pairs in scope</li>
                  <li>Venue constraints, including hours and inventory limits</li>
                  <li>Baseline measurements taken before quoting</li>
                </ul>
                <span className="feature-line">Scope → Measurement → Review</span>
              </div>
              <div className="tabpanel" role="tabpanel" id="panel-issuers" aria-labelledby="tab-issuers" tabIndex={0} hidden>
                <h3>Designed around<br />the trading environment.</h3>
                <p>A potential issuer mandate would stay tied to the venues where the asset actually trades.</p>
                <ul className="topic-list">
                  <li>Asset and venue assessment</li>
                  <li>Launch or ongoing liquidity scope</li>
                  <li>Agreed reporting</li>
                </ul>
                <span className="feature-line">Venue review → Mandate → Reporting</span>
              </div>
            </div>
          </div>
        </section>
    
        <section className="quality" id="measurement" aria-labelledby="quality-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">03 / A measurement framework</p>
                <h2 id="quality-title">Define market quality.<br />Then measure it.</h2>
              </div>
              <p>A proposed report would explain market quality through definitions a counterparty can check. This page shows the definitions, not results.</p>
            </div>
            <div className="quality-grid">
              <article className="quality-card">
                <div className="quality-icon" aria-hidden="true">
                  <i style={{"height":"22px"}}></i>
                  <i style={{"height":"36px"}}></i>
                  <i style={{"height":"48px"}}></i>
                  <i style={{"height":"60px"}}></i>
                  <i style={{"height":"72px"}}></i>
                </div>
                <h3>Spread</h3>
                <p>The distance between the best bid and the best ask, recorded with the venue, the pair, and the observation window.</p>
              </article>
              <article className="quality-card">
                <div className="quality-icon" aria-hidden="true">
                  <i className="spread"></i>
                </div>
                <h3>Depth at a stated band</h3>
                <p>Bid-side and ask-side size inside an agreed band around mid, for example within 1% of mid. The band is part of the definition.</p>
              </article>
              <article className="quality-card">
                <div className="quality-icon quotes" aria-hidden="true">
                  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                </div>
                <h3>Quote presence</h3>
                <p>The share of the agreed window during which qualifying two-sided quotes were present under the mandate’s rules.</p>
              </article>
            </div>
            <p className="quality-note">Illustrative descriptions. Icons are decorative. No operating results or targets are shown.</p>
    
            <div className="report">
              <p className="report-flag">Illustrative data</p>
              <div className="report-grid">
                <div>
                  <h3>A report concept, not a result.</h3>
                  <p>Slippage for one fixed trade size is optional. It belongs in the report only when the mandate asks for it, and it is not shown here as a number.</p>
                  <div className="report-chart" aria-hidden="true">
                    <span></span><span></span><span></span><span></span>
                  </div>
                  <p>Bar lengths are decorative. They are not measurements.</p>
                </div>
                <table>
                  <caption className="visually-hidden">Fields a future report would name. No measured values.</caption>
                  <tbody>
                    <tr>
                      <th scope="row">Spread</th>
                      <td>Basis points for a named pair, venue, and window.</td>
                    </tr>
                    <tr>
                      <th scope="row">Bid-side depth</th>
                      <td>Size inside the stated band around mid.</td>
                    </tr>
                    <tr>
                      <th scope="row">Ask-side depth</th>
                      <td>Size inside the same stated band.</td>
                    </tr>
                    <tr>
                      <th scope="row">Quote presence</th>
                      <td>Share of the window with qualifying two-sided quotes.</td>
                    </tr>
                    <tr>
                      <th scope="row">Slippage</th>
                      <td>Optional. One fixed trade size, only if the mandate includes it.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
    
        <section className="approach" id="approach" aria-labelledby="approach-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">04 / Proposed engagement process</p>
                <h2 id="approach-title">Clarity before<br />the first quote.</h2>
              </div>
              <p>A potential mandate would move through four stages. Objectives are targets to review, not guaranteed outcomes.</p>
            </div>
            <div className="steps">
              <article className="step">
                <span className="number">01 / Assess</span>
                <h3>Assess the market</h3>
                <p>Review the asset, the venues, the constraints, and a baseline for spread and depth. Quoting does not start in this stage.</p>
              </article>
              <article className="step">
                <span className="number">02 / Agree</span>
                <h3>Agree the mandate</h3>
                <p>Write the scope, risk limits, inventory rules, measurements, and reporting. Targets stay targets.</p>
              </article>
              <article className="step">
                <span className="number">03 / Validate</span>
                <h3>Validate the setup</h3>
                <p>Test access and controls, then run a limited pilot inside the agreed limits.</p>
              </article>
              <article className="step">
                <span className="number">04 / Review</span>
                <h3>Review and refine</h3>
                <p>Report the agreed measures and change the setup only within the approved scope.</p>
              </article>
            </div>
          </div>
        </section>
    
        <section className="firm" id="firm" aria-labelledby="firm-title">
          <div className="wrap firm-grid">
            <div className="firm-art" aria-hidden="true">
              <svg viewBox="0 0 360 290">
                <g fill="none" stroke="#1C6259" strokeWidth="1.2">
                  <path d="M40 236 175 37 320 236Z"/>
                  <path d="M63 236 175 71 298 236Z"/>
                  <path d="M86 236 175 105 275 236Z"/>
                  <path d="M109 236 175 139 253 236Z"/>
                  <path d="M131 236 175 172 230 236Z"/>
                  <path d="M40 236 175 137 320 236M175 37V274"/>
                </g>
              </svg>
            </div>
            <div>
              <p className="eyebrow">05 / The firm</p>
              <h2 id="firm-title">A clear identity.<br />A credible foundation.</h2>
              <p>The proposed philosophy is narrow: quote both sides, keep inventory inside agreed limits, and report market quality in terms a counterparty can review. Legal entity and leadership will be added when those facts are confirmed.</p>
              <ul className="fact-list">
                <li>Legal entity <span>To be supplied</span></li>
                <li>Registered location <span>To be supplied</span></li>
                <li>Leadership <span>To be supplied</span></li>
              </ul>
            </div>
          </div>
        </section>
    
        <section className="insights" id="insights" aria-labelledby="insights-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">06 / Editorial concepts</p>
                <h2 id="insights-title">A closer look<br />at market structure.</h2>
              </div>
              <p>Editorial concepts, not published articles, and they have no authors or dates. <Link to="/insights/" >Read the draft guides</Link>.</p>
            </div>
            <div className="insight-grid">
              <article className="insight-card">
                <div className="insight-art" aria-hidden="true">
                  <svg viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice">
                    <rect width="600" height="260" fill="#EEEAE2"/>
                    <path d="M 5 25 C 125 25, 135 43, 206 59 S 324 83, 385 55 S 480 15, 592 15" fill="none" stroke="#1C6259" strokeWidth="1.25" opacity="0.45"/>
                    <path d="M 5 53 C 125 53, 135 71, 206 87 S 324 111, 385 83 S 480 43, 592 43" fill="none" stroke="#1C6259" strokeWidth="1.25" opacity="0.6"/>
                    <path d="M 5 81 C 125 81, 135 99, 206 115 S 324 139, 385 111 S 480 71, 592 71" fill="none" stroke="#1C6259" strokeWidth="1.25" opacity="0.75"/>
                    <path d="M 5 122 C 125 122, 140 107, 206 96 S 314 80, 385 107 S 497 145, 592 145" fill="none" stroke="#151C2D" strokeWidth="1" opacity="0.35"/>
                    <path d="M 5 156 C 125 156, 140 141, 206 130 S 314 114, 385 141 S 497 179, 592 179" fill="none" stroke="#151C2D" strokeWidth="1" opacity="0.25"/>
                  </svg>
                </div>
                <p className="kicker">EDITORIAL CONCEPT / ORDER-BOOK DEPTH</p>
                <h3>What market depth can and cannot tell us.</h3>
                <p>A proposed note on reading both sides of a book across a price band and a trade size.</p>
                <details>
                  <summary>Read concept synopsis</summary>
                  <p>Depth changes with the band and the time of the snapshot. A large size far from mid is not the same thing as a tight market. The note would show how to read bid-side and ask-side size together, and why a single number is a weak comparison.</p>
                </details>
              </article>
              <article className="insight-card">
                <div className="insight-art" aria-hidden="true">
                  <svg viewBox="0 0 400 150">
                    <rect width="400" height="150" fill="#DAE5DD"/>
                    <g fill="none" stroke="#1C6259" strokeWidth="1.3">
                      <path d="M35 95C95 95 103 48 157 48S245 103 290 103 335 69 372 69"/>
                      <path d="M35 82C95 82 103 35 157 35S245 90 290 90 335 56 372 56"/>
                      <path d="M35 108C95 108 103 61 157 61S245 116 290 116 335 82 372 82"/>
                    </g>
                  </svg>
                </div>
                <p className="kicker">EDITORIAL CONCEPT / LIQUIDITY REPORTING</p>
                <h3>Defining a liquidity mandate that can be reviewed.</h3>
                <p>A proposed note on writing scope, limits, and reports so a later reader can check them.</p>
                <details>
                  <summary>Read concept synopsis</summary>
                  <p>A report is reviewable when each figure names the venue, the pair, the band, the window, and what was left out. The note would walk through how those definitions are written into a mandate before anyone treats a number as evidence.</p>
                </details>
              </article>
              <article className="insight-card">
                <div className="insight-art" aria-hidden="true">
                  <svg viewBox="0 0 400 150">
                    <rect width="400" height="150" fill="#E4E1D8"/>
                    <g fill="none" stroke="#151C2D" strokeWidth="1.2">
                      <circle cx="163" cy="75" r="44"/>
                      <circle cx="202" cy="75" r="44"/>
                      <circle cx="241" cy="75" r="44"/>
                      <path d="M62 75H340" opacity=".35"/>
                    </g>
                  </svg>
                </div>
                <p className="kicker">EDITORIAL CONCEPT / TOKEN LIQUIDITY</p>
                <h3>Why venue context matters for token liquidity.</h3>
                <p>A proposed note on planning liquidity when markets for the same asset are not the same.</p>
                <details>
                  <summary>Read concept synopsis</summary>
                  <p>Venue access, listed pairs, and settlement rules change the plan. The note would separate a launch scope from ongoing support, and it would treat each venue as its own market rather than one blended book.</p>
                </details>
              </article>
            </div>
          </div>
        </section>
    
        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="wrap contact-grid">
            <div>
              <p className="eyebrow">Start with the right questions</p>
              <h2 id="contact-title">Let’s define what<br />your market needs.</h2>
              <p>Discuss the scope of a potential engagement. This preview does not send a message.</p>
            </div>
            <button className="pill inquiry-open" type="button" onClick={(event) => openInquiry(event.currentTarget)}>Discuss your liquidity needs <span aria-hidden="true">↗</span></button>
          </div>
        </section>
      </main>
    
  );
}
