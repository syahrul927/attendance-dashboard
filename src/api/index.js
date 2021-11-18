import axios from 'axios'
// const baseURL = 'https://attendance-serviceku.herokuapp.com'
// const baseURL = 'http://localhost:3000'
const baseURL = '//159.223.56.146:3000'

// const token = 

const doRequest = async ({method, url, auth, contentType}, body = {}) => {
    const token = await localStorage.getItem('token')
    const headers = {'Authorization': auth && `Bearer ${token}`}
    url = `${baseURL}${url}`
    return await axios({
        method,
        url,
        headers,
        data: body
    })
}
export default doRequest