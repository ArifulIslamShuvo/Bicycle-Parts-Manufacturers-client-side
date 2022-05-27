import React from 'react';
import myPhote from '../../images/shape-4.png'
import Footer from '../Shared/Footer';
import icon from '../../images/skill//html5.jpg';
import icon1 from '../../images/skill/css.png';
import icon2 from '../../images/skill/bootstrap.png';
import icon3 from '../../images/skill/tailwind.png';
import icon4 from '../../images/skill/js.png';
import icon5 from '../../images/skill/Es6.jpeg';
import icon6 from '../../images/skill/react.png';
import icon7 from '../../images/skill/firebase1.png';
import icon8 from '../../images/skill/nodejs.png';
import icon9 from '../../images/skill/mongodb.png';

const MyPortfolio = () => {
    return (
        <div>
            <div className='px-12'>
                <h2 className='text-4xl text-orange-500 font-bold text-center mt-10'>Welcome To My Portfolio</h2>

                <div className="card bg-black my-10 rounded-xl">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={myPhote} className="max-w-xs rounded-lg" alt='' />
                        <div className=''>
                            <h1 className="text-4xl font-bold text-white px-5">MD: Ariful Islam</h1>
                            <h1 className="text-xl font-bold text-orange-500 pt-5">arifulislams063@gmail.com</h1>
                            <p className=" text-purple-500 text-xl pt-2">B.Sc. in Computer Science & Engineering (CSE)</p>
                            <p className=" text-red-500 text-xl pt-2">University of Global Village (UGV), BARISAL</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='text-4xl text-orange-500 font-bold text-center mt-10'>My Skill</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
                <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={icon} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">HTML5</h2>
                    </div>
                </div>

                <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={icon1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">CSS</h2>
                    </div>
                </div>
                
                <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={icon2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Bootstrap</h2>
                    </div>
                </div>

                <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={icon3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Tailwind</h2>
                    </div>
                </div>

                <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={icon4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">JavaScript</h2>
                    </div>
                </div>

                <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={icon5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ES6</h2>
                    </div>
                </div>

                <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={icon6} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">React</h2>
                    </div>
                </div>

                <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={icon7} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Firebase</h2>
                    </div>
                </div>

                <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={icon8} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Nodejs</h2>
                    </div>
                </div>

                <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={icon9} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mongodb</h2>
                    </div>
                </div>
                <div className="card w-50 shadow-xl bg-slate-800">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-secondary">My Projects Link</h2>
                        <a className='text-blue-600' href="https://illustrious-cocada-d468af.netlify.app/">Furniture Industry Management</a>
                        <a className='text-blue-600' href="https://effortless-crisp-2ce00e.netlify.app/">Customer Reviews</a>
                        <a className='text-blue-600' href="https://remarkable-gaufre-0ef67b.netlify.app/">Awesome Photography</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyPortfolio;