import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((theblogs) => setBlogs(theblogs));
  }, []);
  console.log(blogs);

  return (
    <div className="">
      <h2> this is from blogs container </h2>
    </div>
  );
};

export default Blogs;
