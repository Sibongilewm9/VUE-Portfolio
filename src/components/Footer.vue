<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Brand -->
      <div class="footer-brand">
        <RouterLink to="/" class="footer-logo"> SM </RouterLink>

        <p>Sibongile Wendy Mpeta</p>
      </div>

            <!-- Navigation -->
      <div class="footer-links">
        <h4>Navigation</h4>

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/skills">Skills</RouterLink>
        <RouterLink to="/experience">Experience</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>

      <!-- Connect -->
      <div class="footer-links">
        <h4>Connect</h4>

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

      <!-- CTA -->
      <div class="footer-cta">
        <span>HAVE A PROJECT IN MIND?</span>

        <RouterLink to="/contact"> Let's Talk <span>↗</span> </RouterLink>
      </div>
    </div>

    <!-- Bottom -->
    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} Wendy. All rights reserved.</p>

      <p>Designed & built with Vue</p>
    </div>
  </footer>
</template>
