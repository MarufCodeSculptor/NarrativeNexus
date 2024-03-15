import Bookmark from "./Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div>
      <h2 className="text-2xl p-5 bg-pink-400 text-white rounded-md ">
        Bookmarks count : {bookmarks.length}
      </h2>
      {/* bookmark container */}
      <div className="flex flex-col gap-3 bg-slate-100 p-5  font-bold">
        {bookmarks.map((bookMr) => (
          <Bookmark key={bookMr.id} bookmarks={bookMr}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
