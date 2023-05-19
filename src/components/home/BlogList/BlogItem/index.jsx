import React, { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Chip from '../../../common/Chip/Chip'


export default function BlogItem({blog}) {
    return (
        <div className='blogItem-wrap'>
            <img src={blog.headerImage} alt="cover" className='blogItem-cover'/>
            <Chip category={blog.category} />
            <h3>{blog.title}</h3>
            <p className='blogItem-desc'>{blog.content}</p>

            <footer>
                <div className="blogItem-author">
                    <img src="https://raw.githubusercontent.com/yasir2002/box-shadow-generator/master/src/img/me.jpeg" alt="avatar" />
                    <div className='mt-2'>
                        <div>
                            <h6>
                                Yasir Nawaz
                                <p className='blog-date'>{new Date(blog.createdAt).toLocaleDateString()} at {new Date(blog.createdAt).toLocaleTimeString()}</p>
                            </h6>
                        </div>
                    </div>
                </div>

                <Link to={`/blog/${blog._id}`} className='blogItem-link'><button className='btn btn-outline-dark rounded-circle'><i className='fa fa-arrow-right'></i></button></Link>
            </footer>
        </div>
    )
}
