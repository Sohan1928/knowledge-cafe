import "./App.css";
import Blogs from "./Components/Blogs";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Bookmarks from "./Components/Bookmarks";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (time) => {
    const newReadingTimes = readingTime + time;
    setReadingTime(newReadingTimes);
  };

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto bg-[#FEFCED] rounded-md">
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="grid grid-cols-3 space-x-5">
          <div className="col-span-2">
            <Blogs
              handleAddToBookmark={handleAddToBookmark}
              handleMarkAsRead={handleMarkAsRead}
            ></Blogs>
          </div>
          <div>
            <Bookmarks
              bookmarks={bookmarks}
              readingTime={readingTime}
            ></Bookmarks>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
