export default function FAQ() {
    return (
        <div>
            <div className="card">
                <h3> 💻 General Questions</h3>
                <p className="faq-qn"> What makes your products different from a standard tech store?</p>
                <p className="faq-ans">   We don&apos;t do generic. Every item in our shop is curated or designed by developers, for developers. Whether it&apos;s a desk mat that actually fits a 100% keyboard and a mouse, or a hoodie with a "hidden" pocket for an SSD, we prioritize functionality and dev-culture.
                </p>
                <p className="faq-qn">   Do you offer bulk discounts for engineering teams?</p>
                <p className="faq-ans"> Absolutely. If you&apos;re looking to outfit your whole sprint team or need custom "swag" for a hackathon.</p>

            </div>
            <div className="card">
                <h3>📦 Shipping & Logistics</h3>
                <p className="faq-qn">
                    How long until my order arrives? </p>
                <div className="faq-ans"> We know you&apos;re used to instant deployment, but physical atoms move slower than bits.

                    <ul>
                        <li>Processing: 1–2 business days.</li>

                        <li>Shipping: 3–7 business days (Domestic) / 10–20 days (International).</li>

                        <li>Tracking: You&apos;ll receive a tracking link via email as soon as your order "pushes to production."</li>
                    </ul>
                </div>

                <p className="faq-qn">Do you ship internationally?</p>
                <p className="faq-ans">Yes. We ship to most countries. Please note that customs fees/import duties are the responsibility of the "end user" (that&apos;s you).
                </p>
            </div>

            <div className="card">
                <h3> 🛠 Product Specs & Customization</h3>
                <p className="faq-qn"> What is the quality of your apparel?</p>
                <p className="faq-ans"> We use high-thread-count cotton blends that won&apos;t shrink after the first wash. Our prints are cured to withstand 50+ cycles, so your "It works on my machine" shirt stays readable for years.</p>
                <p className="faq-qn"> Are your keycaps compatible with my keyboard?</p>
                <p className="faq-ans">Cost of our keycaps use the MX Stem (cross-shaped) standard. If you&apos;re rocking a specialized Topre or low-profile board, check the "Specs" tab on the product page before hitting merge.</p>

                <p className="faq-qn">Can I request a custom design (e.g., my repo&apos;s logo)?</p>
                <p className="faq-ans">We love custom builds! We offer bespoke printing for orders of 10+ items. Send us your SVG files and we&apos;ll get back to you with a mockup.</p>
            </div>

            <div className="card">
                <h3> 🛡 Returns & Debugging</h3>
                <p className="faq-qn">My item arrived damaged. What&apos;s the "hotfix"?</p>
                <p className="faq-ans">If your product has a bug (damaged or defective), email us within 14 days with a photo of the "error log" (the damage). We&apos;ll send a replacement immediately at no extra cost.
                </p>
                <p className="faq-qn">What is your return policy?</p>
                <p className="faq-ans">We offer a 30-day return window for unused items in their original packaging.</p>

                <p className="faq-ans"><i>Note: Digital products (software keys, downloadable assets) are non-refundable once the "download" button has been clicked.</i></p>
            </div>

            <div className="card">
                <h3>🔒 Security & Privacy</h3>
                <p className="faq-qn"> Is my payment secure?</p>
                <p className="faq-ans"> We use industry-standard SSL encryption and process payments through Stripe/PayPal. We never store your raw credit card data on our servers—because we actually understand how SQL injection works.</p>

                <p className="faq-qn"> Do you sell my data?</p>
                <p className="faq-ans"> Never. We hate spam as much as we hate undocumented code. Your data is used strictly for fulfillment and (if you opt-in) occasional updates on new drops.
                </p>
                <p className="faq-qn">Still have questions?</p>
                <p className="faq-ans">If you&apos;ve searched the docs and still can&apos;t find the answer, open a ticket at support@yourstore.com
                </p>
            </div>
        </div>
    )
}