import React from 'react'
import Posts from '../components/Posts'
import { supabase } from '../utils/supabaseClient'

// export async function getStaticProps(){
//   const {data: posts, error} = await supabase.from('posts').select('*')
  
//   if(error) {
//     throw new Error(error)
//   }
//   return {
//     props: {
//       posts
//     }
//     }
//   }

export default function Home({posts}) {

  // console.log(posts)

  return (
    <div>
      {/* {console.log(posts)} */}
      <Posts/>
    </div>
  )
}
