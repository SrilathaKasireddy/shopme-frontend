import axios from 'axios';
import {API} from "./global"


export function getProducts() {
	return axios.get(`${API}/latestcollection`)
		.then(response => response.data);
}

export function getCartProducts(cart) {
	return axios.post(`${API}/latestcollection`, {cart})
		.then(response => response.data);
}

// export function login (data) {
// 	return axios.post(`${API}/Login`, { UserName: data.UserName, Password: data.Password })
// 		.then(response => {
// 			localStorage.setItem('token', response.data.token);
// 			localStorage.setItem('token', Date.now() + 2 * 60 * 60 * 1000);
// 			return response.data
// 		})
// 		.catch(err => Promise.reject('Authentication Failed!'));
// }

