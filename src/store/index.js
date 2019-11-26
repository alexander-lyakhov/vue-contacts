import Vue from 'vue'
import Vuex from 'vuex'

import api from '@/api';
import contacts from '@/store/db.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: []
  },

  mutations: {
    POPULATE_CONTACTS(state, data) {
      state.contacts = data;
    }
  },

  actions: {
    GET_CONTACT_LIST({commit}) {
      api.getContactList().then(
        res => {
          commit('POPULATE_CONTACTS', res.data);
        },
        err => {
          console.log('-- ERROR --', err);
        }
      );
      /*
      console.log(contacts)
      commit('POPULATE_CONTACTS', contacts.contacts);
      */
    }
  },
})
