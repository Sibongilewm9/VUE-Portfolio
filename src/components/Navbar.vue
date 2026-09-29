<template>
  <header class="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <RouterLink to="/" class="logo">
        <span>SM</span>
      </RouterLink>

      <!-- Navigation -->
      <nav class="nav-links" :class="{ show: menuOpen }">
        <RouterLink to="/" @click="closeMenu"> Home </RouterLink>

        <RouterLink to="/about" @click="closeMenu"> About </RouterLink>

        <RouterLink to="/projects" @click="closeMenu"> Projects </RouterLink>

        <RouterLink to="/skills" @click="closeMenu"> Skills </RouterLink>

        <RouterLink to="/experience" @click="closeMenu">
          Experience
        </RouterLink>

        <RouterLink to="/contact" @click="closeMenu"> Contact </RouterLink>

        <RouterLink to="/contact" class="nav-button" @click="closeMenu">
          Let's Talk
        </RouterLink>
      </nav>

      <!-- Mobile Menu -->
      <button
        class="menu-toggle"
        @click="toggleMenu"
        aria-label="Toggle navigation"
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
