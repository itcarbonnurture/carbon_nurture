<template>
  <transition name="slide-up">
    <div v-if="showBanner" class="cookie-banner">
      <p class="mb-2">
        We use cookies to improve your experience on our site, analyze traffic, and personalize content. Some cookies are necessary for the proper functioning of the site. You can accept all cookies or manage your preferences. For more information, please read our <a class="privacy-class fw-bold" href="/privacy_policy.pdf">Privacy Policy</a>.
      </p>
      <button class="btn btn-light fw-bold px-4 py-2 rounded-pill" @click="acceptCookies">
        Accept All
      </button>
      <button class="btn btn-light fw-bold px-4 py-2 rounded-pill" @click="acceptNecessaryCookies">
        Accept Necessary
      </button>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showBanner = ref(false);

onMounted(() => {
  if (!localStorage.getItem('cookiesAccepted')) {
    showBanner.value = true;
  }
});

const acceptCookies = () => {
  localStorage.setItem('cookiesAccepted', 'all');
  showBanner.value = false;
  // Логика для принятия всех cookies
};

const acceptNecessaryCookies = () => {
  localStorage.setItem('cookiesAccepted', 'necessary');
  showBanner.value = false;
  // Логика для принятия только необходимых cookies
};
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #107a1d;
  color: white;
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-align: center;
  max-width: 90%;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.privacy-class {
  color: white;
  text-decoration: underline;
}


</style>
