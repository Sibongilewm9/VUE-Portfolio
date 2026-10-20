<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="about-container">
        <div class="about-heading">
          <span class="section-label">GET TO KNOW ME</span>

          <h1>
            More than just
            <span>code</span>
          </h1>

          <p>
             I’m Wendy — a developer who enjoys turning ideas into digital
  experiences that are functional, modern and genuinely enjoyable to
  use. I’m passionate about learning, solving problems and creating
  solutions that make a real difference. With a background in
  facilitation, leadership and digital literacy, I’ve developed strong
  communication, teamwork and problem-solving skills that I now bring
  into my journey as a software developer.
          </p>
        </div>
      </div>
    </section>

    <section class="about-content">
      <div class="about-grid">
        <div class="about-image">
          <div class="about-image-card">
            <img
              src="https://i.ibb.co/nMf4T3wq/Black-and-white-blazer-selfie-picture.png"
              alt="Wendy"
            />
          </div>

          <div class="about-image-decoration"></div>
        </div>

        <!-- TEXT -->
        <div class="about-text">
          <span class="section-label"> A LITTLE ABOUT ME </span>

          <h2>
            I love building things
            <span>that matter</span>
          </h2>

          <p>
            I'm passionate about technology, creativity and problem-solving. My
            journey into development has allowed me to combine logical thinking
            with my interest in creating beautiful digital experiences.
          </p>

          <p>
            Whether I'm working on a full-stack application, designing an
            interface or learning a new technology, I enjoy the process of
            taking an idea and turning it into something real.
          </p>

          <div class="about-info">
            <div class="info-item">
              <span></span>
              <div>
                <strong>Problem Solver</strong>
                <p>I enjoy finding practical solutions.</p>
              </div>
            </div>

            <div class="info-item">
              <span></span>
              <div>
                <strong>Creative Thinker</strong>
                <p>I care about both design and functionality.</p>
              </div>
            </div>

            <div class="info-item">
              <span></span>
              <div>
                <strong>Always Learning</strong>
                <p>I'm constantly improving my skills.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VALUES -->
    <section class="values-section">
      <div class="section-heading about-section-heading">
        <div>
          <span class="section-label"> WHAT DRIVES ME </span>

          <h2>
            How I
            <span>work</span>
          </h2>
        </div>
      </div>

      <div class="values-grid">
        <article class="value-card">
          <span class="value-number"></span>

          <div class="value-icon">✦</div>

          <h3>Curiosity</h3>

          <p>
            I ask questions, explore new technologies and continuously look for
            better ways to build.
          </p>
        </article>

        <article class="value-card">
          <span class="value-number"></span>

          <div class="value-icon">◇</div>

          <h3>Creativity</h3>

          <p>
            I believe good development isn't only about code. It's also about
            creating experiences people remember.
          </p>
        </article>

        <article class="value-card">
          <span class="value-number"></span>

          <div class="value-icon">↗</div>

          <h3>Growth</h3>

          <p>
            Every project is an opportunity to learn something new and become a
            better developer.
          </p>
        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="about-cta">
      <span class="section-label"> WANT TO KNOW MORE? </span>

      <h2>
        <span>VIEW MY WORK</span>
      </h2>

      <RouterLink to="/projects" class="primary-button">
        Projects
        <span>↗</span>
      </RouterLink>
    </section>
  </div>
</template>
