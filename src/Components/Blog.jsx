import PropTypes from "prop-types";

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
      <img
        className="h-52 min-w-56 rounded-3xl lg:h-full w-full p-5"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />

      <div className="flex justify-between">
        <div className="flex ml-5 mb-3">
          <img className="w-16 h-16 rounded-full" src={author_img} alt="" />
          <div className="ml-5 ">
            <h4 className="font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#972bb2] to-[#e24378]">
              {author}
            </h4>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <p>
            <span>{reading_time} min read</span>
          </p>
        </div>
      </div>

      <h1 className="ml-5 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#972bb2] to-[#e24378]">
        Blog Title:{title}
      </h1>
      <p className="ml-5 mt-2">
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href="">#{hash}</a>
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
