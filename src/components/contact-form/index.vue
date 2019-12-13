<template>
  <form @submit.prevent>
    <label>First name</label>
    <div class="text-field" :class="getClassObject('firstName')">
      <input
        type="text"
        placeholder="First name"
        v-model.trim="contact.firstName"
        @blur="validate('firstName')"
      />
    </div>

    <label>Second name</label>
    <div class="text-field" :class="getClassObject('secondName')">
      <input
        type="text"
        placeholder="Second name"
        v-model.trim="contact.secondName"
        @blur="validate('secondName')"
      />
    </div>

    <label>Last name</label>
    <div class="text-field" :class="getClassObject('lastName')">
      <input
        type="text"
        placeholder="Last name"
        v-model.trim="contact.lastName"
        @blur="validate('lastName')"
      />
    </div>

    <label>Phone</label>
    <div class="text-field" :class="getClassObject('phone')">
      <masked-input
        type="text"
        mask="111-11-11"
        placeholder="Phone"
        v-model="contact.phone"
        @blur.native="validate('phone')"
      />
    </div>

    <div class="buttons">
      <button class="btn btn-primary" :class="{disabled: !isFormValid}" type="submit" @click.prevent="handleSubmit" :disabled="!isFormValid">Save</button>
      <button class="btn outlined" @click.prevent="handleReset">Reset</button>
    </div>

    <hr />

    <div class="buttons">
      <router-link to="/" class="back-to-home">Back to Home</router-link>
    </div>
  </form>
</template>

<script>

import api from '@/api';
import maskedInput from 'vue-masked-input'

import { required } from 'vuelidate/lib/validators'

export default {
  name: 'contact-form',

  components: {
    maskedInput
  },

  props: {
    params: {
      type: Object,
      default: () => ({})
    }
  },

  validations: {
    contact: {
      firstName: {
        required,
      },
      secondName: {
        required,
      },
      lastName: {
        required,
      },
      phone: {
        required,
        matchPhone: (value) => /^\d{3}-\d{2}-\d{2}$/.test(value)
      },
    }
  },

  data() {
    return {
      contact: {},
    }
  },

  created() {
    this.$watch('params', val => this.setContact(val), {immediate: true});
  },

  mounted() {
    if (Object.keys(this.params).length > 0) {
      this.$v.$touch()
    }
  },

  computed: {
    isFormValid() {
      return this.$v.$dirty && !this.$v.$error;
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
      this.$emit('submit', this.contact);
    },

    handleReset() {
      this.setContact(this.params);
    },

    validate(fieldName) {
      this.$v.contact[fieldName].$touch();
      return !this.$v.contact[fieldName].$error;
    },

    getClassObject(fieldName) {
      return {
        'has-error': this.$v.contact[fieldName].$error
      }
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

    &.is-valid {
      //border: 1px solid $color-accent;
    }

    &.has-error {
      border: 1px solid #f00;
    }

    input[type="text"] {
      font: 1.25rem $font-primary, verdana;
      color: $color-secondary;
      background: transparent;
      border: none;
      outline: none;
      width: 100%;
    }
  }
}

</style>
