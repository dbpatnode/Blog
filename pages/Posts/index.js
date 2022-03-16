import { useRouter } from "next/router";
import { supabase } from "../../utils/supabaseClient";
import PostPreview from "../../components/PostPreview";
// import styles from "../../styles/Home.module.scss";
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

// export async function createPost(router) {
//   const { data, error } = await supabase.from("posts").insert(defaultPost);

//   if (data[0].id) {
//     router.push(`/Posts/${data[0].id}`);
//   }
// }

export default function Posts({ posts }) {
  const router = useRouter();

  async function createPost(router) {
    const { data, error } = await supabase.from("posts").insert(defaultPost);

    if (data[0].id) {
      router.push(`/Posts/${data[0].id}`);
    }
  }
  return (
    <div>
      <h1>Published Blogs</h1>

      <div className="center">
        {/* <button
          type="button"
          className="blue-button"
          onClick={() => createPost(router)}
        >
          Create New Post
        </button> */}

        <Button
          className={"blue-button"}
          handleClick={() => createPost(router)}
        >
          Create New Post
        </Button>
      </div>
      <PostPreview posts={posts} />
      {/* <button
        type="button"
        className="blue-button"
        onClick={() => createPost(router)}
      >
        Create New Post
      </button> */}
    </div>
  );
}
