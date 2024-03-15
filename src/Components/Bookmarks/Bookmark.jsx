import PropTypes from "prop-types";

const Bookmark = ({ bookmarks }) => {
  const { title } = bookmarks;
  // const { name, role, img } = author;

  return (
    <div className="mt-3 drop-shadow-xl bg-white shadow-lg p-3 rounded-lg">
      <div className="flex items-center justify-center w-full">
        <h2 className="capitalize py-5 px-2 w-full">{title}</h2>
        <button className="py-3 px-5 rounded-lg font-bold  text-white  bg-red-500">
          remove
        </button>
      </div>
    </div>
  );
};
Bookmark.propTypes = {
  bookmarks: PropTypes.object.isRequired,
};

export default Bookmark;
