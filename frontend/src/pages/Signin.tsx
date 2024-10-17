import { AuthForSignin } from "../components/AuthForSignin"
import { Quote } from "../components/Quote"

export const Signin = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <AuthForSignin />
            <Quote />
        </div>
        
    </div>
}