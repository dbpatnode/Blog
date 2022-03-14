// import { useState} from 'react'
// import { getPosts } from '../../lib/Posts'
// import { Spinner } from '../../components/Spinner'
import PostPreview from '../../components/PostPreview'
import styles from '../../styles/Home.module.css'
import { supabase } from '../../utils/supabaseClient'


export async function getStaticProps() {
 
    const { data: posts, error } = await supabase
    .from('posts')
    .select('*')

    if(error) {
        alert(error.message)
    }
    return {
        props: {
            posts
        }
    }
}

export default function Posts({ posts }) {
    return (    
        <div className={styles.container}>
            <h1>Published Blogs</h1>
            <PostPreview posts={posts}/>
        </div>
    )
}