<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p class="hero-intro">HELLO, I'M</p>

          <h1>
            SIBONGILE
            <span>WENDY</span>
            MPETA
          </h1>

          <p class="hero-description">
            A passionate developer focused on creating modern, interactive and
            meaningful digital experiences through clean code and creative
            design.
          </p>

          <div class="hero-buttons">
            <RouterLink to="/projects" class="primary-button">
              View My Work
              <span>↗</span>
            </RouterLink>

            <RouterLink to="/contact" class="secondary-button">
              Let's Connect
            </RouterLink>
          </div>

          <!-- SOCIALS -->
          <div class="hero-socials">
            <span>Find me on</span>

            <a href="#" aria-label="GitHub"> GitHub </a>

            <a href="#" aria-label="LinkedIn"> LinkedIn </a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="orbit orbit-one"></div>
          <div class="orbit orbit-two"></div>
          <div class="orbit orbit-three"></div>

          <div class="photo-card">
            <div class="photo-glow"></div>

            <img src="https://i.ibb.co/rRdyWM4H/pp.png" alt="Wendy" />

            <div class="photo-overlay"></div>
          </div>

          <div class="floating-card card-top">
            <span class="floating-icon"> ✦ </span>

            <div>
              <small>BUILD</small>
              <strong>CREATE</strong>
            </div>
          </div>

          <div class="floating-card card-bottom">
            <span class="floating-icon"> &lt;/&gt; </span>

            <div>
              <small>STATUS</small>
              <strong>CODING</strong>
            </div>
          </div>

          <span class="decor-dot dot-one"></span>
          <span class="decor-dot dot-two"></span>
          <span class="decor-dot dot-three"></span>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="stats-container">
        <div class="stat">
          <strong>05<span>+</span></strong>
          <p>Projects</p>
        </div>

        <div class="stat">
          <strong>03<span>+</span></strong>
          <p>Technologies</p>
        </div>

        <div class="stat">
          <strong>∞</strong>
          <p>Ideas</p>
        </div>

        <div class="stat">
          <strong>01</strong>
          <p>Developer</p>
        </div>
      </div>
    </section>

    <section class="featured-section">
      <div class="section-heading">
        <div>
          <span class="section-label"> RECENT WORK </span>

          <h2>
            Things I've
            <span>Built.</span>
          </h2>
        </div>

        <RouterLink to="/projects" class="view-all">
          View all projects →
        </RouterLink>
      </div>

      <div class="project-preview-grid">
        <article class="project-preview">
          <div class="project-number"></div>

          <div class="project-content">
            <span class="project-type"> FULL-STACK WEB APP </span>

            <h3>CleanSpaces</h3>

            <p>
              A modern waste-management platform designed to connect communities
              with cleaner and more sustainable environments.
            </p>

            <div class="project-tags">
              <span>Vue</span>
              <span>Node.js</span>
              <span>MySQL</span>
            </div>

            <RouterLink to="/projects" class="project-link">
              Explore project
              <span>↗</span>
            </RouterLink>
          </div>
        </article>

        <article class="project-preview">
          <div class="project-number"></div>

          <div class="project-content">
            <span class="project-type"> WEB DEVELOPMENT </span>

            <h3>Modern Digital Experience</h3>

            <p>
              A responsive web experience focused on modern interface design,
              usability and engaging interactions.
            </p>

            <div class="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <RouterLink to="/projects" class="project-link">
              Explore project
              <span>↗</span>
            </RouterLink>
          </div>
        </article>
      </div>
    </section>

    <!-- =========================
         CTA
    ========================== -->
    <section class="home-cta">
      <div class="cta-glow"></div>

      <span class="section-label"> HAVE AN IDEA? </span>

      <h2>
        LET'S BUILD
        <span>SOMETHING GREAT.</span>
      </h2>

      <p>
        I'm always interested in creating something meaningful, useful and
        visually exciting.
      </p>

      <RouterLink to="/contact" class="primary-button cta-button">
        Start a conversation
        <span>↗</span>
      </RouterLink>
    </section>
  </div>
</template>
