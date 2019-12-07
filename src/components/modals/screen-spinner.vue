<template>
  <div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__message">Loading...</div>
  </div>
</template>

<style lang="scss" scoped>
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
    opacity: 0.75;
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
