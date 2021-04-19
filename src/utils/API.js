import axios from 'axios';

const url = 'https://randomuser.me/api/?results=100&nat=au';

//api call

const API = { ApiSearch: function () {
    return axios.get(url)
    }}

export default API;