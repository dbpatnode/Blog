import { useRouter } from "next/router";
import { supabase } from "../../utils/supabaseClient";

export async function getServerSideProps({ params }) {
  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error) {
    alert(error.message);
  }
  return {
    props: {
      post,
    },
  };
}

export async function updatePost(id, column) {
  const { data, error } = await supabase
    .from("posts")
    .update({ is_published: true })
    .eq("id", id);

  console.log(error);
}

export async function deletePost(id, router) {
  const { data, error } = await supabase.from("posts").delete().eq("id", id);
  return router.push("/Posts");
}

export default function PostPage({ post }) {
  const router = useRouter();
  const { title, content, id } = post;
  return (
    <div key={id}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button
        type="button"
        onClick={() => {
          window.confirm("Are you sure you wish to delete this item?")
            ? deletePost(id, router)
            : onCancel("cancel");
        }}
      >
        Delete
      </button>
      <button type="button" onClick={() => updatePost(id, "is_published")}>
        Publish
      </button>
    </div>
  );
}
