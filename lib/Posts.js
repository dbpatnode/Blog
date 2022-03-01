import { supabase } from '../utils/supabaseClient'

export async function getPosts(setLoading, setPostData, postData) {
    try {
        setLoading(true)
        let { data, error, status } = await supabase
          .from('posts')
          .select('*')

        if (error && status !== 406) {
          throw error
        }
        if (data) {
          setPostData({
            posts: data
            })
        }
      } catch (error) {
        alert(error.message)
      } finally {
        setLoading(false)
        return postData
      }
      
}

export function getAllPostIDs() {

  // let IDs = []
  // getPosts().posts.map(post => IDs.push(`/blog/${post.id}`))
  // return IDs
}