import axios from "axios";
import React, { useEffect, useState } from "react";
import deleteIcon from "../assets/delete.png";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/create");
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5000/create/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full p-10 flex gap-5 flex-wrap mt-10 blogs">
      {posts.map((blog) => (
        <div
          className="bg-white relative w-[25rem] h-[17rem] min-h-[200px] p-5 rounded-xl shadow-xl flex flex-col gap-5 justify-between blog-post"
          key={blog.id}
        >
          <h2 className="text-lg font-bold capitalize">{blog.title}</h2>
          <p className="min-h-[20px] overflow-hidden overflow-y-auto px-3">
            {blog.desc}
          </p>
          <span className="font-semibold italic text-gray-600">
            @{blog.user_name}
          </span>
          <div className="w-[24px] absolute top-4 right-4">
            <button onClick={() => handleDelete(blog.id)}>
              <img src={deleteIcon} alt="delete icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
