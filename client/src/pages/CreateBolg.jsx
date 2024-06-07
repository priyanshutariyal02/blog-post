import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBolg = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState({
    title: "",
    desc: "",
    user_name: "",
  });

  const handleChange = (e) => {
    setPosts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/create", posts);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center">
      <div className="w-[35rem] h-[35rem] bg-white shadow-lg flex flex-col gap-10 justify-center items-center py-5 blog-create">
        <h1 className="text-[2.5rem] font-semibold text-black">Blog</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="title"
          name="title"
        />
        <textarea
          onChange={handleChange}
          placeholder="description..."
          name="desc"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="user name"
          name="user_name"
        />
        <button
          onClick={handleClick}
          className="bg-rose-500 text-white py-2 px-5 text-lg font-semibold hover:bg-rose-400 duration-150"
        >
          create
        </button>
      </div>
    </div>
  );
};

export default CreateBolg;
