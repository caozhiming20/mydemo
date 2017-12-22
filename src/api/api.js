import axios from 'axios'
const base_url=process.env.BASE_API;
axios.defaults.baseURL = base_url;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export const getLogin=param=>{return axios.post('/getLogin',param)};
