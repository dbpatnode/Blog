import { useRouter } from "next/router";
import Button from "../Button.js";
import TextEditor from "./TextEditor.js";
import TextInputs from "./TextInputs";
import { createPost, updatePost } from "../APICalls/Post";

const Form = ({ post, setPost, onChange }) => {
  const router = useRouter();

  const { title, content, excerpt, is_published, id } = post;

  return (
    <div>
      <TextInputs onChange={onChange} excerpt={excerpt} title={title} />
      <TextEditor content={content} setPost={setPost} post={post} />
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
