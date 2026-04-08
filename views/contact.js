import { profile } from "../models/data.js";

export function Contact() {
  return `
    <section id="contact" class="section-shell contact">
      <div class="contact-shell">
        <div class="contact-copy">
          <div>
            <span class="eyebrow">Let's Connect</span>
            <h2 class="section-title">Build something modern, thoughtful, and useful together</h2>
            <p class="section-copy">
              I'm open to internships, freelance collaborations, and product-focused engineering
              opportunities. If you have an idea, role, or project in mind, send me a message.
            </p>
          </div>

          <div class="contact-links">
            <a class="contact-link" href="mailto:${profile.email}">
              <span>Email</span>
              <strong>${profile.email}</strong>
            </a>

            <a class="contact-link" href="${profile.linkedin}" target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>Connect professionally</strong>
            </a>

            <a class="contact-link" href="${profile.github}" target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <strong>Explore recent builds</strong>
            </a>
          </div>
        </div>

        <form
          class="contact-form"
          action="https://formspree.io/f/xvgqkzrb"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New portfolio message" />

          <div class="input-group">
            <label for="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div class="input-group">
            <label for="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div class="input-group">
            <label for="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me a little about your project or opportunity"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn">
            <span>Send Message</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </section>
  `;
}
