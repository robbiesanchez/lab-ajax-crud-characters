import axios from 'axios';

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister (name, occupation, value, cartoon) {
    return axios.post(`${this.BASE_URL}/characters`, {name, occupation, value, cartoon})
  }

  updateOneRegister (id, name, occupation, weapon, cartoon ) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`, { id, name, occupation, weapon, cartoon })
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}
