import Vue from 'vue';
import Vuex from 'vuex';

import api from '@/api';
// import contacts from '@/store/db.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [],
  },

  getters: {
    getContactById(state) {
      return function (id) {
        return state.contacts.find(item => item.id === id);
      };
    },

    getContactFullName(state, getters) {
      return function (id) {
        const { firstName, secondName, lastName } = getters.getContactById(id);
        return [lastName, firstName, secondName].join(' ');
      };
    },
  },

  mutations: {
    POPULATE_CONTACTS(state, data) {
      if (!state.contacts.length) {
        state.contacts = data;
      }
    },

    CREATE_CONTACT(state, data) {
      state.contacts.unshift(data);
    },

    UPDATE_CONTACT(state, data) {
      state.contacts = state.contacts.map(item => (item.id === data.id ? data : item));
    },

    REMOVE_CONTACT(state, id) {
      state.contacts = state.contacts.filter(item => item.id !== id);
    },
  },

  actions: {
    GET_CONTACT_LIST({ commit }) {
      return api.getContactList().then(res => commit('POPULATE_CONTACTS', res.data));
    },

    CREATE_CONTACT({ commit }, data) {
      data.history = [];

      return api.createContact(data).then(res => commit('CREATE_CONTACT', res.data));
    },

    UPDATE_CONTACT({ commit }, data) {
      return api.updateContact(data).then(res => commit('UPDATE_CONTACT', res.data));
    },

    REMOVE_CONTACT({ commit }, id) {
      return api.removeContact(id).then(res => commit('REMOVE_CONTACT', id));
    },
  },
});
