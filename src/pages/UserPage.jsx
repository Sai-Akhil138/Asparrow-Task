import React from "react";
import BlogList from "./BlogList";

const UserPage = () => {
    const blogs = [
        {
            title: "My Website",
            id: 1,
            author: "Jon Doe",
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia in recusandae adipisci sed architecto fugiat rem, incidunt quos autem, eligendi itaque aperiam esse molestias laudantium!",
        },
        {
            title: "UI Tutorial",
            id: 2,
            author: "Your name",
            img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia in recusandae adipisci sed architecto fugiat rem, incidunt quos autem, eligendi itaque aperiam esse molestias laudantium!",
        },
    ];

    return (
        <div className="container blog-container">
            <div className="circle one"></div>
            <div className="circle two"></div>
            <div className="circle three"></div>
            <div className="circle four"></div>
            <BlogList blogs={blogs} />
            <BlogList blogs={blogs.filter((blog) => blog.author === "Your name")} title="Your Blogs" />
            <button className="btn btn-primary mt-3">
                <a href="/create" className="text-white text-decoration-none">
                    Create Blog
                </a>
            </button>
        </div>
    );
};

export default UserPage;
