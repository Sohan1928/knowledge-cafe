import PropTypes from "prop-types";
import { FcBookmark } from "react-icons/fc";

const Blog = ({ blog }) => {
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
        className="h-52 min-w-56 rounded-3xl lg:h-full w-full p-5"
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
              <h4 className=" my-2  font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#972bb2] to-[#e24378]">
                {author}
              </h4>
              <p>{posted_date}</p>
            </div>
          </div>
        </div>
        <div className=" h-12 mr-5">
          <p className=" bg-[#C2EDCE] rounded-full text-nowrap p-1 lg:p-2">
            <span className=" text-violet-500   lg:font-semibold">
              {reading_time} min read
            </span>
            <button className="ml-1 lg:ml-2">
              <FcBookmark />
            </button>
          </p>
        </div>
      </div>

      <h1 className="ml-5 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#972bb2] to-[#e24378]">
        Blog Title:{title}
      </h1>
      <p className=" ml-5 mt-2 space-x-3 font-semibold">
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
};

export default Blog;
