import axios from "axios";

// let headers = {

// }

const API = axios.create({
    baseURL: 'https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/',
    // withCredentials: true,
    headers: {
        'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',

        // "x-requested-with": "",
        // 'Content-Type': "application/json",
        // 'Accept': "application/json",
        // "Access-Control-Allow-Headers": "X-Requested-With, content-type",
        // 'Access-Control-Allow-Origin': 'http://192.168.19:8081',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',

    }
});

//products
export const products = () => API.get(`/products`)
export const getColor = (id) => API.get(`/colors/${id}`)
export const getMaterial = (id) => API.get(`/material/${id}`)

export const getAllColor = (id) => API.get(`/colors`)
export const getAllMaterial = (id) => API.get(`/material`)


export default API;