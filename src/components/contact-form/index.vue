<template>
  <form @submit.prevent="handleSubmit">
    <label>First name</label>
    <div class="text-field">
      <input type="text" v-model="contact.firstName" />
    </div>

    <label>Second name</label>
    <div class="text-field">
      <input type="text" v-model="contact.secondName" />
    </div>

    <label>Last name</label>
    <div class="text-field">
      <input type="text" v-model="contact.lastName" />
    </div>

    <label>Phone</label>
    <div class="text-field">
      <input type="text" v-model="contact.phone" />
    </div>

    <div class="buttons">
      <button class="btn btn-primary" type="submit">Save</button>
      <button class="btn outlined" @click.prevent="handleReset">Reset</button>
    </div>
  </form>
</template>

<script>

import api from '@/api';

export default {
  name: 'contact-form',

  props: {
    params: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      contact: {},
    }
  },

  watch: {
    params(val) {
      this.setContact(val);
    }
  },

  methods: {
    setContact(data) {
      const {id = '', firstName = '', secondName = '', lastName = '', phone = ''} = data;

      this.contact = {
        id,
        firstName,
        secondName,
        lastName,
        phone
      };
    },

    handleSubmit() {
      this.$router.push({name: 'home'});
    },

    handleReset() {
      this.setContact(this.params);
    }
  }
}
</script>

<style lang="scss" scoped>

form {
  font: 1.25rem $font-primary, verdana;

  label {
    width: 100%;
    display: block;
    margin: .25rem 0;
    padding: 0.25rem 0;
  }

  .text-field {
    background: #000;
    border: 1px solid #808080;
    border-radius: 4px;
    width: 100%;
    margin: 0 0 0.875rem 0;
    padding: .5rem 0.5rem;

    input[type="text"] {
      font: 1.25rem $font-primary, verdana;
      color: $color-secondary;
      background: #000;
      border: none;
      outline: none;
      width: 100%;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;

    .btn {
      margin: 0 .5rem;
    }
  }
}

</style>
