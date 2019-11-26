<template>
  <div class="create-contact">
    <h2>Create new contact</h2>
    <section class="section">
      <contact-form></contact-form>
    </section>
  </div>
</template>

<script>

import contactForm from '@/components/contact-form';

export default {
  name: 'create',

  components: {
    contactForm
  }
}
</script>

<style lang="scss" scoped>
</style>
