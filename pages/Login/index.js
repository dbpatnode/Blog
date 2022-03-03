import { supabase } from "../../utils/supabaseClient"

export default function Login () {
    async function handleSubmit(e) {
        e.preventDefault()
        const email = e.target.email.value
        await supabase.auth.signIn({ email })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"/>
                <button type="submit">Log In</button>
            </form>
        </div>    
    )
}