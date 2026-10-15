import { Link } from "react-router-dom";
import { useInquiry } from "../../inquiry/InquiryContext";
import { useInsightReader } from "../../interactions/useInsightReader";
import "./Insights.css";

export function InsightsPage() {
  const { openInquiry } = useInquiry();
  useInsightReader();
  return (
    <>
    <main id="main">
        <section className="in-hero" aria-labelledby="in-title">
          <div className="wrap in-hero-grid">
            <div>
              <nav className="crumb" aria-label="Breadcrumb">
                <ol>
                  <li><Link to="/" >Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page">Insights</li>
                </ol>
              </nav>
              <p className="eyebrow">Insights</p>
              <h1 id="in-title">A closer look at<br />market quality.</h1>
              <p className="in-hero-lead">Understand the measures.<br />Ask better questions.</p>
              <div className="hero-actions">
                <a className="pill" href="#guides">Explore the guides <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="in-hero-copy">
              <p>Clear explanations of liquidity, measurement and the decisions behind a market-making mandate.</p>
              <figure className="fm-marks">
                <ol>
                  <li>Quality</li>
                  <li>Reporting</li>
                  <li>Process</li>
                </ol>
                <figcaption>Editorial draft guides. Prepared for editorial review.</figcaption>
              </figure>
            </div>
          </div>
        </section>
    
        <section className="in-guides" id="guides" aria-labelledby="guides-title">
          <div className="wrap">
            <div className="guide-toolbar">
              <div className="guide-filter-bar" role="group" aria-label="Guide categories">
                <button type="button" data-filter="all" aria-pressed="true">All</button>
                <button type="button" data-filter="Market Quality" aria-pressed="false">Market Quality</button>
                <button type="button" data-filter="Reporting" aria-pressed="false">Reporting</button>
                <button type="button" data-filter="Process" aria-pressed="false">Process</button>
              </div>
              <p className="guide-note">Draft guides for editorial review.</p>
            </div>
            <h2 id="guides-title" className="visually-hidden">Editorial draft guides</h2>
            <p id="guide-count" className="visually-hidden" aria-live="polite">Showing 3 guides.</p>
            <p id="guide-empty" className="guide-empty" hidden>No guides in this category.</p>
            <p className="eyebrow">01 / Editorial draft guides</p>
    
            <div className="guide-board">
              <article className="guide-card is-featured" data-category="Market Quality">
                <figure className="guide-cover">
                  <img src="/covers/order-book-depth.svg" alt="" width="1200" height="800" />
                  <figcaption>Concept illustration - No market data</figcaption>
                </figure>
                <div className="guide-copy">
                  <p className="eyebrow">Market Quality</p>
                  <p className="draft-label">Editorial draft</p>
                  <h3>Understanding order-book depth</h3>
                  <p>Depth describes available buy and sell liquidity within a defined price range. Its meaning depends on the venue, trade size and observation time.</p>
                  <button className="pill guide-open" type="button">Read the guide <span aria-hidden="true">↗</span></button>
                </div>
                <div className="guide-body" hidden>
                  <p>Order-book depth describes the visible buy and sell orders within a specified price range at an observation time. A useful reading starts with the venue, trading pair, reference price, price band and units used to express size.</p>
                  <h3>Define the measurement</h3>
                  <p>Depth measured close to the best bid and ask answers a different question from depth measured across a wider range. State the price band and show bid-side and ask-side amounts separately. A combined total can hide an imbalance between the two sides.</p>
                  <h3>Read the market context</h3>
                  <p>Trade size matters when interpreting available liquidity. Distinguish the total visible order book from the orders contributed by a particular market maker. Comparisons should use consistent venues, units, price bands and observation methods.</p>
                  <h3>Treat depth as a changing observation</h3>
                  <p>Visible orders can be filled or cancelled, so a snapshot does not guarantee what will remain available when an order reaches the venue. Review depth over a defined period and explain missing observations. Read it alongside spread and qualifying quote presence rather than treating one number as a complete description of market quality.</p>
                </div>
              </article>
    
              <article className="guide-card" data-category="Reporting">
                <figure className="guide-cover">
                  <img src="/covers/liquidity-report.svg" alt="" width="1200" height="800" loading="lazy" />
                  <figcaption>Concept illustration - No market data</figcaption>
                </figure>
                <p className="eyebrow">Reporting</p>
                <p className="draft-label">Editorial draft</p>
                <h3>Reading a liquidity report</h3>
                <p>Use clear definitions for spread, depth, quote presence and exceptions.</p>
                <button className="text-link guide-open" type="button">Read the guide <span aria-hidden="true">↗</span></button>
                <div className="guide-body" hidden>
                  <p>A useful liquidity report makes its measurements understandable before presenting conclusions. Identify the venue, pair, observation period, data source and relevant units. Comparisons are easier to interpret when the method remains consistent.</p>
                  <h3>Start with the definitions</h3>
                  <p>Spread is the difference between the best ask and best bid. When expressed in basis points relative to the mid-price, the calculation is (best ask - best bid) / mid-price multiplied by 10,000. Depth should state the price band and show the bid and ask sides separately. Quote presence should define what qualifies as a two-sided quote and how observation time is counted.</p>
                  <h3>Read the exceptions</h3>
                  <p>The report should explain missing data, venue interruptions, planned pauses and other relevant exceptions. State whether and how these affect the measurement period or denominator. Quietly changing the method can make apparently similar reports difficult to compare.</p>
                  <h3>Connect indicators to the agreed objective</h3>
                  <p>Review indicators together and distinguish observations from explanations. A change in overall market activity does not by itself establish that a particular market maker caused the change. Discuss deviations and proposed adjustments within the agreed mandate rather than presenting a single metric as proof of a guaranteed outcome.</p>
                </div>
              </article>
    
              <article className="guide-card" data-category="Process">
                <figure className="guide-cover">
                  <img src="/covers/pilot-process.svg" alt="" width="1200" height="800" loading="lazy" />
                  <figcaption>Concept illustration - No market data</figcaption>
                </figure>
                <p className="eyebrow">Process</p>
                <p className="draft-label">Editorial draft</p>
                <h3>Before a market-making pilot</h3>
                <p>Clarify scope, ownership, limits, permissions and the review process.</p>
                <button className="text-link guide-open" type="button">Read the guide <span aria-hidden="true">↗</span></button>
                <div className="guide-body" hidden>
                  <p>A limited pilot starts with a defined brief. The venue, eligible pairs, intended activity and review objectives should be understood before technical preparation or quoting begins.</p>
                  <h3>Clarify scope and responsibilities</h3>
                  <p>Agree the account and asset ownership, funding arrangements, permissions, operating limits and escalation responsibilities. Identify who can approve changes, pause activity and authorize a return to operation. Define reporting and the treatment of exceptions.</p>
                  <h3>Validate the relevant scenarios</h3>
                  <p>Technical preparation should address venue rules, order states, partial fills, rejected orders, uncertain cancellations and data interruptions. Reconcile orders, trades and balances. Trading access and transfer approval should follow the agreed permission boundaries. Public inquiry forms are not the place to provide API secrets, private keys or passwords.</p>
                  <h3>Define the review before expansion</h3>
                  <p>Agree the observation period, market-quality indicators and questions the pilot is intended to answer. Review exceptions and operational issues as well as the indicators. Consider a wider scope only when the relevant controls, resources and mandate terms support the proposed change.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
    
        <section className="fm-explore" aria-labelledby="explore-title">
          <div className="wrap">
            <p className="eyebrow">02 / Connect the ideas</p>
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
                <h2 id="contact-title">Discuss your market.</h2>
                <p>Bring your intended venues, trading pairs and liquidity objectives to the conversation.</p>
              </div>
              <button className="pill inquiry-open" type="button" onClick={(event) => openInquiry(event.currentTarget)}>Talk to our team <span aria-hidden="true">↗</span></button>
            </div>
          </div>
        </section>
      </main>
    
    <dialog id="reader" aria-labelledby="reader-title">
        <div className="dialog-head">
          <p className="eyebrow" id="reader-category"></p>
          <button className="close-dialog" type="button" aria-label="Close guide">×</button>
        </div>
        <p className="draft-label">Editorial draft</p>
        <h2 id="reader-title" tabIndex={-1}></h2>
        <div id="reader-body" className="reader-body"></div>
      </dialog>
    </>
  );
}
