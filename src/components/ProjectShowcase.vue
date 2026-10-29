
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  { project: 'Team Alpha', caption: 'Three.js Visualisation', src: '/images/team-alpha-threejs.png' },
  { project: 'KIDDO', caption: 'Products Page', src: '/images/kiddo-products.png' },
  { project: 'CleanSpaces', caption: 'Pricing Page', src: '/images/cleanspaces-pricing.png' },

  { project: 'Luxury Rentals', caption: 'Property Listings', src: '/images/luxury-rentals.png' },
  { project: 'CleanSpaces', caption: 'About Page', src: '/images/cleanspaces-about.png' },

  { project: 'ModernTech Solutions', caption: 'Website Preview', src: '/images/moderntech-preview.png' },
  { project: 'CleanSpaces', caption: 'Login Page', src: '/images/cleanspaces-login.png' },
  { project: 'ModernTech Solutions', caption: 'HR Dashboard', src: '/images/moderntech-dashboard.png' },
  { project: 'CleanSpaces', caption: 'Pricing Page', src: '/images/cleanspaces-pricing.png' },
  { project: 'ModernTech Solutions', caption: 'Time Off Page', src: '/images/moderntech-time-off.png' },

  { project: 'FitWell Coach', caption: 'Website Preview', src: '/images/fitwell-preview.png' },
  { project: 'CleanSpaces', caption: 'Home Page', src: '/images/cleanspaces-home.png' },
  { project: 'FitWell Coach', caption: 'Products Page', src: '/images/fitwell-products.png' },
  { project: 'ModernTech Solutions', caption: 'Login Page', src: '/images/moderntech-login.png' },
  { project: 'FitWell Coach', caption: 'About Us Page', src: '/images/fitwell-about.png' },

  { project: 'Team Alpha', caption: 'Website Preview', src: '/images/team-alpha-preview.png' },
  { project: 'KIDDO', caption: 'Website Preview', src: '/images/kiddo-preview.png' },
  { project: 'Team Alpha', caption: 'Dashboard', src: '/images/team-alpha-dashboard.png' },

  { project: 'CleanSpaces', caption: 'Website Preview', src: '/images/cleanspaces-preview.png' },
  { project: 'FitWell Coach', caption: 'Dashboard', src: '/images/fitwell-dashboard.png' },
  { project: 'CleanSpaces', caption: 'Reviews Page', src: '/images/cleanspaces-reviews.png' },
]

const currentIndex = ref(0)
let timer

const currentSlide = () => slides[currentIndex.value]

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

function previousSlide() {
  currentIndex.value =
    (currentIndex.value - 1 + slides.length) % slides.length
}

function goToSlide(index) {
  currentIndex.value = index
}

onMounted(() => {
  timer = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <section class="showcase-section">
    <div class="showcase-heading">
      <h2>Explore My <span>Work.</span></h2>
      <p>
        A closer look at the projects I've built, the pages I've designed,
        and the digital experiences I've helped create.
      </p>
    </div>

    <div class="showcase-card">
      <div class="showcase-top">
        <div>
          <span class="showcase-label">FEATURED PROJECT</span>
          <h3>{{ currentSlide().project }}</h3>
          <p>{{ currentSlide().caption }}</p>
        </div>

        <span class="showcase-count">
          {{ String(currentIndex + 1).padStart(2, '0') }}
          /
          {{ String(slides.length).padStart(2, '0') }}
        </span>
      </div>

      <div class="showcase-frame">
        <img
          :key="currentSlide().src"
          :src="currentSlide().src"
          :alt="`${currentSlide().project} - ${currentSlide().caption}`"
          class="showcase-image"
        />

        <button
          type="button"
          class="showcase-arrow previous"
          aria-label="Previous screenshot"
          @click="previousSlide"
        >
          &#8592;
        </button>

        <button
          type="button"
          class="showcase-arrow next"
          aria-label="Next screenshot"
          @click="nextSlide"
        >
          &#8594;
        </button>
      </div>

      <div class="showcase-bottom">
        <span>{{ currentSlide().project }}</span>

        <div class="showcase-dots">
          <button
            v-for="(slide, index) in slides"
            :key="slide.src"
            type="button"
            class="showcase-dot"
            :class="{ active: currentIndex === index }"
            :aria-label="`Go to ${slide.project}: ${slide.caption}`"
            :aria-current="currentIndex === index ? 'true' : undefined"
            @click="goToSlide(index)"
          />
        </div>

        <span>{{ currentIndex + 1 }} of {{ slides.length }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.showcase-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 90px 24px;
  color: #f5f3ff;
}

.showcase-heading {
  max-width: 650px;
  margin: 0 auto 45px;
  text-align: center;
}

.showcase-heading h2 {
  margin: 14px 0;
  font-size: clamp(2rem, 5vw, 3.2rem);
}

.showcase-heading h2 span {
  color: #a78bfa;
}

.showcase-heading p,
.showcase-top p {
  color: #aaa5bd;
  line-height: 1.7;
}

.showcase-card {
  padding: 24px;
  border: 1px solid rgba(167, 139, 250, 0.25);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.025);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.2);
}

.showcase-top,
.showcase-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.showcase-top {
  margin-bottom: 20px;
}

.showcase-label,
.showcase-count {
  color: #b49aff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.showcase-top h3 {
  margin: 8px 0 3px;
  font-size: clamp(1.3rem, 3vw, 2rem);
}

.showcase-top p {
  margin: 0;
}

.showcase-frame {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 14px;
  background: #100d1c;
}

.showcase-image {
  display: block;
  width: 100%;
  max-height: 650px;
  object-fit: contain;
  animation: fadeIn 0.3s ease;
}

.showcase-arrow {
  position: absolute;
  top: 50%;
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  transform: translateY(-50%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  background: rgba(25, 18, 42, 0.88);
  font-size: 1.4rem;
  cursor: pointer;
  transition: background 0.2s;
}

.showcase-arrow:hover {
  background: #7c3aed;
}

.showcase-arrow.previous {
  left: 16px;
}

.showcase-arrow.next {
  right: 16px;
}

.showcase-bottom {
  flex-wrap: wrap;
  padding-top: 20px;
  color: #bcb4ce;
  font-size: 0.85rem;
}

.showcase-dots {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px;
  max-width: 65%;
}

.showcase-dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border: 0;
  border-radius: 20px;
  background: #514765;
  cursor: pointer;
  transition: width 0.2s, background 0.2s;
}

.showcase-dot.active {
  width: 22px;
  background: #a78bfa;
}

@keyframes fadeIn {
  from { opacity: 0.4; }
  to { opacity: 1; }
}

@media (max-width: 600px) {
  .showcase-section {
    padding: 60px 16px;
  }

  .showcase-card {
    padding: 14px;
  }

  .showcase-frame {
    min-height: 180px;
  }

  .showcase-arrow {
    width: 36px;
    height: 36px;
  }

  .showcase-arrow.previous {
    left: 8px;
  }

  .showcase-arrow.next {
    right: 8px;
  }

  .showcase-bottom {
    justify-content: center;
  }

  .showcase-dots {
    order: 3;
    max-width: 100%;
    width: 100%;
  }
}
</style>
