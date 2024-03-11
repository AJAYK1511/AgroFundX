import axios from 'axios';
import { resolve } from './resolve.js';

export async function login(username, password) {
  return await resolve(axios.post('http://localhost:8080/auth/authenticate', {username,password}).then(res => res.data));
}

export async function signup(name, password, email) {
    return await resolve(axios.post('http://localhost:8080/auth/new', {name,password,email,roles:'USER'}).then(res => res.data));
}
export default function getAllUsers()
{
    const token=localStorage.getItem('JWTtoken');
    return resolve(axios.get('http://localhost:8080/api/users/',{headers:{"Authorization": `Bearer ${token}`,},}).then(res=>res.data));
}

// export default function updateUser(id, userData) {
//   const token = localStorage.getItem('JWTtoken');
//   return axios.put('http://localhost:8080/api/users/put/${id}', userData, {
//       headers: {
//           "Authorization": `Bearer ${token}`
//       }
//   }).then(res => res.data);
// }

// export default function getUserById(id) {
//   const token = localStorage.getItem('JWTtoken');
//   return axios.get('http://localhost:8080/api/users/${id}', {
//       headers: {
//           "Authorization": `Bearer ${token}`
//       }
//   }).then(res => res.data);
// }

// export async function addLoanToUser(user_id,loan_id)
// {
//     const token=localStorage.getItem('JWTtoken');
//     return resolve(axios.post(http://localhost:8080/api/loan/add/${user_id}/${loan_id},{},{headers:{"Authorization": Bearer ${token},},}).then(res=>res.data))
// }


