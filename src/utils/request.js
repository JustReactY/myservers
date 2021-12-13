const axios = require('axios')

const local = 'http://127.0.0.1:3000'

const API = {
    get(path) {
        return axios.get(this.buildPath(path))
    },
    post(path, params) {
        return axios.post(this.buildPath(path), params)
    },
    buildPath(path) {
        return `${local}${path}`
    }
}

module.exports = API
