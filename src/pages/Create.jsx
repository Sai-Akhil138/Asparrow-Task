import React, { useState } from 'react'

const Create = () => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const validateForm = () => {
        return title.length > 0 && author.length > 0 && body.length > 0
    }
    return (
        <div className='create container text-dark'>
            <h2 className='fw-bold text-center'>Create New Blog</h2>
            <form className='d-flex flex-column align-items-center mt-3' onSubmit={(e) => handleSubmit}>
                <div className="mb-3">
                    <label className='form-label'>Blog Title : </label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className='form-control' placeholder='Enter your title'/>
                </div>
                <div className="mb-3">
                    <label className='form-label'>Author : </label>
                    <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" className='form-control' placeholder='Enter your name'/>
                </div>
                <div className="mb-5">
                    <label className='form-label'>Blog Body</label>
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} className='form-control' placeholder='Enter your blog data'></textarea>
                </div>
                <button className='btn btn-primary' type='submit' disabled={!validateForm()}><a href="/user" className='text-white text-decoration-none px-3'>Submit</a></button>
            </form>
        </div>
    )
}

export default Create
