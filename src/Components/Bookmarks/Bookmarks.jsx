import Bookmark from "./Bookmark";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Bookmarks = ({ bookmarks,readingTime }) => {
  return (
    <div>
      <h2 className="text-2xl p-5 bg-blue-700 text-white rounded-md capitalize font-bold">
        Reading time : <span className="font-extrabold"> {readingTime} </span> min
      </h2>

      {/* bookmark container */}

      <div className="bg-slate-100 p-5  font-bold">
        <h2 className="text-2xl p-5 bg-pink-400 text-white rounded-md ">
          Bookmarks count : {bookmarks.length}
        </h2>
        <div className="flex flex-col gap-3">
          {bookmarks.map((bookMr) => (
            <Bookmark key={bookMr.id} bookmarks={bookMr}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  
};

export default Bookmarks;
