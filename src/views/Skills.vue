<template>
  <div class="skills-page">
    <!-- Hero -->
    <section class="skills-hero">
      <div class="skills-container">
        <span class="section-label"> MY TOOLKIT </span>

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
              <span class="skill-number">01</span>

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
              <span class="skill-number">02</span>

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
              <span class="skill-number">03</span>

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
              <span class="skill-number">04</span>

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
    <!-- SKILLS BEYOND THE CODE -->

    <section class="skills-beyond-section">
      <div class="skills-container">
        <div class="skills-beyond-card">
          <div class="skills-beyond-content">
            <span class="skills-section-tag"> BEYOND THE CODE </span>

            <h2>
              Skills beyond
              <span>the code.</span>
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

    <!-- Learning -->
    <section class="learning-section">
      <div class="skills-container">
        <div class="learning-card">
          <div>
            <span class="section-label"> ALWAYS LEARNING </span>

            <h2>
              My skills are<br />
              <span>always evolving.</span>
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

    <!-- CTA -->
    <section class="skills-cta">
      <div class="skills-container">
        <span>READY TO BUILD?</span>

        <h2>
          Let's turn an idea<br />
          into something real.
        </h2>

        <div class="skills-cta-buttons">
          <RouterLink to="/projects" class="primary-button">
            View My Work
            <span>↗</span>
          </RouterLink>

          <RouterLink to="/contact" class="secondary-button">
            Let's Talk
            <span>↗</span>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
