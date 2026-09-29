<template>
  <div class="projects-page">
    <!-- =========================
         PAGE HERO
    ========================== -->
    <section class="projects-hero">
      <div class="projects-container">
        <span class="section-label"> MY WORK </span>

        <h1>
          Projects I've
          <span>Built.</span>
        </h1>

        <p>
          A collection of projects where I've turned ideas, problems and
          concepts into functional digital experiences.
        </p>
      </div>
    </section>

    <!-- =========================
         PROJECTS
    ========================== -->
    <section class="projects-section">
      <div class="projects-grid">
        <!-- PROJECT 01 -->
        <article class="portfolio-project featured-project">
          <div class="project-visual">
            <div class="visual-number">01</div>

            <div class="visual-content">
              <span>PROJECT PREVIEW</span>
              <strong>01</strong>
            </div>
          </div>

          <div class="portfolio-project-content">
            <div class="project-meta">
              <span>FULL-STACK APPLICATION</span>
              <span>2026</span>
            </div>

            <h2>Project One</h2>

            <p>
              Replace this description with information about your first
              project. Explain what you built, the problem it solves and what
              makes it unique.
            </p>

            <div class="technology-list">
              <span>Vue</span>
              <span>Node.js</span>
              <span>MySQL</span>
            </div>

            <div class="project-actions">
              <a href="#" @click.prevent> GitHub ↗ </a>

              <a href="#" @click.prevent> Live Demo ↗ </a>
            </div>
          </div>
        </article>

        <!-- PROJECT 02 -->
        <article class="portfolio-project">
          <div class="project-visual">
            <div class="visual-number">02</div>

            <div class="visual-content">
              <span>PROJECT PREVIEW</span>
              <strong>02</strong>
            </div>
          </div>

          <div class="portfolio-project-content">
            <div class="project-meta">
              <span>WEB APPLICATION</span>
              <span>2026</span>
            </div>

            <h2>Project Two</h2>

            <p>
              Replace this with the description of your second project and
              explain the technologies and ideas behind it.
            </p>

            <div class="technology-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div class="project-actions">
              <a href="#" @click.prevent> GitHub ↗ </a>

              <a href="#" @click.prevent> Live Demo ↗ </a>
            </div>
          </div>
        </article>

        <!-- PROJECT 03 -->
        <article class="portfolio-project">
          <div class="project-visual">
            <div class="visual-number">03</div>

            <div class="visual-content">
              <span>PROJECT PREVIEW</span>
              <strong>03</strong>
            </div>
          </div>

          <div class="portfolio-project-content">
            <div class="project-meta">
              <span>SOFTWARE PROJECT</span>
              <span>2026</span>
            </div>

            <h2>Project Three</h2>

            <p>
              Replace this text with the details of your third project,
              including its purpose and the experience you gained from building
              it.
            </p>

            <div class="technology-list">
              <span>Vue</span>
              <span>JavaScript</span>
              <span>API</span>
            </div>

            <div class="project-actions">
              <a href="#" @click.prevent> GitHub ↗ </a>

              <a href="#" @click.prevent> Live Demo ↗ </a>
            </div>
          </div>
        </article>

        <!-- PROJECT 04 -->
        <article class="portfolio-project">
          <div class="project-visual">
            <div class="visual-number">04</div>

            <div class="visual-content">
              <span>PROJECT PREVIEW</span>
              <strong>04</strong>
            </div>
          </div>

          <div class="portfolio-project-content">
            <div class="project-meta">
              <span>WEB DEVELOPMENT</span>
              <span>2026</span>
            </div>

            <h2>Project Four</h2>

            <p>
              Replace this with the details of your fourth project. You can
              include the technologies, features and challenges involved.
            </p>

            <div class="technology-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div class="project-actions">
              <a href="#" @click.prevent> GitHub ↗ </a>

              <a href="#" @click.prevent> Live Demo ↗ </a>
            </div>
          </div>
        </article>

        <!-- PROJECT 05 -->
        <article class="portfolio-project">
          <div class="project-visual">
            <div class="visual-number">05</div>

            <div class="visual-content">
              <span>PROJECT PREVIEW</span>
              <strong>05</strong>
            </div>
          </div>

          <div class="portfolio-project-content">
            <div class="project-meta">
              <span>PERSONAL PROJECT</span>
              <span>2026</span>
            </div>

            <h2>Project Five</h2>

            <p>
              Replace this with the details of your fifth project and highlight
              what you learned or achieved while building it.
            </p>

            <div class="technology-list">
              <span>Vue</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div class="project-actions">
              <a href="#" @click.prevent> GitHub ↗ </a>

              <a href="#" @click.prevent> Live Demo ↗ </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- =========================
         CTA
    ========================== -->
    <section class="projects-cta">
      <span class="section-label"> NEXT PROJECT? </span>

      <h2>
        Maybe we build it
        <span>together.</span>
      </h2>

      <p>
        Have an idea, opportunity or interesting problem? I'd love to hear about
        it.
      </p>

      <RouterLink to="/contact" class="primary-button">
        Let's Talk
        <span>↗</span>
      </RouterLink>
    </section>
  </div>
</template>
