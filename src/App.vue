<template>
  <div id="app">
    <site-header />
    <main class="main">
      <div class="main-content">
        <router-view>
        </router-view>
      </div>
    </main>
  </div>
</template>

<script>
import siteHeader from '@/components/site-header';

export default {
  name: 'App',

  components: {
    siteHeader
  }
}
</script>

<style lang="scss" scoped>
.main {
  background: $bg-main;
  max-width: $page-width;
  min-width: $min-width;
  min-height: 100vh;
  margin: 0 auto 0 auto;
  padding: 64px 0 0;

  &-content {
    padding: 1rem 1rem;
  }
}
</style>
