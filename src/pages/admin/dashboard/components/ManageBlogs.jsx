import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function ManageBlogs() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get("https://blog-site00.herokuapp.com/blogs")
            .then((res) => {
                console.log(res.data)
                setBlogs(res.data)
            })
    }, [])

    const truncateWords = (str, numWords) => {
        const wordsArr = str.split(" ");
        if (wordsArr.length > numWords) {
            return wordsArr.slice(0, numWords).join(" ") + "...";
        }
        return str;
    };

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const handleDeleteBlog = async (blogId) => {
        try {
            await axios.delete(`https://blog-site00.herokuapp.com/delete/blogs/${blogId}`)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Blog has been deleted!',
                showConfirmButton: false,
                timer: 1500
            });
            setBlogs(blogs.filter(blog => blog._id !== blogId))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <table className="table text-white">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Blog Title</th>
                        <th scope="col">Date Created</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) => (
                        <tr key={blog._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{truncateWords(blog.title, 5)}</td>
                            <td>{formatDate(blog.createdAt)}</td>
                            <td><button className='btn btn-outline-danger px-4 py-0' onClick={() => handleDeleteBlog(blog._id)}><i className='fa fa-trash'></i></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
