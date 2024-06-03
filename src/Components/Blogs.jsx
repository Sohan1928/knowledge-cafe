import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("fake_data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return <div></div>;
};

export default Blogs;
