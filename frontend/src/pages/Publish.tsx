import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="max-w-screen-lg w-full">
                <input 
                   onChange={(e) => {
                    setTitle(e.target.value)
                   }}
                   className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" 
                />

                 <Content onChange={(e) => {
                    setContent(e.target.value)
                 }} />

                <button
                   onClick={async () => {
                    const res = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content
                     },{
                        headers: {
                            Authorization: "Bearer "+localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${res.data.id}`)
                   }}
                   className="mt-3 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg  dark:focus:ring-blue-900 hover:bg-blue-800">
                    Post blog
                </button>
             
                
            </div>
        </div>
    </div>
}

export function Content({onChange} : { onChange: (e:ChangeEvent<HTMLTextAreaElement>) => void}){
    return(
       <div className="mt-4">
           <div className=" bg-white  ">
               <textarea 
                  onChange={onChange}
                  rows={8} 
                  className="border border-gray-300 w-full px-0 text-sm text-gray-900  dark:placeholder-gray-400" 
                  placeholder="Write a content..." required >
                </textarea>
           </div>
       </div>
    )
}