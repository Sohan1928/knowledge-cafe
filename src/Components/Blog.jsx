import PropTypes from "prop-types";
import { MdOutlineBookmarkAdded } from "react-icons/md";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-14">
      {/* cover photo */}
      <img
        className="h-52 min-w-56 rounded-xl lg:h-full w-full my-4"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />

      <div className=" flex justify-between">
        <div className=" lg:flex ml-5 mb-3 ">
          {/* author image */}
          <img className="w-16 h-16 rounded-full" src={author_img} alt="" />
          <div className=" lg:ml-5 ">
            {/* author name */}

            <div>
              <h4 className="my-2 font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#972bb2] to-[#e24378]">
                {author}
              </h4>
              <p className="font-semibold opacity-70">{posted_date}</p>
            </div>
          </div>
        </div>
        <div className="h-12 mr-2 lg:mr-5">
          <p className=" bg-[#C2EDCE] rounded-full text-nowrap p-1 lg:p-2 flex items-center">
            <span className=" text-violet-500 lg:font-semibold">
              {reading_time} min read
            </span>
            <button
              onClick={() => handleAddToBookmark(blog)}
              className="ml-2 text-xl text-red-500"
            >
              <MdOutlineBookmarkAdded />
            </button>
          </p>
        </div>
      </div>

      <h1 className="ml-5 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#972bb2] to-[#e24378]">
        Blog Title:{title}
      </h1>
      <p className=" ml-5 text-[10px] h-10 mt-2 space-x-2 lg:text-base font-semibold">
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};

export default Blog;
