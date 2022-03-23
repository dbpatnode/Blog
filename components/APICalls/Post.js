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

export async function createPost(title, content, excerpt, router) {
  if (!title || !content) return;
  // const user = supabase.auth.user();
  // const id = uuid();
  // post.id = id;
  // let is_published = true;
  const { data } = await supabase
    .from("posts")
    .insert([{ title, content, excerpt, is_published: true }])
    //  user_id: user.id, user_email: user.email }])
    .single();
  router.push(`/Posts/${data.id}`);
}

export async function updatePost(id, title, content, excerpt, router) {
  console.log("were being called");
  // console.log(post);
  const { data, error } = await supabase
    .from("posts")
    .update({ title, content, excerpt })
    .eq("id", id);
  // .match({ id });

  console.log("data: ", data);
  console.log("error: ", error);
  router.push(`/Posts/${id}`);
}
