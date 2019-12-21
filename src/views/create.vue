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
import { sweetAlert, ERROR_MESSAGE } from '@/defs/swal';

export default {
  name: 'create',

  components: {
    contactForm,
  },

  methods: {
    createContact(data) {
      this.$store.dispatch('CREATE_CONTACT', data).then(
        res => {
          this.$router.push({ name: 'home' });
        },
        err => {
          sweetAlert(ERROR_MESSAGE, err);
        },
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
