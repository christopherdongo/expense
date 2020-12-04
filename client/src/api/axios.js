
import axios from 'axios'

const backend='https://server-tracket.herokuapp.com/'

//crear el cliente axios
const clienteAxios = axios.create({
    
    baseURL: backend || 'http://localhost:5000'
})

export default clienteAxios