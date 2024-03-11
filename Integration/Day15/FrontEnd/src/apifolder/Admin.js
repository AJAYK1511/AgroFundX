
import axios from 'axios';
import { resolve } from './resolve.js';

export async function getPendingLoans() {
    const token = localStorage.getItem('JWTtoken');
    return resolve(
        axios.get(`http://localhost:8080/api/userloans/pending`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(res => res.data)
    );
}
export async function approveLoans(id) {
    const token = localStorage.getItem('JWTtoken');
    console.log("id "+id);
    return resolve(
        axios.put(`http://localhost:8080/api/userloans/approve/${id}`,{}, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(res => res.data)
    );
}
