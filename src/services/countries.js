import axios from 'axios'
const baseUrl = import.meta.env.VITE_COUNTRIES_API_URL

const getAll = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)
}

const getCountrieByName = (name) => {
    const request = axios.get(`${baseUrl}/name/${name}`)
    return request.then(response => response.data)
}

export default {
    getAll,
    getCountrieByName
}