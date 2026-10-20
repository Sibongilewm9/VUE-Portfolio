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
              View My Projects
              <span>↗</span>
            </RouterLink>

            <RouterLink to="/contact" class="secondary-button">
              Contact me
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
          <strong>10<span>+</span></strong>
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
            <span class="project-type"> Community Cleanup & Subscription Platform </span>

            <h3>CleanSpaces</h3>

            <p>
              CleanSpaces is a community-powered cleanup subscription platform designed to help neighbourhoods across the Cape Flats fund professional street-cleaning services. The platform allows residents to contribute toward zone-based cleanup subscriptions, track community participation, and view photographic proof of completed work. It features secure role-based authentication, online payment integration, cleanup requests, resident dashboards, and an administrative management panel. Built with Vue 3, Node.js, Express, and MySQL, CleanSpaces combines transparent payment tracking with practical tools to support cleaner, better-maintained communities.
            </p>

            <div class="project-tags">
              <span>Frontend
Vue 3 · Vite · Vue Router · Leaflet.js</span>
              <span>Backend
Node.js · Express</span>
              <span>Other
JavaScript · SweetAlert2 · JWT Authentication · Railway · Render</span>

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
            <span class="project-type"> FULL-STACK HR MANAGEMENT SYSTEM </span>

            <h3>ModernTech Solutions</h3>

            <p>
              ModernTech Solutions is a full-stack Human Resources Management System developed to simplify HR processes for a healthcare software company. The platform includes secure login, an employee management system, payroll processing, leave requests, attendance tracking, performance reviews, and a dashboard displaying key HR statistics. Built with a Node.js and Express backend, MySQL database, and a responsive frontend, the system streamlines HR operations by replacing fragmented spreadsheets and emails with a centralised digital solution.
            
            </p>

            <div class="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Vue3</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MySQL</span>
              <span>Bootsrap</span>
            </div>

            <RouterLink to="/projects" class="project-link">
              Explore project
              <span>↗</span>
            </RouterLink>
          </div>
        </article>
      </div>
    </section>

    <section class="home-cta">
      <div class="cta-glow"></div>

      <span class="section-label"> HAVE AN IDEA? </span>

      <h2>
        LET'S BUILD
        <span>TOGETHER</span>
      </h2>

      <p>
        I'm always interested in creating something meaningful, useful and
        visually exciting.
      </p>

      <RouterLink to="/contact" class="primary-button cta-button">
        Let's talk
        <span>↗</span>
      </RouterLink>
    </section>
  </div>
</template>
