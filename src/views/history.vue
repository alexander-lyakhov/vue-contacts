<template>
  <div class="about">
    <h2>History</h2>

    <div class="section">
      <h3>{{contactFullName}}</h3>
    </div>

    <div class="section days-ago" v-for="(days, index) in history" :index="index">
      <h4 v-if="days.daysago === 0">Today</h4>
      <h4 v-else>{{days.daysago}} days ago</h4>
      <ul>
        <li class="" v-for="(time, index) in days.times" :key="index">{{time}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

import api from '@/api';
import {mapState, mapGetters} from 'vuex';

export default {
  name: 'history',

  data() {
    return {
      contactInfo: null
    }
  },

  created() {
    this.contactInfo = this.$store.getters.getContactById(this.$route.params.id);

    !this.contactInfo &&
      api.getContactById(this.$route.params.id).then(
        res => {
          this.contactInfo = res.data;
        },
        err => {
          console.log('-- ERROR --');
        }
      )
  },

  computed: {
    contactFullName() {
      const {firstName, secondName, lastName} = this.contactInfo;
      return [lastName, firstName, secondName].join(' ');
    },

    history() {
      return this.contactInfo.history;
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
