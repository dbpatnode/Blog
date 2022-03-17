import { useRouter } from "next/router";
import { supabase } from "../../utils/supabaseClient";
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

const defaultPost = {
  title: "default title2",
  is_published: false,
  content: "this is some content",
  excerpt: "dsajfksadjhf",
};

export default function Posts({ posts }) {
  const router = useRouter();

  async function createPost(router) {
    const { data, error } = await supabase.from("posts").insert(defaultPost);

    if (data[0].id) {
      router.push(`/Posts/${data[0].id}`);
    }
  }

  return (
    <div className="top-margin">
      <h1>Published Blogs</h1>
      <div className="center">
        <Button
          className={"blue-button"}
          handleClick={() => createPost(router)}
          text={"Create New Post"}
        />
      </div>
      <PostPreview posts={posts} />
    </div>
  );
}
