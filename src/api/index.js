import axios from 'axios'
const baseURL = 'https://attendance-serviceku.herokuapp.com'

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