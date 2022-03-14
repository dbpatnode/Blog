// import { supabase } from "../../utils/supabaseClient"

// export default function Login () {

//     async function handleSubmit(e) {
//         e.preventDefault()
//         const email = e.target.email.value
        
//         await supabase.auth.signIn({ email })

//     }

//     return (
//         <div>
//             <h1>Login</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="email">Email</label>
//                 <input type="email" id="email" name="email"/>
//                 <button type="submit">Log In</button>
//             </form>
//         </div>    
//     )
// }

import { supabase } from "../../utils/supabaseClient"

export default function Login () {

    async function handleSubmit(e) {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.email.password
        
        const { data, error } = await supabase.auth.signIn({
            email,
            password,
          })
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
        </div>    
    )
}