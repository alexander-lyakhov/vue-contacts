import axios from './config.js'

function getContactList() {
  return axios.get('/contacts');
}

function getContactById(id) {
  return axios.get(`/contacts/${id}`);
}

function createContact(data) {
  return axios.post(`/contacts`, data)
}

function updateContact(data) {
  return axios.patch(`/contacts/${data.id}`, data)
}

function removeContact(id) {
  return axios.delete(`/contacts/${id}`);
}

export default {
  getContactList,
  getContactById,
  createContact,
  updateContact,
  removeContact
};
