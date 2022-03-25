import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "../Button.js";
import TextEditor from "./TextEditor.js";
import TextInputs from "./TextInputs";
import { createPost, updatePost } from "../APICalls/Post";

const Form = ({ post, setPost, onChange }) => {
  const router = useRouter();
  // const [errorMessage, setErrorMessage] = useState({
  //   excerpt: false,
  //   title: false,
  // });

  const { title, content, excerpt, is_published, id } = post;

  // const handleBlur = (e) => {
  //   const value = e.target.value.trim();
  //   console.log(value);
  //   if (!value) {
  //     setErrorMessage({ ...errorMessage, [e.target.name]: true });
  //   } else {
  //     setErrorMessage({ ...errorMessage, [e.target.name]: false });
  //   }
  // };

  return (
    <div>
      {/* <div>
        <input
          required
          name="title"
          placeholder="Title..."
          value={title}
          onChange={onChange}
          onBlur={handleBlur}
        />
        {errorMessage["title"] && (
          <div>
            <p>Title required...</p>
          </div>
        )}
        <textarea
          required
          onChange={onChange}
          name="excerpt"
          placeholder="Post description..."
          value={excerpt}
          onBlur={handleBlur}
        />
        {errorMessage["excerpt"] && (
          <div className="error">
            <p>Excerpt required...</p>
          </div>
        )}
      </div> */}
      <TextInputs onChange={onChange} excerpt={excerpt} title={title} />
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
