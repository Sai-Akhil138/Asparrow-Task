import React from 'react'

const Home = () => {
    return (
        <div className='home d-flex flex-column align-items-center' >
            <h3 className='mb-3 home-title'>Hey there, <b>Mate !</b></h3>
            <p className='mb-2 home-text'>Want to showcase your work in the form of blog</p>
            <p className='mb-3 home-text'>Just register with your details and start creating your blog.</p>
            <button className='btn btn-primary my-5 fs-6'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                </svg>
                <a href="/login" className='text-white text-decoration-none'>Login</a></button>
        </div>
    )
}

export default Home
