import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchPost } from "../../components/APICalls/Post";
import PostForm from "../../components/PostForm/Form.js";

function EditPost() {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetchPost(id, setPost);
  }, [id]);

  if (!post) return null;

  function onChange(e) {
    // console.log(e);
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  }

  return (
    <div>
      <h1>Update new post</h1>
      <PostForm post={post} setPost={setPost} onChange={onChange} />
    </div>
  );
}

export default EditPost;
