import { useRouter } from "next/router";
import { supabase } from "../../utils/supabaseClient";
import Button from "../../components/Button.js";

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

export async function updatePost(id, router) {
  const { data, error } = await supabase
    .from("posts")
    .update({ is_published: true })
    .eq("id", id);

  console.log(error);
  router.push("/Posts");
}

export async function deletePost(id, router) {
  const { data, error } = await supabase.from("posts").delete().eq("id", id);
  return router.push("/Posts");
}

export default function PostPage({ post }) {
  const router = useRouter();
  const { title, content, id, is_published } = post;

  return (
    <div className="center column-container top-margin" key={id}>
      <h2>{title}</h2>
      <p>{content}</p>
      <span>
        <Button
          className={"green-button"}
          handleClick={() => updatePost(id, router)}
          text={is_published ? "Update" : "Publish"}
        />
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
