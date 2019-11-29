<template>
  <div class="create-contact">
    <h2>Create new contact</h2>
    <section class="section">
      <contact-form @submit="createContact"></contact-form>
    </section>
  </div>
</template>

<script>

import contactForm from '@/components/contact-form';

export default {
  name: 'create',

  components: {
    contactForm
  },

  methods: {
    createContact(data) {
      console.log('createContact');
      this.$store.dispatch('CREATE_CONTACT', data);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
