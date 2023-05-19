import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import NewBlog from './components/NewBlog';
import ManageBlogs from './components/ManageBlogs';
import { Link } from 'react-router-dom';



export default function AdminDashboard() {
    const [admin, setAdmin] = useState('')
    useEffect(() => {
        axios.get("https://blog-site00.herokuapp.com/admin").then((res) => {
            setAdmin(res.data[0])

        });
    }, []);
    console.log(admin)

    return (
        <>
            <div className="dashboard-wrap">
                <div className="row">
                    <div className="col-3 text-center py-4 p-0 text-white dash-left" style={{ backgroundColor: "#393646" }}>
                        <img src={admin.image} className='admin-image' alt="" />
                        <h4 className='admin-name'>{admin.name}</h4>

                        <div className="tab-btn">
                            <ul className="nav flex-column" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active w-100 text-start mb-1" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i className="fa fa-book-open"></i> &nbsp; Manage Blogs</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link w-100 text-start mb-1" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i className="fa fa-feather"></i> &nbsp; Write Blog</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link w-100 text-start td-none" to='/the-blog-hub'><i className="fa-solid fa-home"></i> &nbsp; Goto Homepage</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-9 dash-right p-5" style={{ backgroundColor: "#4F4557" }}>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <ManageBlogs />
                            </div>
                            <div className="tab-pane fade text-white" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <NewBlog />
                            </div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
