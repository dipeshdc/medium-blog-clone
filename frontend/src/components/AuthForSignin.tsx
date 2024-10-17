import { Link, useNavigate } from "react-router-dom"
import { LabelledInput } from "./LabelledInput"
import { SigninInput } from "@dipeshdc/medium-common"
import { useState } from "react"
import  axios  from "axios"
import { BACKEND_URL } from "../config"

export const AuthForSignin = () => {
    const [postInputs, setPostInputs] = useState<SigninInput>({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    
    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs);
            const token = response.data;
            localStorage.setItem("token", token);
            navigate("/blogs"); 
        }catch(e){
            alert("Error popped")
        }
    }
    
    return <div className="h-screen flex justify-center items-center">
        <div >
            <div className="text-4xl font-bold w-[383px] text-center">
                Welcome Back
            </div>
            <div className="font-semibold text-center text-gray-500 mt-2">
                Don't have account
                <Link className="underline pl-2" to={"/signup"}>Signup</Link>
            </div>

            <div className="pt-6">
                <LabelledInput label="Email" placeholder="Enter your email" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        email: e.target.value
                    })
                }} />
                <LabelledInput label="Password" type={"password"} placeholder="Enter your password" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} />

                <button type="button" onClick={sendRequest} className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 f font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 ">Sign In</button>
            </div>
        </div>
    </div>
}