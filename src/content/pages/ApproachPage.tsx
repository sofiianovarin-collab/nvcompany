import { Link } from "react-router-dom";
import { ProcessTrail } from "../../graphics/ProcessTrail";
import { useInquiry } from "../../inquiry/InquiryContext";
import "./Approach.css";

export function ApproachPage() {
  const { openInquiry } = useInquiry();
  return (
    <main id="main">
        <section className="ap-hero" aria-labelledby="ap-title">
          <div className="wrap ap-hero-grid">
            <div>
              <nav className="crumb" aria-label="Breadcrumb">
                <ol>
                  <li><Link to="/" >Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page">Our Approach</li>
                </ol>
              </nav>
              <p className="eyebrow">Our approach</p>
              <h1 id="ap-title">Clarity before<br />the first quote.</h1>
              <div className="hero-actions">
                <button className="pill inquiry-open" type="button" onClick={(event) => openInquiry(event.currentTarget)}>Discuss a potential mandate <span aria-hidden="true">↗</span></button>
                <a className="text-link" href="#process">Explore the process <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="ap-hero-copy">
              <p>A proposed engagement process built around defined scope, responsibilities, testing and review.</p>
              <figure className="phase-mark">
                <ol>
                  <li>Assess</li>
                  <li>Agree</li>
                  <li>Validate</li>
                  <li>Review</li>
                </ol>
                <figcaption>Proposed engagement process</figcaption>
              </figure>
            </div>
          </div>
        </section>
    
        <section className="ap-overview" aria-labelledby="overview-title">
          <div className="wrap">
            <p className="eyebrow">01 / Four proposed phases</p>
            <h2 id="overview-title">Four phases.<br />Clear decisions.</h2>
            <p className="ap-lead">Each phase would define what needs to be understood, agreed, or reviewed before proceeding.</p>
            <div className="overview-grid">
              <a href="#assess">
                <span>01</span>
                <strong>Assess the market</strong>
                <em>Market context and readiness</em>
              </a>
              <a href="#agree">
                <span>02</span>
                <strong>Agree the mandate</strong>
                <em>Scope and responsibilities</em>
              </a>
              <a href="#validate">
                <span>03</span>
                <strong>Validate the setup</strong>
                <em>Testing and a limited pilot</em>
              </a>
              <a href="#review">
                <span>04</span>
                <strong>Review and refine</strong>
                <em>Reporting and agreed decisions</em>
              </a>
            </div>
          </div>
        </section>
    
        <section className="ap-process" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">02 / The proposed process</p>
                <h2 id="process-title">From assessment<br />to ongoing review.</h2>
              </div>
              <p>The mandate would establish what is reviewed, what is agreed, and what must be validated before operation.</p>
            </div>
            <ProcessTrail />

            <article className="phase-row" id="assess">
              <div>
                <p className="number">01</p>
                <h3>Assess the market.</h3>
                <p>Start with the organization, service region, intended venues, trading pairs and liquidity objectives. Review the asset, market context and available information before defining the potential scope.</p>
                <p>The review would cover current spread, bid-side and ask-side depth, the observation period, inventory and funding assumptions, and counterparty requirements.</p>
                <p className="decision"><span>Decision point</span> Confirm whether a suitable scope can be defined.</p>
              </div>
              <aside>
                <p className="pair-label">Potential outputs</p>
                <ul>
                  <li>Scope assessment</li>
                  <li>Baseline measurements</li>
                  <li>Initial questions</li>
                </ul>
              </aside>
            </article>
    
            <article className="phase-row" id="agree">
              <div>
                <p className="number">02</p>
                <h3>Agree the mandate.</h3>
                <p>Document the market scope, asset and account ownership, funding, permissions, responsibilities and operating boundaries before any proposed operation.</p>
                <p>The document would also name quoting parameters, inventory and venue limits, support arrangements, metric definitions, reporting cadence, exceptions, pause and resume authority, and who may approve a change. No numeric threshold is stated here.</p>
                <p className="decision"><span>Decision point</span> Confirm the documented mandate and responsibilities.</p>
              </div>
              <aside>
                <p className="pair-label">Potential outputs</p>
                <ul>
                  <li>Agreed market scope</li>
                  <li>Ownership and permissions</li>
                  <li>Limits and reporting definitions</li>
                </ul>
              </aside>
            </article>
    
            <article className="phase-row" id="validate">
              <div>
                <p className="number">03</p>
                <h3>Validate the setup.</h3>
                <p>Review the technical setup and access boundaries, test the relevant scenarios, and confirm how orders, balances and exceptions would be reconciled before a limited pilot.</p>
                <p>Proposed checks cover stale market data, rejected or partially filled orders, unconfirmed cancellations, reconnects, and balance discrepancies. Trading access and withdrawal approval stay separate. These checks are not described as deployed or audited.</p>
                <p className="decision"><span>Decision point</span> Approve a limited pilot only after the required checks.</p>
              </div>
              <aside>
                <p className="pair-label">Potential outputs</p>
                <ul>
                  <li>Technical validation</li>
                  <li>Reconciliation checks</li>
                  <li>Limited pilot readiness</li>
                </ul>
              </aside>
            </article>
    
            <article className="phase-row" id="review">
              <div>
                <p className="number">04</p>
                <h3>Review and refine.</h3>
                <p>Review agreed market-quality indicators over the defined observation period, explain exceptions, and make decisions within the approved scope.</p>
                <p>Reporting would use the same definitions for spread, bid and ask depth, and qualifying quote presence. The review would discuss deviations, operational issues, and any proposed change.</p>
                <p className="decision"><span>Decision point</span> Confirm that controls, resources, and mandate terms support any proposed expansion.</p>
              </div>
              <aside>
                <p className="pair-label">Potential outputs</p>
                <ul>
                  <li>Defined report</li>
                  <li>Exceptions and commentary</li>
                  <li>Decisions within agreed scope</li>
                </ul>
              </aside>
            </article>
          </div>
        </section>
    
        <section className="ap-bounds" aria-labelledby="bounds-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">03 / Proposed operational controls</p>
                <h2 id="bounds-title">Defined boundaries.<br />A clear response.</h2>
              </div>
              <p>A potential mandate would define how limits, uncertain order states, and operational issues are handled.</p>
            </div>
            <div className="bound-grid">
              <article>
                <h3>Inventory limits</h3>
                <p>Agree asset exposure, funding, and escalation conditions.</p>
              </article>
              <article>
                <h3>Venue exposure</h3>
                <p>Define eligible venues and the exposure limits for each.</p>
              </article>
              <article>
                <h3>Data and order checks</h3>
                <p>Address stale data and uncertain order states. Verify cancellation rather than assuming success.</p>
              </article>
              <article>
                <h3>Access and reconciliation</h3>
                <p>Separate trading access from transfer approval, and define trade and balance reconciliation.</p>
              </article>
            </div>
          </div>
        </section>
    
        <section className="ap-roles" aria-labelledby="roles-title">
          <div className="wrap">
            <p className="eyebrow">04 / Roles and review</p>
            <h2 id="roles-title">Responsibilities agreed before operation.</h2>
            <table className="role-table">
              <caption className="visually-hidden">Areas that would be agreed before any proposed operation. No people or licenses are named.</caption>
              <thead>
                <tr>
                  <th scope="col">Area</th>
                  <th scope="col">What to agree</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Quoting</th>
                  <td data-label="What to agree">Authorized operator, parameters, and approval for changes.</td>
                </tr>
                <tr>
                  <th scope="row">Account and asset ownership</th>
                  <td data-label="What to agree">Owner, account structure, and funding responsibilities.</td>
                </tr>
                <tr>
                  <th scope="row">Access and transfers</th>
                  <td data-label="What to agree">Permission boundaries and separate transfer approval.</td>
                </tr>
                <tr>
                  <th scope="row">Incident escalation</th>
                  <td data-label="What to agree">Pause and resume authority, notification, and recovery review.</td>
                </tr>
                <tr>
                  <th scope="row">Reporting</th>
                  <td data-label="What to agree">Definitions, observation periods, exceptions, and the review owner.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
    
        <section className="mm-faq" id="faq" aria-labelledby="faq-title">
          <div className="wrap mm-faq-grid">
            <div>
              <p className="eyebrow">05 / Questions before a pilot</p>
              <h2 id="faq-title">Before the pilot.</h2>
            </div>
            <div>
              <details>
                <summary>What happens before a pilot?</summary>
                <p>The proposed scope, responsibilities and permissions would be agreed, and the required technical and reconciliation checks completed before a limited pilot.</p>
              </details>
              <details>
                <summary>How are objectives and exceptions agreed?</summary>
                <p>The mandate would define the measurements, observation periods, reporting cadence, operating limits and treatment of exceptions.</p>
              </details>
              <details>
                <summary>When would the scope expand?</summary>
                <p>After review confirms that the relevant controls, resources and mandate terms support the proposed change.</p>
              </details>
            </div>
          </div>
        </section>
    
        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <div className="contact-grid">
              <div>
                <p className="eyebrow">A potential mandate starts with clarity</p>
                <h2 id="contact-title">Start with the right questions.</h2>
                <p>Share your organization, intended markets and liquidity objectives to discuss a potential mandate.</p>
              </div>
              <button className="pill inquiry-open" type="button" onClick={(event) => openInquiry(event.currentTarget)}>Discuss a potential mandate <span aria-hidden="true">↗</span></button>
            </div>
            <div className="ap-links">
              <Link to="/services/market-making/" className="text-link" >Explore Market Making <span aria-hidden="true">↗</span></Link>
              <Link to="/who-we-serve/" className="text-link" >Who We Serve <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </main>
    
  );
}
