<template>
  <div class="contact-page">
    <!-- Hero -->
    <section class="contact-hero">
      <div class="contact-container">
        <span class="section-label"> LET'S CONNECT </span>

        <h1>
          Let's create<br />
          <span>something great.</span>
        </h1>

        <p>
          Have a project, opportunity or idea you'd like to discuss? I'd love to
          hear from you.
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-section">
      <div class="contact-container contact-grid">
        <!-- Contact Information -->
        <div class="contact-info">
          <span class="small-label"> GET IN TOUCH </span>

          <h2>
            Let's start<br />
            a conversation.
          </h2>

          <p>
            Whether you want to talk about a project, an opportunity, or simply
            connect, feel free to reach out.
          </p>

          <!-- Email -->
          <a href="wendympeta@icloud.com" class="contact-card">
            <div class="contact-icon">@</div>

            <div>
              <span>Email</span>
              <strong>wendympeta@icloud.com</strong>
            </div>

            <span class="contact-arrow">↗</span>
          </a>

          <!-- Phone -->
          <a href="tel:+27 73 658 8522" class="contact-card">
            <div class="contact-icon">☎</div>

            <div>
              <span>Phone</span>
              <strong>+27 73 658 8522</strong>
            </div>

            <span class="contact-arrow">↗</span>
          </a>

          <!-- Location -->
          <div class="contact-card">
            <div class="contact-icon">◉</div>

            <div>
              <span>Location</span>
              <strong>Cape Town, South Africa</strong>
            </div>
          </div>

          <!-- Socials -->
          <div class="contact-socials">
            <span>FOLLOW ME</span>

            <div>
              <a href="#" @click.prevent>GitHub</a>
              <a href="#" @click.prevent>LinkedIn</a>
              <a href="#" @click.prevent>Instagram</a>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="contact-form-wrapper">
          <div class="form-heading">
            <span></span>

            <div>
              <h3>Send me a message.</h3>
              <p>I'll get back to you as soon as possible.</p>
            </div>
          </div>

          <form class="contact-form" @submit.prevent>
            <div class="form-row">
              <div class="form-group">
                <label for="name"> Your Name </label>

                <input id="name" type="text" placeholder="John Doe" />
              </div>

              <div class="form-group">
                <label for="email"> Your Email </label>

                <input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>

            <div class="form-group">
              <label for="subject"> Subject </label>

              <input
                id="subject"
                type="text"
                placeholder="What would you like to talk about?"
              />
            </div>

            <div class="form-group">
              <label for="message"> Message </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Tell me a little about your project..."
              ></textarea>
            </div>

            <button type="submit" class="send-button">
              Send Message
              <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="contact-cta">
      <div class="contact-container">
        <span> HAVE AN IDEA? </span>

        <h2>
          Let's make it<br />
          <span>happen.</span>
        </h2>

        <a href="mailto:your.email@example.com">
          Email Me
          <span>↗</span>
        </a>
      </div>
    </section>
  </div>
</template>
