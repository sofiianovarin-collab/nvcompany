import { Link } from "react-router-dom";
import { DialogueArt } from "../../graphics/Artwork";
import { useContactForm } from "../../interactions/useContactForm";
import "./Contact.css";

export function ContactPage() {
  useContactForm();
  return (
    <main id="main">
        <section className="ct-hero" aria-labelledby="ct-title">
          <div className="wrap ct-hero-grid">
            <div>
              <nav className="crumb" aria-label="Breadcrumb">
                <ol>
                  <li><Link to="/" >Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page">Contact</li>
                </ol>
              </nav>
              <p className="eyebrow">Contact</p>
              <h1 id="ct-title">Start with the right questions.</h1>
              <div className="hero-actions">
                <a className="pill" href="#inquiry">Start an inquiry <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="ct-hero-copy">
              <p>Share your organization, intended markets and liquidity objectives.</p>
            </div>
          </div>
        </section>
    
        <section className="ct-inquiry" id="inquiry" aria-labelledby="inquiry-heading">
          <div className="wrap ct-inquiry-grid">
            <div>
              <p className="eyebrow">01 / The conversation</p>
              <h2 id="inquiry-heading">A focused first conversation.</h2>
              <DialogueArt />
              <div className="ct-topics">
                <article>
                  <h3>Your organization</h3>
                  <p>The client type and country or intended service region.</p>
                </article>
                <article>
                  <h3>Intended markets</h3>
                  <p>The venues and trading pairs you would like to discuss.</p>
                </article>
                <article>
                  <h3>Objectives and scope</h3>
                  <p>The liquidity requirements and questions for an initial conversation.</p>
                </article>
              </div>
            </div>
            <div className="ct-form-panel">
              <h2>Tell us about your market.</h2>
              <p className="preview-note">Preview only. No inquiry is sent.</p>
              <p id="contact-service" className="service-context" hidden></p>
              <form id="contact-form" method="post" action="#" noValidate>
                <div className="field">
                  <label htmlFor="contact-company">Company name <span className="req">(required)</span></label>
                  <input id="contact-company" name="company" autoComplete="organization" data-error="contact-company-error" aria-required="true" />
                  <p id="contact-company-error" className="field-error" hidden></p>
                </div>
                <div className="field">
                  <label htmlFor="contact-email">Work email <span className="req">(required)</span></label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" data-error="contact-email-error" aria-required="true" />
                  <p id="contact-email-error" className="field-error" hidden></p>
                </div>
                <div className="field">
                  <label htmlFor="contact-type">Client type <span className="req">(required)</span></label>
                  <select id="contact-type" name="client" data-error="contact-type-error" aria-required="true">
                    <option value="">Select a client type</option>
                    <option value="Exchange">Exchange</option>
                    <option value="Token Issuer">Token Issuer</option>
                    <option value="Other Organization">Other Organization</option>
                  </select>
                  <p id="contact-type-error" className="field-error" hidden></p>
                </div>
                <div className="field">
                  <label htmlFor="contact-region">Country or service region <span className="req">(required)</span></label>
                  <input id="contact-region" name="region" autoComplete="off" data-error="contact-region-error" aria-required="true" />
                  <p id="contact-region-error" className="field-error" hidden></p>
                </div>
                <div className="field">
                  <label htmlFor="contact-website">Company website <span className="req">(optional)</span></label>
                  <input id="contact-website" name="website" type="url" autoComplete="url" inputMode="url" data-error="contact-website-error" data-described="contact-website-hint" aria-describedby="contact-website-hint" />
                  <p id="contact-website-hint" className="field-hint">Include https://.</p>
                  <p id="contact-website-error" className="field-error" hidden></p>
                </div>
                <div className="field">
                  <label htmlFor="contact-venues">Target venues &amp; pairs <span className="req">(optional)</span></label>
                  <input id="contact-venues" name="venues" autoComplete="off" />
                </div>
                <div className="field">
                  <label htmlFor="contact-message">What would you like to discuss? <span className="req">(required)</span></label>
                  <textarea id="contact-message" name="message" data-error="contact-message-error" aria-required="true"></textarea>
                  <p id="contact-message-error" className="field-error" hidden></p>
                </div>
                <p>Please do not include passwords, API secrets or private keys.</p>
                <button className="pill" type="submit">Preview inquiry <span aria-hidden="true">↗</span></button>
                <p id="contact-status" className="form-message" role="status" aria-live="polite" tabIndex={-1}></p>
              </form>
            </div>
          </div>
        </section>
    
        <section className="ct-next" aria-labelledby="next-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <p className="eyebrow">Proposed inquiry process</p>
                <h2 id="next-title">What happens next.</h2>
              </div>
              <p>These steps describe a future live inquiry flow. This preview does not send an inquiry, place it in a queue, or promise a response.</p>
            </div>
            <div className="ct-next-grid">
              <article>
                <h3>Requirements review</h3>
                <p>Understand the organization, intended markets and objectives.</p>
              </article>
              <article>
                <h3>Scope discussion</h3>
                <p>Identify the questions, responsibilities and potential service scope to discuss.</p>
              </article>
              <article>
                <h3>Potential next steps</h3>
                <p>Consider whether a further assessment or mandate discussion is appropriate.</p>
              </article>
            </div>
          </div>
        </section>
    
        <section className="mm-faq" aria-labelledby="faq-title">
          <div className="wrap mm-faq-grid">
            <div>
              <p className="eyebrow">02 / Questions</p>
              <h2 id="faq-title">Before you write.</h2>
            </div>
            <div>
              <details>
                <summary>What should I include?</summary>
                <p>Your organization, intended venues or pairs, liquidity objectives and the questions you would like to discuss.</p>
              </details>
              <details>
                <summary>Can I share credentials here?</summary>
                <p>No. Do not provide passwords, API secrets or private keys through this public inquiry form.</p>
              </details>
              <details>
                <summary>Does an inquiry confirm an engagement?</summary>
                <p>No. Any potential engagement would require a separate assessment and agreement on scope and responsibilities.</p>
              </details>
            </div>
          </div>
        </section>
    
        <section className="fm-explore" aria-labelledby="explore-title">
          <div className="wrap">
            <p className="eyebrow">03 / Related pages</p>
            <h2 id="explore-title">Continue the conversation.</h2>
            <div className="fm-explore-grid">
              <Link to="/who-we-serve/" >
                <span>Who We Serve <span aria-hidden="true">↗</span></span>
                <em>Exchanges and token issuers, and the requirements each would discuss.</em>
              </Link>
              <Link to="/approach/" >
                <span>Our Approach <span aria-hidden="true">↗</span></span>
                <em>Explore scope, responsibilities, validation and review.</em>
              </Link>
            </div>
          </div>
        </section>
      </main>
    
  );
}
