import { useUpdateBlog } from "@/api/MyBlogsApi"
import BlogForm from "@/form/BlogForms/BlogForm"
import { Blog } from "@/types";
import { useLocation } from "react-router-dom";

const UpdateBlogPage = () => {
  const location=useLocation();
  const blog = location.state as Blog;
  const { isLoading, updateBlog } = useUpdateBlog();

  return (
    <BlogForm title="Update Blog" isLoading={isLoading} onSave={updateBlog} currentBlog={blog} />
  )
}

export default UpdateBlogPage