import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function SignUp() {
    const [name, setName] = useState()
    const [roll_no, setRollNo] = useState()
    const [class_code, setClassCode] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(name + " " + roll_no + " " + class_code + " " + password)
        axios.post("http://localhost:3001/api/register/student", { name, roll_no, class_code, password })
            .then(res => {
                navigate('/studentlogin')
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Student Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 ">
                        <label>
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            className="form-control rounded-0"
                            placeholder="Enter Your Name"
                            name="Student_name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 ">
                        <label>
                            <strong>Roll_no</strong>
                        </label>
                        <input
                            type="text"
                            className="form-control rounded-0"
                            placeholder="Enter Your Roll no"
                            name="rollNo"
                            onChange={(e) => setRollNo(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 ">
                        <label>
                            <strong>class_code</strong>
                        </label>
                        <input
                            type="text"
                            className="form-control rounded-0"
                            placeholder="Enter Your Class Code"
                            name="class_code"
                            onChange={(e) => setClassCode(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 ">
                        <label>
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            className="form-control rounded-0"
                            placeholder="Enter Your Password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
