import axios from './config.js'

function getContactList() {
  return axios.get('/contacts');
}

function getContactById(id) {
  return axios.get(`/contacts/${id}`);
}

function updateContact(data) {
  console.log('updateContact', data)
  return axios.patch(`/contacts/${data.id}`, {params: {...data}})
}

export default {
  getContactList,
  getContactById,
  updateContact
};
