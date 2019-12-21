<template>
  <div class="edit-contact">
    <h2>Edit contact</h2>
    <section class="section">
      <contact-form
        :params="contactInfo"
        @submit="updateContact"
      />
    </section>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';
import api from '@/api';
import contactForm from '@/components/contact-form';
import { sweetAlert, ERROR_MESSAGE } from '@/defs/swal';

export default {
  name: 'edit',

  components: {
    contactForm,
  },

  data() {
    return {
      contactInfo: null,
    };
  },

  created() {
    this.contactInfo = this.$store.getters.getContactById(this.$route.params.id);

    !this.contactInfo
      && api.getContactById(this.$route.params.id).then(
        res => {
          this.contactInfo = res.data;
        },
        err => {
          sweetAlert(ERROR_MESSAGE, err);
        },
      );
  },

  computed: {
    ...mapState(['contacts']),
    ...mapGetters(['getContactById']),
  },

  methods: {
    updateContact(data) {
      this.$store.dispatch('UPDATE_CONTACT', data).then(
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
