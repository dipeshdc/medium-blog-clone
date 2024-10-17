import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { BLogSkeleton } from "../components/BlogSkelton";

export const Blog = () => {
    const { id } = useParams();
    const { blog, loading } = useBlog({ id: id || "" });
    if(loading || !blog ){
        return <div>
            <BLogSkeleton />
        </div>
    }

    return <div>
        <FullBlog blog={blog} />
    </div>
}