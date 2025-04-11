<template>
  <div>
    <PageHeader /> <!-- Шапка -->
    <CookieBanner /> <!-- Баннер с cookies -->
    <main>
      <NuxtPage /> <!-- Здесь рендерится содержимое текущей страницы -->
    </main>
    <AppFooter /> <!-- Футер -->
  </div>
</template>

<script>
import PageHeader from "~/components/Header.vue"; // компонент шапки
import AppFooter from "~/components/Footer.vue"; // компонент футера
import CookieBanner from "~/components/CookieBanner.vue" // компонент баннера

export default {
  components: {
    PageHeader,
    AppFooter,
    CookieBanner,
  },
};
</script>
