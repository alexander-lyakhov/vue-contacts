<template>
  <div id="app">
    <site-header />
    <main class="main">
      <div class="main-content">
        <router-view>
        </router-view>
      </div>
    </main>
    <div class="modal" v-if="isLoading">
      <div class="modal__overlay"></div>
      <div class="modal__message">Loading...</div>
    </div>
  </div>
</template>

<script>
import siteHeader from '@/components/site-header';
import { flags } from '@/defs/flags';

export default {
  name: 'App',

  components: {
    siteHeader
  },

  computed: {
    isLoading() {
      return flags.isLoading
    }
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

.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

  &__overlay {
    background: #000;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }

  &__message {
    @include drop-shadow;

    font-size: 1rem;
    color: #fff;
    background: #000;
    border: 2px solid $color-accent;
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: .75rem 2rem;
  }
}
</style>
