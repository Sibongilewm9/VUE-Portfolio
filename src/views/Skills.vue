
<template>
  <div class="skills-page">
    <!-- Hero -->
    <section class="skills-hero">
      <div class="skills-container">
        <span class="section-label">MY TOOLKIT</span>

        <h1>
          Tools I use to<br />
          <span>bring ideas to life</span>
        </h1>

        <p>
          A growing collection of technologies and tools I use to design, build
          and improve digital experiences.
        </p>
      </div>
    </section>

    <!-- Skills -->
    <section class="skills-section">
      <div class="skills-container">
        <div class="skills-grid">
          <!-- Frontend -->
          <article class="skill-card">
            <div class="skill-card-top">
              <div class="skill-icon">&lt;/&gt;</div>
            </div>

            <h2>Frontend</h2>

            <p>
              Creating responsive, modern and interactive interfaces that feel
              great to use.
            </p>

            <div class="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Vue.js</span>
            </div>
          </article>

          <!-- Backend -->
          <article class="skill-card">
            <div class="skill-card-top">
              <div class="skill-icon">{ }</div>
            </div>

            <h2>Backend</h2>

            <p>
              Building server-side applications, APIs and functionality that
              power digital products.
            </p>

            <div class="skill-tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>REST APIs</span>
            </div>
          </article>

          <!-- Database -->
          <article class="skill-card">
            <div class="skill-card-top">
              <div class="skill-icon">DB</div>
            </div>

            <h2>Database</h2>

            <p>
              Working with structured data and designing databases that support
              reliable applications.
            </p>

            <div class="skill-tags">
              <span>MySQL</span>
              <span>SQL</span>
              <span>Database Design</span>
            </div>
          </article>

          <!-- Tools -->
          <article class="skill-card">
            <div class="skill-card-top">
              <div class="skill-icon">⚡</div>
            </div>

            <h2>Tools</h2>

            <p>
              Using modern development tools to collaborate, manage code and
              bring projects together.
            </p>

            <div class="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Vite</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Skills Beyond Code -->
    <section class="skills-beyond-section">
      <div class="skills-container">
        <div class="skills-beyond-card">
          <div class="skills-beyond-content">
            <span class="skills-section-tag">BEYOND THE CODE</span>

            <h2>
              Skills beyond
              <span>the code</span>
            </h2>

            <p>
              My experiences have helped me develop the communication,
              leadership and problem-solving skills that complement my technical
              abilities.
            </p>
          </div>

          <div class="skills-beyond-list">
            <span>Digital Literacy</span>
            <span>Problem Solving</span>
            <span>Creative Thinking</span>
            <span>Communication</span>
            <span>Presentation</span>
            <span>Teamwork</span>
            <span>Leadership</span>
            <span>Time Management</span>
            <span>Adaptability</span>
            <span>Organisation</span>
            <span>Relationship Management</span>
            <span>Attention to Detail</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="certifications-section">
      <div class="skills-container">
        <div class="certifications-heading">
          <span class="section-label">CONTINUOUS LEARNING</span>

          <h2>
            Certifications <br />
            <span>&amp; Achievements.</span>
          </h2>

          <p>
            I'm committed to expanding my knowledge, developing new skills
            and staying curious about technology.
          </p>
        </div>

        <div class="certifications-grid">
          <!-- Cybersecurity Certificate -->
          <article class="certificate-card">
            <div class="certificate-card-top">
              <div class="certificate-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"
                  />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
            </div>

            <h3>Introduction to Cybersecurity</h3>

            <p class="certificate-issuer">
              Life Choices Academy
              <span>Cisco Networking Academy</span>
            </p>

            <div class="certificate-meta">
              <span class="certificate-status"></span>
              Completed 1 September 2026
            </div>

            <div class="certificate-actions">
              <a
                href="/certificates/cybersecurity.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="certificate-btn view-btn"
              >
                View Certificate <span aria-hidden="true">↗</span>
              </a>

              <a
                href="/certificates/cybersecurity.pdf"
                download="Introduction-to-Cybersecurity.pdf"
                class="certificate-btn download-btn"
              >
                Download <span aria-hidden="true">↓</span>
              </a>
            </div>
          </article>

          <!-- Data Science Certificate -->
          <article class="certificate-card">
            <div class="certificate-card-top">
              <div class="certificate-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <rect x="7" y="11" width="3" height="6" rx="0.5" />
                  <rect x="12" y="7" width="3" height="10" rx="0.5" />
                  <rect x="17" y="4" width="3" height="13" rx="0.5" />
                </svg>
              </div>
            </div>

            <h3>Introduction to Data Science</h3>

            <p class="certificate-issuer">
              Life Choices Academy
              <span>Cisco Networking Academy</span>
            </p>

            <div class="certificate-meta">
              <span class="certificate-status"></span>
              Completed 1 September 2026
            </div>

            <div class="certificate-actions">
              <a
                href="/certificates/data-science.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="certificate-btn view-btn"
              >
                View Certificate<span aria-hidden="true">↗</span>
              </a>

              <a
                href="/certificates/data-science.pdf"
                download="Introduction-to-Data-Science.pdf"
                class="certificate-btn download-btn"
              >
                Download <span aria-hidden="true">↓</span>
              </a>
            </div>
          </article>

          <!-- YouthCode Certificate -->
          <article class="certificate-card">
            <div class="certificate-card-top">
              <div class="certificate-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="m8.2 13-1 8 4.8-2.5 4.8 2.5-1-8" />
                </svg>
              </div>
            </div>

            <h3>YouthCode Project</h3>

            <p class="certificate-issuer">
              Life Choices Academy
              <span>YouthCode Software Development Project</span>
            </p>

            <div class="certificate-description">
              <p>
                Successfully completed the YouthCode Software Development
                Project, covering ICT, front-end development, database and
                back-end development, e-commerce, and personal and
                professional development.
              </p>
            </div>

            <div class="certificate-meta">
              <span class="certificate-status"></span>
              Completed 2 October 2026
            </div>

            <div class="certificate-actions">
              <a
                href="/certificates/youthcode-certificate.png"
                  target="_blank"
                 rel="noopener noreferrer"
                class="certificate-btn view-btn"
              >
                View Certificate <span aria-hidden="true">↗</span>
              </a>

              <a
                href="/certificates/youthcode-certificate.png"
                download="YouthCode-Certificate.png"
                class="certificate-btn download-btn"
              >
                Download <span aria-hidden="true">↓</span>
              </a>
            </div>
          </article>

          
