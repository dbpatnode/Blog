// pages/create-post.js
import { useState } from "react";
// import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import Button from "../../components/Button.js";
import { supabase } from "../../utils/supabaseClient";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
const initialState = {
  title: "",
  is_published: false,
  content: "",
  excerpt: "",
};

function CreatePost() {
  const [post, setPost] = useState(initialState);
  const { title, content, excerpt, is_published } = post;
  const router = useRouter();
  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  }

  async function createNewPost() {
    if (!title || !content) return;
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
      <h1 className="text-3xl font-semibold tracking-wide mt-6">
        Create new post
      </h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={post.title}
        className=""
      />
      <input
        onChange={onChange}
        name="excerpt"
        placeholder="Excerpt"
        value={post.excerpt}
        className=""
      />
      <SimpleMDE
        value={post.content}
        onChange={(value) => setPost({ ...post, content: value })}
      />

      <Button
        className={"green-button"}
        handleClick={() => createNewPost()}
        text={is_published ? "Update" : "Publish"}
      />
    </div>
  );
}

export default CreatePost;
