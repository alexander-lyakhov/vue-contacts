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

import api from '@/api';
import contactForm from '@/components/contact-form';
import {mapState} from 'vuex';

export default {
  name: 'edit',

  components: {
    contactForm
  },

  data() {
    return {
      contactInfo: {}
    }
  },

  created() {
    api.getContactById(this.$route.params.id).then(res => {
      this.contactInfo = res.data;
    }).catch(err => {
      console.log('-- ERROR --');
    })
  },

  computed: {
    ...mapState(['contacts'])
  },

  methods: {
    updateContact(data) {
      this.$store.dispatch('UPDATE_CONTACT', data)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
