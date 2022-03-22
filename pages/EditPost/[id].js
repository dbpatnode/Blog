import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchPost } from "../../components/APICalls/Post";
import dynamic from "next/dynamic";

// import QuillJS from "../../components/TextEditors/QuillJS.js";

function EditPost() {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetchPost(id, setPost);
  }, [id]);

  if (!post) return null;

  const { title, excerpt, content } = post;
  return (
    <div>
      <h1>Update new post</h1>
      {/* <QuillJS /> */}
      {console.log(title, content, excerpt)}
    </div>
  );
}

export default EditPost;
