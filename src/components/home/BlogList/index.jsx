import React, { useState } from 'react'
import BlogItem from './BlogItem'
import './style.css'
import axios from 'axios'
import { useEffect } from 'react'

export default function BlogList() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get("https://blog-site00.herokuapp.com/blogs")
      .then((res) => {
        setBlogs(res.data)
      })
  }, [])

  return (
    <div className='blogList-wrap'>
      {blogs && blogs.map(blog => (
        <BlogItem blog={blog} />
      ))}
    </div>
  )
}
