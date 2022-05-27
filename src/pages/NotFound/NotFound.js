import React from 'react'

const NotFound = () => {
  return (
    <section className='container mb-5'>
      <div className='cols-12'>
        <div className='pt-12'>
          <h3 className='my-5 text-5xl text-center text-error'>
            Error 404
          </h3>
          <h1 className='text-secondary text-2xl text-center'>
            Oops! The page you're looking for isn't here.
          </h1>
          <h2 className=' text-center text-2xl'>
            You might have the wrong address, or the page may have moved.
          </h2>
        </div>
          <div className='w-50 mx-auto rounded-lg flex justify-center'>
            <img className='w-100'
              src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
              alt=''
            />
          </div>
      </div>
    </section>
  )
}

export default NotFound;
