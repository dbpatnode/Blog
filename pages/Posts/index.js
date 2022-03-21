import { useRouter } from "next/router";
import { supabase } from "../../utils/supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import PostPreview from "../../components/PostPreview";
import Button from "../../components/Button.js";

export async function getStaticProps() {
  const { data: posts, error } = await supabase.from("posts").select("*");

  if (error) {
    alert(error.message);
  }
  return {
    props: {
      posts,
    },
  };
}

export default function Posts({ posts }) {
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
