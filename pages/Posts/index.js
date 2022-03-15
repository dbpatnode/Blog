// import { useState} from 'react'
// import { getPosts } from '../../lib/Posts'
// import { Spinner } from '../../components/Spinner'
import { useRouter } from "next/router";
import PostPreview from "../../components/PostPreview";
import styles from "../../styles/Home.module.css";
import { supabase } from "../../utils/supabaseClient";

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
  title: "default title",
  is_published: false,
  content: "this is some content",
  // slug: "",
  excerpt: "dsajfksadjhf",
};

export async function createPost(router) {
  const { data, error } = await supabase.from("posts").insert(defaultPost);

  if (data[0].id) {
    router.push(`/Posts/${data[0].id}`);
  }
}

export default function Posts({ posts }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1>Published Blogs</h1>
      <PostPreview posts={posts} />
      <button type="button" onClick={() => createPost(router)}>
        {" "}
        Create New Post{" "}
      </button>
    </div>
  );
}
