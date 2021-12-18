import React, { useState } from 'react'

const BlogList = ({ blogs, title }) => {

    const [comments, setComments] = useState([])

    const [counter, setCounter] = useState([0])
    const [comment, setComment] = useState(false)
    const [color, setColor] = useState("")

    const handleCounter = (id) => {
        setCounter(parseInt(counter) + 1)
        setColor("red")
    }

    const handleComment = () => {
        setComment(c => !c)
    }

    const handleCommentsArray = () => {
        setComments(comment => comment.concat(comments))
    }

    return (
        <div>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h3 className="mainTitle text-dark my-3">{title}</h3>
                    <div className="blogBox">
                        <div className="blog-top">
                            <img src={blog.img} alt="User Avatar" className='blog-img' />
                            <div>
                                <h3 className="title">{blog.title}</h3>
                                <p className="author"><i>{blog.author}</i></p>
                            </div>
                        </div>
                        <div className='body'>
                            <p>{blog.body}</p>
                        </div>
                        <hr />
                        <div className="blog-bottom d-flex">
                            <div className="blog-likes me-5 d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={(id) => handleCounter(id)} width="16" height="16" fill={color} className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                                <p className="like ms-2 mb-0">{counter}</p>
                            </div>
                            <div className="blog-comment">
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={handleComment} width="16" height="16" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                </svg>
                            </div>
                        </div>
                        {comment && <input type="text" className='comment-text' placeholder='Comment..' value={comments} onChange={(e) => setComments(e.target.value)} onKeyDown={handleCommentsArray}/>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogList
