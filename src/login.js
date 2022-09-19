import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let Navigate = useNavigate();
    const [logindata, setlogindata] = useState({});
    const HandleLogin = () => {
        axios.post('http://localhost:3001/login', logindata).then((res) => {
            console.log(res.data)
            localStorage.setItem("token",res.data.token);
            
            Navigate('/welcome')

        }).catch ((err) => {
            console.log(err.response.data)
        })
    }

    return (
        <div className="registercard">
            <div>
                <label>User Email :</label>
                <input type="email" onChange={(e) => { setlogindata({ ...logindata, user_email: e.target.value }) }} />
            </div>            <div>
                <label>User Password :</label>
                <input type="password" onChange={(e) => { setlogindata({ ...logindata, password: e.target.value }) }} />
            </div>
            <button onClick={() => { HandleLogin() }}>Login</button><br></br>
            <button onClick={() => { Navigate('/register') }}>Register</button>

        </div>
    )
}
export default Login