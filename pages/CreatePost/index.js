import React, { useState } from "react";
import PostForm from "../../components/PostForm/Form.js";

function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    is_published: false,
    content: "cdsfsadfsa",
    excerpt: "",
  });

  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  }

  return (
    <div>
      <h1>Create new post</h1>
      <PostForm post={post} setPost={setPost} onChange={onChange} />
    </div>
  );
}

export default CreatePost;
