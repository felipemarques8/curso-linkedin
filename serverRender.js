// fetch the data from the api
import config from './config'
import axios from 'axios'

axios.get(`${config.serverUrl}/api/products`)
    .then(resp =>{
        console.log('====================================')
        console.log(resp.data)
        console.log('====================================')
    })