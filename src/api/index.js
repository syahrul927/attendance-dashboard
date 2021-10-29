import axios from 'axios'
const baseURL = 'http://192.168.100.8:3000'

const token = localStorage.getItem('token')

const doRequest = async ({method, url, auth}, body = {}) => {
    url = `${baseURL}${url}`
    return await axios({
        method,
        url,
        headers: {'Authorization': auth && `Bearer ${token}`},
        data: {...body}
    })
}

export default doRequest