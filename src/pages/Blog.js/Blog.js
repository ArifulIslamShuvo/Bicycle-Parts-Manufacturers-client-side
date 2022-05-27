import React from 'react';
import Footer from '../Shared/Footer';

const Blog = () => {
    return (

        <div>
            <div className='mb-10'>
                <h2 className='text-4xl text-orange-500 font-bold text-center my-10'>Welcone to Blog Page</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 px-12">

                    <div className="card w-100">
                        <div className="card-body">
                            <h2 className="card-title text-blue-500 text-xl">How does prototypical inheritance work?</h2>
                            <p className='text-left'>Prototype-based programming is a style of object-oriented programming in which behavior reuse is performed via a process of reusing existing objects that serve as prototypes. Prototype-based programming uses generalized objects, which can then be cloned and extended. The prototype may be a simple drawing or rough model that helps innovators determine what they need to improve and fix in their design.</p>
                        </div>
                    </div>
                    <div className="card w-100 ">
                        <div className="card-body">
                            <h2 className="card-title text-blue-500 text-xl">What is a unit test?</h2>
                            <p className='text-left'>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers.</p>
                            <hr className='border-1 border-black' />
                            <h2 className="card-title text-left text-blue-500 text-xl">Why should write unit tests?</h2>
                            <p className='text-left'>One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency.</p>


                        </div>
                    </div>
                    <div className="card w-100">
                        <div className="card-body">
                            <h2 className="card-title text-left text-blue-500 text-xl">What are the different ways to manage a state in a React application?</h2>


                            <p className='text-left'> useContext helps in passing the props down the components tree. React's Context API helps in passing the props between the grandfather component to the grandchild component.
                                <hr className='border-1 border-black' />
                                The idea of React's useReducer has been taken from JavaScript Reducer. Generally, the current state is held by the Reducer along with action with payload and then it results out the new state
                                <hr className='border-1 border-black' />
                                With Redux, the state can be managed globally by the use of an external force. The Redux Reducer's work is to act upon two Redux actions and there is no dependency on the Redux Library. </p>
                        </div>
                    </div>
                    <div className="card w-100 ">
                        <div className="card-body">
                            <h2 className="card-title text-left text-blue-500 text-xl">How will you improve the performance of a React Application?</h2>
                            <p className='text-left'>React uses several clever techniques to minimize the number of costly DOM operations required to update the UI.To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. Avoid inline functions as much as possible. Always render hidden components like Modals and Dropdowns conditionally. Always call multiple APIs parallelly</p>
                        </div>
                    </div>

                    <div className="card w-100 bg-primary">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p className='text-left'>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;