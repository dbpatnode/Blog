import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "../../components/Button.js";
import parse from "html-react-parser";
import { deletePost, fetchPost } from "../../components/APICalls/Post";

export default function PostPage() {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetchPost(id, setPost);
  }, [id]);

  if (!post) return null;

  const { title, content } = post;

  return (
    <div className="top-margin post" key={id}>
      <h1 className="title">{title}</h1>
      <div className="Content">{parse(content)}</div>
      <span>
        <Link href={`/EditPost/${id}`}>Edit Post</Link>
        <Button
          className={"red-button"}
          handleClick={() => {
            window.confirm("Are you sure you wish to delete this item?")
              ? deletePost(id, router)
              : "cancel";
          }}
          text={"Delete"}
        />
      </span>
    </div>
  );
}
