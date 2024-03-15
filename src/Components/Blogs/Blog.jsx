import { BsBookmarkCheckFill } from "react-icons/bs";
import PropTypes from "prop-types";

const Blog = ({ blog, handleBookmark }) => {
  // Data  Destructuring -------
  const { author, title, coverPhoto, category, readTime, date } = blog;
  const { name, role, img } = author;
  // data destracturing ended ----------
  return (
    <div className="w-full flex items-center justify-center">
      <div className="shadow-lg">
        {/* image container */}
        <div className="">
          <img
            className="w-full"
            src={coverPhoto}
            alt={`cover picture of the ${title}`}
          />
        </div>
        {/* card body container */}
        <div className="p-3">
          {/* author profile container */}
          <div className="flex items-center justify-between mt-4 p-4  ">
            <div className="flex gap-3 items-center justify-center">
              <img className="w-16 h-16 rounded-full" src={img} alt="" />
              <div>
                <h2 className="text-lg font-bold">{name}</h2>
                <span className="font-sm">
                  {date} <span className="ms-2"> (4 days ago )</span>
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <span>{readTime}</span>
              <button
                onClick={() => {
                  alert("bookmark working");
                }}
                className="text-blue-800 text-2xl w-10 h-10 bg-pink-300 rounded-full shadow-2xl flex items-center justify-center"
              >
                <BsBookmarkCheckFill />
              </button>
            </div>
          </div>
          {/* post tittle  */}
          <div>
            <h2 className="text-3xl font-bold leading-normal ">{title}</h2>
          </div>
          {/* post hashtages  */}
          <div>
            <span className="mx-2">
              {" "}
              <span>#</span> {role}
            </span>
            <span>{category}</span>
          </div>

          {/* mark as read button  */}
          <button
            onClick={() => handleBookmark(blog)}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded inline-flex items-center my-3"
          >
            <svg
              className="w-5 h-5 mr-2 font-extrabold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Mark as Read
          </button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
  blog:PropTypes.object.isRequired
};

export { Blog };
