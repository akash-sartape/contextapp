import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './register.css';

const Register = () => {
    let Navigate = useNavigate()
    const [reagisterdata, setregisterdata] = useState({});
    const Hnadleusername = (e) => {
        setregisterdata({ ...reagisterdata, user_name: e.target.value })
    }
    const Handleregister = () => {
        axios.post('http://localhost:3001/register', reagisterdata).then((res) => {
            console.log(res)
            Navigate('/login')
        }).catch((err) => {
            console.log(err.response.data.message)
        })
    }

    return (
        <div className="registercard">
            <div >
                <label>User Name :</label>
                <input type="text" onChange={(e) => { Hnadleusername(e) }} />
            </div>
            <div>
                <label>User Email :</label>
                <input type="email" onChange={(e) => { setregisterdata({ ...reagisterdata, user_email: e.target.value }) }} />
            </div>            <div>
                <label>User Mobile :</label>
                <input type="number" onChange={(e) => { setregisterdata({ ...reagisterdata, user_mobileNumber: e.target.value }) }} />
            </div>            <div>
                <label>User Password :</label>
                <input type="password" onChange={(e) => { setregisterdata({ ...reagisterdata, user_password: e.target.value }) }} />
            </div>
            <button onClick={() => { Handleregister() }}>Submit</button>
        </div>
    )
}
export default Register