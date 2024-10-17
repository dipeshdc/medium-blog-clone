import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"


export const Appbar = () => {
    return <div className="border-b flex justify-between items-center px-10 py-6 mx-2">
        <Link to="/blogs">
            <div className="flex flex-col justify-center">
                Medium
            </div>
        </Link>
        <div className="flex">
            <div className="flex flex-col justify-center">
                <Link to={"/publish"} >
                   <button type="button" className="mr-4 m-1 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Create</button>
                </Link>
            </div>
           <div className="flex flex-col justify-center">
                {<Avatar size="big" name={"Dipesh"} />}
           </div>
        </div>
    </div>
}