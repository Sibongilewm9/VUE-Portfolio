
<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)
const successMessage = ref(false)
const errorMessage = ref('')

async function submitForm(event) {
  const form = event.target

  isSubmitting.value = true
  successMessage.value = false
  errorMessage.value = ''

  try {
    const response = await fetch('https://formspree.io/f/mzeepndj', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json'
      }
    })

    if (response.ok) {
      successMessage.value = true
      form.reset()
    } else {
      errorMessage.value =
        'Your message could not be sent. Please try again.'
    }
  } catch (error) {
    errorMessage.value =
      'Unable to send your message. Please check your internet connection and try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="contact-page">
    <section class="contact-hero">
      <div class="contact-container">
        <span class="section-label">LET'S WORK TOGETHER</span>

        <h1>
          Let's create<br />
          <span>something great.</span>
        </h1>

        <p>
          Have a project, opportunity or idea you'd like to discuss?
          I'd love to hear from you.
        </p>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-container contact-grid">

        <div class="contact-info">
          <span class="small-label">GET IN TOUCH</span>

          <h2>
            Let's start<br />
            a conversation.
          </h2>

          <p>
            Whether you want to talk about a project, an opportunity,
            or simply connect, feel free to reach out.
          </p>

          <a
            href="mailto:wendy.s.mpeta@gmail.com"
            class="contact-card"
          >
            <div class="contact-icon">@</div>

            <div>
              <span>Email</span>
              <strong>wendy.s.mpeta@gmail.com</strong>
            </div>

            <span class="contact-arrow">↗</span>
          </a>

          <a
            href="tel:+27736588522"
            class="contact-card"
          >
            <div class="contact-icon">☎</div>

            <div>
              <span>Phone</span>
              <strong>+27 73 658 8522</strong>
            </div>

            <span class="contact-arrow">↗</span>
          </a>

          <div class="contact-card">
            <div class="contact-icon">◉</div>

            <div>
              <span>Location</span>
              <strong>Cape Town, South Africa</strong>
            </div>
          </div>

          <div class="contact-socials">
          <span>FOLLOW ME</span>

          <div>
          <a
            href="https://github.com/Sibongilewm9"
            target="_blank"
            rel="noopener noreferrer"
          >
          GitHub ↗
        </a>

        <a
         href="https://www.linkedin.com/feed/ "
         target="_blank"
         rel="noopener noreferrer"
         >
        LinkedIn ↗
        </a>
       </div>
       </div>
        </div>

        <div class="contact-form-wrapper">
          <div class="form-heading">
            <span></span>

            <div>
              <h3>Send me a message.</h3>
              <p>I'll get back to you as soon as possible.</p>
            </div>
          </div>

          <div
            v-if="successMessage"
            class="form-feedback success"
            role="status"
            aria-live="polite"
          >
            <strong>Message sent successfully!</strong>
            <p>
              Thank you for reaching out. I'll get back to you
              as soon as possible.
            </p>
          </div>

          <div
            v-if="errorMessage"
            class="form-feedback error"
            role="alert"
          >
            {{ errorMessage }}
          </div>

          <!-- Formspree Form -->
          <form
            class="contact-form"
            action="https://formspree.io/f/mzeepndj"
            method="POST"
            @submit.prevent="submitForm"
          >
            <div class="form-row">
              <div class="form-group">
                <label for="name">Your Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder=""
                  autocomplete="name"
                  required
                  :disabled="isSubmitting"
                />
              </div>

              <div class="form-group">
                <label for="email">Your Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=""
                  autocomplete="email"
                  required
                  :disabled="isSubmitting"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder=""
                required
                :disabled="isSubmitting"
              />
            </div>

            <div class="form-group">
              <label for="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder=""
                required
                :disabled="isSubmitting"
              ></textarea>
            </div>

            <button
              type="submit"
              class="send-button"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}

              <span v-if="!isSubmitting">↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <section class="contact-cta">
      <div class="contact-container">
       
        <h2>
          Let's make it<br />
          <span>happen.</span>
        </h2>

      </div>
    </section>
  </div>
</template>
