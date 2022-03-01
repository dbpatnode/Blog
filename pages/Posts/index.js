import { useState, useEffect } from 'react'
import { getPosts } from '../../lib/Posts'
import { Spinner } from '../../components/Spinner'
import PostPreview from '../../components/PostPreview'
import styles from '../../styles/Home.module.css'

export default function Posts() {
    const [loading, setLoading] = useState(true)
    const [postData, setPostData] = useState(null)

    useEffect(() => {
        getPosts(setLoading, setPostData, postData)
      }, [])
    
    return (    
        <div className={styles.container}>
            <h1>Published Blogs</h1>
                {loading ? 
                    <Spinner/>
                    :
                    <PostPreview postData={postData}/>
                }
        </div>
    )
}