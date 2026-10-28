
<template>
  <header class="navbar">
    <div class="nav-container">
      <RouterLink to="/" class="logo">
        <span>SM</span>
      </RouterLink>

      <nav class="nav-links" :class="{ show: menuOpen }">
        <RouterLink to="/" @click="closeMenu">
          Home
        </RouterLink>

        <RouterLink to="/about" @click="closeMenu">
          About
        </RouterLink>

        <RouterLink to="/projects" @click="closeMenu">
          Projects
        </RouterLink>

        <RouterLink to="/skills" @click="closeMenu">
          Skills
        </RouterLink>

        <RouterLink to="/experience" @click="closeMenu">
          Experience
        </RouterLink>

        <RouterLink to="/contact" @click="closeMenu">
          Contact
        </RouterLink>

        <!-- View CV Button -->
        <a
          href="/Sibongile-Mpeta-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-button"
          @click="closeMenu"
        >
          View CV <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <button
        class="menu-toggle"
        @click="toggleMenu"
        aria-label="Toggle navigation"
        :aria-expanded="menuOpen"
      >
        ☰
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>
