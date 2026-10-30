<script setup>
import ProjectShowcase from '../components/ProjectShowcase.vue'
</script>

<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          
          

          <p class="hero-intro">HELLO, I'M</p>

          <h1>
            SIBONGILE
            <span>WENDY</span>
            MPETA
          </h1>

          <p class="hero-description">
              I'm a creative web developer passionate about building responsive,
              user-friendly applications and turning ideas into meaningful digital
              experiences.
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
          <strong>100%</strong>
          <p>Dedication</p>
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
  CleanSpaces is a community-powered platform that helps Cape Flats
  neighbourhoods organise and fund professional street-cleaning
  services. It features subscriptions, online payments, cleanup
  tracking, photo proof, and resident and admin dashboards.
</p>
            <div class="project-tags">
              <span>Vite</span>
              <span>Vue Router</span>
              <span>Leaflet.js</span>
              <span>Node.js</span>
              <span>Backend</span>
              <span>SweetAlert2 </span>
              <span>JWT Authentication</span>
              <span>JavaScript</span>

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
  ModernTech Solutions is a full-stack HR management system designed
  to simplify workplace operations. It includes employee management,
  payroll processing, leave requests, attendance tracking, and
  performance reviews through a centralised dashboard.
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

    <ProjectShowcase />

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
