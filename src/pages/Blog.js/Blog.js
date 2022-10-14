import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import banner from '../../images/2022-blog-banner-xl.png'
import BlogInfo from './BlogInfo';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    return (

        <div>
            <div style={{background: `url(${banner})`, backgroundSize: 'contain', backgroundRepeat:'no-repeat'
            }} className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="pb-60 text-5xl font-bold text-white">BLOG</h1>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 m-5 pb-5 lg:-mt-40'>
                {
                    blogs.map(blog => <BlogInfo blog={blog}
                        key={blog.id}
                        >
                        
                        </BlogInfo>)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Blog;