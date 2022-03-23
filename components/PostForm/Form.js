import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "../Button.js";
import TextEditor from "./TextEditor.js";
import { createPost, updatePost } from "../APICalls/Post";

const Form = ({ post, setPost, onChange }) => {
  const router = useRouter();
  const { title, content, excerpt, is_published, id } = post;
  console.log("CONTENT FROM FORM: ", content);

  const inTheOnChange = (post) => {
    console.log(post);
  };
  return (
    <div>
      <input
        required
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={title}
      />
      <input
        required
        onChange={onChange}
        name="excerpt"
        placeholder="Excerpt"
        value={excerpt}
      />
      <TextEditor
        content={content}
        setPost={setPost}
        post={post}
        // (value) => setPost({ ...post, content: value })
      />
      {is_published ? (
        <Button
          className={"green-button"}
          handleClick={() => updatePost(id, title, content, excerpt, router)}
          text="Update"
        />
      ) : (
        <Button
          className={"green-button"}
          handleClick={() => createPost(title, content, excerpt, router)}
          text="Publish"
        />
      )}
    </div>
  );
};

export default Form;
