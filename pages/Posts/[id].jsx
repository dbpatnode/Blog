import { supabase } from '../../utils/supabaseClient'

export async function getServerSideProps({ params }) {
    const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', params.id)
    .single()

    if(error) {
        alert(error.message)
    }
    return {
        props: {
            post
        }
    }
}

export default function PostPage ({ post }) {
    const {title, content, id} = post
    return (
        <div key={id}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>    
    )
}