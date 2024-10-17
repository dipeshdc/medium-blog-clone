import { AuthForSignup } from "../components/AuthForSignup"
import { Quote } from "../components/Quote"

export const Signup = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <AuthForSignup />
            <Quote />
        </div>
        
    </div>
}