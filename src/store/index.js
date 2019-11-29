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
      /*
      if (!state.contacts.length) {
        state.contacts = data;
      }
      */
      //console.log('POPULATE_CONTACTS', data)
      state.contacts = data;
    },

    CREATE_CONTACT(state, data) {
      console.log('CREATE_CONTACT', data);
    },

    UPDATE_CONTACT(state, data) {
      state.contacts = state.contacts.map(item =>
        item.id === data.id ? data : item
      );
    },
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
    },

    CREATE_CONTACT({commit}, data) {
      data.history = [];
      return api.createContact(data).then(
        res => {
          commit('CREATE_CONTACT', res.data);
        },
        err => {
          console.log('-- ERROR --', err);
        }
      )
    },

    UPDATE_CONTACT({commit}, data) {
      return api.updateContact(data).then(
        res => {
          commit('UPDATE_CONTACT', res.data);
        },
        err => {
          console.log('-- ERROR --', err);
        }
      )
    }
  },
})