<!-- Best Digital Literacy Certificate -->
<article class="certificate-card">
  <div class="certificate-card-top">
    <div class="certificate-icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="m8.2 13-1 8 4.8-2.5 4.8 2.5-1-8" />
      </svg>
    </div>
  </div>

  <h3>Best Digital Literacy</h3>

  <p class="certificate-issuer">
    Scouts South Africa
    <span>Certificate of Recognition</span>
  </p>

  <p class="certificate-description">
    Recognised for collaboration, positivity, and consistent
    support to peers.
  </p>

  <div class="certificate-meta">
    <span class="certificate-status"></span>
    Awarded November 2025
  </div>

  <div class="certificate-actions">
    <a
      href="/certificates/best-digital-literacy.png"
      target="_blank"
      rel="noopener noreferrer"
      class="certificate-btn view-btn"
    >
      View Certificate <span aria-hidden="true">↗</span>
    </a>

    <a
      href="/certificates/best-digital-literacy.png"
      download="Best-Digital-Literacy.png"
      class="certificate-btn download-btn"
    >
      Download <span aria-hidden="true">↓</span>
    </a>
  </div>
</article>

<!-- YearBeyond Certificate -->
<article class="certificate-card">
  <div class="certificate-card-top">
    <div class="certificate-icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 3 14.8 8.7 21 9.6 16.5 14l1.1 6.2L12 17.3l-5.6 2.9L7.5 14 3 9.6l6.2-.9L12 3Z" />
      </svg>
    </div>
  </div>

  <h3>YearBeyond Programme</h3>

  <p class="certificate-issuer">
    YearBeyond Programme
    <span>Certificate of Completion</span>
  </p>

  <p class="certificate-description">
    Recognised for completing a year of service as a YeBooner,
    contributing to the community, and successfully completing
    the YearBeyond Youth Development Programme in partnership
    with Scouts SA.
  </p>

  <div class="certificate-meta">
    <span class="certificate-status"></span>
    Completed 28 November 2025
  </div>

  <div class="certificate-actions">
    <a
      href="/certificates/yearbeyond-completion.png"
      target="_blank"
      rel="noopener noreferrer"
      class="certificate-btn view-btn"
    >
      View Certificate <span aria-hidden="true">↗</span>
    </a>

    <a
      href="/certificates/yearbeyond-completion.png"
      download="YearBeyond-Certificate.png"
      class="certificate-btn download-btn"
    >
      Download <span aria-hidden="true">↓</span>
    </a>
  </div>
</article>

        </div>
      </div>
    </section>

    <!-- Always Learning -->
    <section class="learning-section">
      <div class="skills-container">
        <div class="learning-card">
          <div>
            <span class="section-label">ALWAYS LEARNING</span>

            <h2>
              My skills are<br />
              <span>always evolving</span>
            </h2>
          </div>

          <p>
            Technology never stops changing, and neither do I. I'm constantly
            learning new tools, improving my existing skills and exploring
            better ways to build.
          </p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="skills-cta">
      <div class="skills-container">
        <span>READY TO BUILD?</span>

        <p>
          I’m continuing to grow my technical skills and looking forward to
          creating meaningful digital solutions.
        </p>

          <div class="skills-cta-buttons">
          <RouterLink to="/contact" class="secondary-button">
            Let's Talk
            <span>↗</span>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
