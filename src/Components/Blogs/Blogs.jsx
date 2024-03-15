import { useEffect } from "react";
import { useState } from "react";
import { Blog } from "./Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((theblogs) => setBlogs(theblogs));
  }, []);

  return (
    <div>
      <h2 className="bg-green-300 px-0 py-5 text-2xl text-center ">
        {" "}
        Blogs found{" "}
        <span className="ms-5 font-bold text-3xl text-blue-500">
          {blogs.length}
        </span>
      </h2>
      {/* blogs container */}
      <div className="flex flex-col gap-3 mt-3 ">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookmark={handleBookmark}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleBookmark: PropTypes.func,
  // handleMarkAsRead: PropTypes.func,
};

export default Blogs;
