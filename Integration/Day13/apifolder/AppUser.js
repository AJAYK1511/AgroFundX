import axios from 'axios';
import { resolve } from './resolve.js';

export async function getUserById(id) {
    const token = localStorage.getItem('JWTtoken');
    return resolve(
        axios.get(`http://localhost:8080/api/users/${id}`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(res => res.data)
    );
}

export async function getLoans() {
    const token = localStorage.getItem('JWTtoken');
    return resolve(
        axios.get(`http://localhost:8080/api/loans/`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(res => res.data)
    );
}

export async function getGet(id,loan_id) {
    const token = localStorage.getItem('JWTtoken');
    return resolve(
        axios.post(`http://localhost:8080/api/userloans/${id}/${loan_id}`,{}, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(res => res.data)
    );
}


export async function getIdByUsername(username) {
    const token = localStorage.getItem('JWTtoken');
    return resolve(
        axios.get(`http://localhost:8080/api/users/id-with-username/${username}`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(res => res.data)
    );
}

export async function getUserLoansById(id) {
    const token = localStorage.getItem('JWTtoken');
    return resolve(
        axios.get(`http://localhost:8080/api/userloans/${id}`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(res => res.data)
    );
}

// export async function getUserLoans(id,id1) {
//     const token = localStorage.getItem('JWTtoken');
//     return resolve(
//         axios.get(`http://localhost:8080/api/userloans/${id}/${id1}`, {
//             headers: { "Authorization": `Bearer ${token}` }
//         })
//         .then(res => res.data)
//     );
// }

export async function deleteUser(){
    const token = localStorage.getItem('JWTtoken');
    return resolve(
        axios.delete('http://localhost:8080/api/User/delete', {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(res => {
            console.log(res.data); // Log the response data
            return res.data; // Return the response data
        })
    );
}

export async function updateUser(id) {
    const token = localStorage.getItem('JWTtoken');
    try {
        const response = await axios.put(`http://localhost:8080/api/users/put/${id}`,{},{
            headers: { "Authorization": `Bearer ${token}` }
        });
        console.log(response.data); // Log the response data
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
}
