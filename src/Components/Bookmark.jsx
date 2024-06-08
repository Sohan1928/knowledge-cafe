import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div className="bg-[#FBC7F7] rounded p-2 lg:p-4 m-2">
      <h3 className="text-xs lg:text-2xl text-[#7868E6]">{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
