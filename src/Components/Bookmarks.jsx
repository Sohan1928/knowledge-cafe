import PropTypes from "prop-types";
import Bookmark from "./Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="h-full bg-[#F6F1E9] rounded-xl mt-4 pt-2">
      <div>
        <h1 className=" font-semibold px-1 lg:text-xl bg-[#FBC7F7] text-center m-2 rounded-sm">
          Spent Your Reading Time:
          <span className="text-[#7868E6] font-bold">{readingTime}</span>
        </h1>
      </div>
      <h1 className="lg:text-2xl font-bold text-center">
        Bookmarked Blog:{bookmarks.length}
      </h1>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
