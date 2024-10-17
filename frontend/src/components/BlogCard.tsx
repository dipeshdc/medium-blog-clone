import { Link } from "react-router-dom";

interface BlogCardProps{
    id: string;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps ) => {
    return <Link to={`/blog/${id}`}>
       <div className="border-b border-slate-400 pb-4 p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
           <div className="flex flex-col justify-center">
                <Avatar name={authorName} />
           </div>
           <div className="pl-2 text-sm flex flex-col justify-center">{authorName}</div>
           <div className="flex flex-col justify-center pl-2">
                <Circle />
           </div>
           <div className="pl-2 font-thin text-sm flex flex-col justify-center">{publishedDate}</div>  
        </div>
        <div className="font-semibold text-xl pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,155) + "..."}
        </div>
        <div className="font-thin text-slate-400 text-sm pt-4">
            {Math.ceil(content.length/100) + " min read"}
        </div>
    </div>
    </Link>
  
}

export function Avatar({ name, size="small" }: {name: string, size?: "small" | "big"}){
    return <div className={`relative inline-flex items-center justify-center ${size==="small"? "w-5 h-5" : "w-8 h-8"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className={`font-medium ${size==="small"? "text-xs" : "text-2xl"} text-gray-600 dark:text-gray-300`}>{name[0].toUpperCase()}</span>
    </div>
    
}

function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-400">

    </div>
}