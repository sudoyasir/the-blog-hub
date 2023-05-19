import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import Multiselect from 'multiselect-react-dropdown';
import './style.css';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Spinner from '../../../../components/common/spinner/Spinner';

export default function NewBlog() {
    const [pic, setPic] = useState('');
    const [loading, setLoading] = useState(false);
    const [blogTitle, setBlogTitle] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [blogContent, setBlogContent] = useState('');

    const postDetails = async (pic) => {
        setLoading(true);
        if (pic === undefined) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please select image!',
            });
            return;
        }
        if (pic.type === 'image/jpeg' || pic.type === 'image/png') {
            const data = new FormData();
            data.append('file', pic);
            data.append('upload_preset', 'ChatSphere');
            data.append('cloud_name', 'dflansvri');

            try {
                const res = await axios.post(
                    'https://api.cloudinary.com/v1_1/dflansvri/image/upload',
                    data
                );
                setPic(res.data.url);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        } else {
            console.error('Invalid image format:', pic.type);
            setLoading(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const now = new Date();
        const formData = {
            title: blogTitle,
            category: selectedCategory,
            content: blogContent,
            headerImage: pic,
            createdAt: now.toISOString() // add current date and time as a string
        };
        console.log(formData);
        try {
            const response = await axios.post(
                'https://blog-site00.herokuapp.com/new-blog',
                formData
            );
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Blog has been posted!',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>
            <h2 className='mb-4'>
                <i className='fa-solid fa-feather'></i> Write Blog
            </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='blogTitle'>Enter Blog Title</label>
                <input
                    className='form-control mb-3'
                    type='text'
                    name='blogTitle'
                    id='blogTitle'
                    placeholder='Blog Title'
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                />

                <label htmlFor='headerImage'>Select Header Image</label>
                <input
                    type='file'
                    accept='image/*'
                    onChange={(e) => postDetails(e.target.files[0])}
                    className='form-control mb-3'
                    name='headerImage'
                    id='headerImage'
                />
                {loading && <Spinner />}

                <label htmlFor='category'>Enter Category</label>
                <Multiselect
                    className='mb-3 text-dark'
                    displayValue='key'
                    onKeyPressFn={() => { }}
                    onRemove={() => { }}
                    onSearch={() => { }}
                    onSelect={(selectedList) =>
                        setSelectedCategory(selectedList[0].key)
                    }
                    options={[
                        {
                            key: 'Hardware Reviews'
                        },
                        {
                            cat: 'Group 1',
                            key: 'Software Reviews'
                        },
                        {
                            cat: 'Group 1',
                            key: 'Programming Tutorials'
                        },
                        {
                            cat: 'Group 2',
                            key: 'Cybersecurity and Hacking'
                        },
                        {
                            cat: 'Group 2',
                            key: 'Latest Tech News'
                        },
                        {
                            cat: 'Group 2',
                            key: 'How-to Guides'
                        },
                        {
                            cat: 'Group 2',
                            key: 'Mobile Devices'
                        },
                        {
                            cat: 'Group 2',
                            key: 'AI and Machine Learning'
                        },
                        {
                            cat: 'Group 2',
                            key: 'VR & AR'
                        }
                    ]}
                    selectionLimit={1}
                />
                <ReactQuill
                    theme="snow"
                    className='mb-5'
                    value={blogContent}
                    onChange={setBlogContent}
                />


                <button className='btn btn-primary w-100'>Post Blog <i class="fa-solid fa-paper-plane"></i></button>
            </form>
        </div>
    )}
