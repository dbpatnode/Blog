import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";
import Button from "../../components/Button.js";
import { supabase } from "../../utils/supabaseClient";

const initialState = {
  title: "",
  is_published: false,
  content: "dfsdafsad",
  excerpt: "",
};

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const QuillJS = () => {
  const [post, setPost] = useState(initialState);
  const { title, content, excerpt, is_published } = post;
  const router = useRouter();

  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  }

  async function createNewPost() {
    if (!title || !content) {
      return (
        <div className="no-content-error">
          <p>
            Title, content and excerpts are required before publishing. Please
            fill those bad boys in.
          </p>
        </div>
      );
    }
    // const user = supabase.auth.user();
    // const id = uuid();
    // post.id = id;
    let is_published = true;
    const { data } = await supabase
      .from("posts")
      .insert([{ title, content, excerpt, is_published }])
      //  user_id: user.id, user_email: user.email }])
      .single();
    router.push(`/Posts/${data.id}`);
  }

  return (
    <div>
      <input
        required
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={post.title}
        className=""
      />
      <input
        required
        onChange={onChange}
        name="excerpt"
        placeholder="Excerpt"
        value={post.excerpt}
        className=""
      />
      <ReactQuill
        theme="snow"
        value={post.content}
        modules={modules}
        onChange={(value) => setPost({ ...post, content: value })}
      />
      <Button
        className={"green-button"}
        handleClick={() => createNewPost()}
        text={is_published ? "Update" : "Publish"}
      />
    </div>
  );
};

export default QuillJS;