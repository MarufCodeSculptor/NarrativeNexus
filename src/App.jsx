import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Nav from "./Components/Headers/Nav";

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const handleBookmark = (updateItem) => {
    const update = [...bookmarks, updateItem];
    setBookmark(update);
  };

  return (
    <>
      <Nav></Nav>
      <div className="container mx-auto">
        <div className="capitalize flex flex-col md:flex-row gap-2">
          <div className="md:w-7/12">
            <Blogs handleBookmark={handleBookmark}></Blogs>
          </div>
          <div className="md:w-5/12">
            <Bookmarks bookmarks={bookmarks}></Bookmarks>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
