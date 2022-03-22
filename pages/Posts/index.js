import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import PostPreview from "../../components/PostPreview";
import Button from "../../components/Button.js";
import { fetchAllPosts } from "../../components/APICalls/Post";

export default function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchAllPosts(setPosts);
  }, []);

  const router = useRouter();

  let blueButtonText = (
    <p>
      Create New Post
      <FontAwesomeIcon
        className="blue-button-plus-icon"
        icon={faCirclePlus}
        size="lg"
      />
    </p>
  );

  return (
    <div className="top-margin">
      <h1>Published Blogs</h1>
      <div className="center">
        <Button
          className={"blue-button"}
          handleClick={() => router.push(`/CreatePost`)}
          text={blueButtonText}
        />
      </div>
      <PostPreview posts={posts} />
    </div>
  );
}
