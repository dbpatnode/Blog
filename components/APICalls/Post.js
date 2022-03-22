import { supabase } from "../../utils/supabaseClient";

export async function fetchAllPosts(setPosts) {
  const { data, error } = await supabase.from("posts").select("*");
  setPosts(data);
}

export async function fetchPost(id, setPost) {
  if (!id) return;
  const { data } = await supabase
    .from("posts")
    .select()
    .filter("id", "eq", id)
    .single();
  setPost(data);
}

export async function deletePost(id, router) {
  const { data, error } = await supabase.from("posts").delete().eq("id", id);
  return router.push("/Posts");
}

export async function updatePost(id, router) {
  const { data, error } = await supabase
    .from("posts")
    .update({ is_published: true })
    .eq("id", id);

  router.push("/Posts");
}
