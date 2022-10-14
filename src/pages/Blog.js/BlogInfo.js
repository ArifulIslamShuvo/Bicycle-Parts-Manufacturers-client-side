import React from 'react';

const BlogInfo = ({ blog }) => {
    const { img, title, description } = blog;
    return (
        <div className="card card-compact w-[360px] mx-auto bg-base-100 shadow-xl">
            <figure><img src={img} className="p-2" alt="Shoes" /></figure>
            <div className="hero-overlay"></div>
            <div className='mx-5 -mt-10 bg-white'>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p className='whitespace-normal text-left'>{description.slice(0, 200)}...</p>
                </div>
            </div>
        </div>
    );
};

export default BlogInfo;