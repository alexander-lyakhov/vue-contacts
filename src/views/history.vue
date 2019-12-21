<template>
  <div class="about">
    <h2>Call History</h2>

    <div class="section">
      <h3>{{contactFullName}}</h3>
    </div>

    <div class="section days-ago" v-for="(days, index) in history" :index="index">
      <h4 v-if="days.daysago === 0">Today</h4>
      <h4 v-else>{{days.daysago}} day(s) ago</h4>
      <ul class="times">
        <li class="times-item" v-for="(time, index) in days.times" :key="index">{{time}}</li>
      </ul>
    </div>
    <div class="buttons">
      <router-link to="/" class="back-to-home">Back to Home</router-link>
    </div>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';
import api from '@/api';
import { sweetAlert, ERROR_MESSAGE } from '@/defs/swal';

export default {
  name: 'history',

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

  mounted() {
    document.documentElement.scrollTop
      ? document.documentElement.scrollTop = 0 // Chrome
      : document.body.scrollTop = 0; // Edge
  },

  computed: {
    contactFullName() {
      const { firstName, secondName, lastName } = this.contactInfo || {};
      return [lastName, firstName, secondName].join(' ');
    },

    history() {
      return (this.contactInfo || {}).history;
    },
  },

};
</script>

<style lang="scss" scoped>

h3 {
  padding: 0;
}

h4 {
  font-size: 1.25rem;
  font-weight: 200;
  color: $color-accent-2;
  letter-spacing: 1px;
  padding: 0 0 .25rem 0;
}

.section {
  @include drop-shadow;
  border: 2px solid $md-blue-grey-500;
}

.times {
  font: 1rem "lucida console";
  line-height: 1.5rem;
  padding: .25rem 0;

  &-item {
    border-radius: .25rem;
    padding: 0 .25rem;

    &:nth-child(2n-1) {
      background: $md-blue-grey-800;
    }

  }
}
</style>
