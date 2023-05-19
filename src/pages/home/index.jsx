import React, { useEffect, useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/home/BlogList';
import Header from '../../components/home/header';
import SearchBar from '../../components/home/SearchBar';
import Footer from '../../components/home/footer';
import axios from 'axios';
import Spinner from '../../components/common/spinner/Spinner';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const [initialBlogs, setInitialBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // added state variable

    useEffect(() => {
        axios.get("https://blog-site00.herokuapp.com/blogs")
            .then((res) => {
                setBlogs(res.data);
                setInitialBlogs(res.data);
                setIsLoading(false); // set isLoading to false after blogs are fetched
            })
    }, [])

    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults(searchKey);
    };

    const handleSearchResults = (key) => {
        const filteredBlogs = initialBlogs.filter((blog) =>
            blog.category.toLowerCase().includes(key.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };


    const handleClearSearch = () => {
        setBlogs(initialBlogs);
        setSearchKey('');
    };

    return (
        <div>
            <Header />

            <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />

            {isLoading ? (
                <div className='text-center p-5'>
                    <Spinner />
                </div>
            ) : (
                !blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />
            )}

            <Footer />
        </div>
    );
};

export default Home;
