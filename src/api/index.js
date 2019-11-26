import axios from './config.js'

function getContactList() {
  return axios.get('/contacts');
}

function getContactById(id) {
  return axios.get(`/contacts/${id}`);
}

export default {
  getContactList,
  getContactById
};
