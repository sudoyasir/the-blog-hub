import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigator = useNavigate();

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://blog-site00.herokuapp.com/admin/authenticate', {
            email: email,
            password: password
        })
            .then((response) => {
                console.log(response.data);
                navigator('/admin/dashboard')

            })
            .catch((error) => {
                console.log(error);
                new swal({
                    title: "ERROR :(",
                    text: "Something cased error please try again.",
                    icon: "error",
                    button: "OK",
                });
            });
    };

    return (
        <div>
            <div className="container">
                <div className="card-wrap">
                    <h2 className="text-center mb-3">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control mb-2 rounded-pill"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control position-relative rounded-pill pe-5"
                                    id="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <button
                                    className="btn hide-button"
                                    type="button"
                                    onClick={handlePasswordVisibility}
                                >
                                    {showPassword ? <i className="fa fa-eye-slash" /> : <i className="fa fa-eye" />}
                                </button>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-outline-dark rounded-pill px-5 mt-3 w-100">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
