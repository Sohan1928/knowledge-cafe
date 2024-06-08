import PropTypes from "prop-types";
import Bookmark from "./Bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="h-full bg-gray-300 rounded-xl mt-4 pt-2">
      <h1 className="lg:text-2xl font-bold text-center">
        Bookmarked Blog:{bookmarks.length}
      </h1>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};
export default Bookmarks;
