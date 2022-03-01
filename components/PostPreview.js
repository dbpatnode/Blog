import Link from 'next/link'

const PostPreview = ({ posts }) => {
    return (
        <div>
        {posts?.map((post) => {
            const {is_published, title, content, id} = post
            return (
                is_published &&
                <div key={id}>
                    <h2><Link href={`/Posts/${id}`}>{title}</Link></h2>
                    <p>{content}</p>
                </div>     
            ) 
        })}
        </div>
    )
}

export default PostPreview