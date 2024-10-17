import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"


export const FullBlog = ({blog} : {blog: Blog}) => {
    return<div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-400 pt-2">
                        Posted on 5 December, 2024
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 ml-3">
                    <div className="text-md text-slate-600">
                        Author
                    </div>
                    <div className="flex pt-4">
                        <div className="pr-2 flex flex-col justify-center">
                            <Avatar size={"big"} name={blog.author.name} />
                        </div>
                        <div>
                            <div className="text-lg font-bold">
                                {blog.author.name}
                            </div>
                            <div>
                                Random catch about the author to attract the audience to the blog
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}