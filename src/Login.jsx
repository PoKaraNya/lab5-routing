import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const submitHandle = () => {
        axios.request({
            url: 'https://dummyjson.com/auth/login',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: {
                username,
                password
            }
        })
            .then(({data}) => {
                alert('Success')
                localStorage.setItem('token', data.token)
                navigate('/')
            })
            .catch((e) => {
                console.log(e)
                alert('Auth failed')
            })
    }

    return (
        <div>
            <input
                type="text"
                placeholder='Username'
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={submitHandle}>
                Login
            </button>
            <div>
                login: atuny0<br/>
                pass: 9uQFF1Lh
            </div>
        </div>
    )
}