import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import EmptyList from '../../components/common/EmptyList';
import './style.css'
import axios from 'axios';
import Chip from '../../components/common/Chip/Chip';

export default function Blog() {
    const [blog, setBlog] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/blogs/${id}`)
            .then((res) => {
                console.log(res.data);
                setBlog(res.data);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [])

    return (
        <>
            <Link className='blog-goBack' to='/'>
                <i className="fa fa-arrow-left"></i> <span>Go Back</span>
            </Link>
            {blog ? (
                <div className='blog-wrap'>
                    <header>
                        <p className='blog-author'>By @Yasir Nawaz</p>
                        <p className='blog-date'>Published {new Date(blog.createdAt).toLocaleDateString()} at {new Date(blog.createdAt).toLocaleTimeString()}</p>
                        <h1>{blog.title}</h1>
                        <Chip category={blog.category} />
                    </header>
                    <img src={blog.headerImage} alt='cover' />
                    <div className='blog-desc' dangerouslySetInnerHTML={{ __html: blog.content }} />

                </div>
            ) : (
                <EmptyList />
            )}
        </>
    )
}
