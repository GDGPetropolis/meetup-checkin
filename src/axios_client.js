import axios from 'axios'
import backend from './backend'

export default axios.create({
    baseURL: backend,
    timeout: 30000,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});