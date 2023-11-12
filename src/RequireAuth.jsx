import {Navigate} from "react-router-dom"

export default function RequireAuth({children}) {
    const token = localStorage.getItem('token')
    if (!token) {
        alert('Please login')
    }
    return token ? children : <Navigate to='/login'/>
}