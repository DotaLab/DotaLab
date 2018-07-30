import axios from 'axios'

const service = axios.create({
    baseURL: '"https://api.opendota.com/api/"', // api的base_url
    timeout: 5000 // request timeout
  })

  export default service
  