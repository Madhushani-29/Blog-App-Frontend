import { useUpdateBlog } from "@/api/MyBlogsApi"
import BlogForm from "@/form/BlogForms/BlogForm"
import { Blog } from "@/types";
import { useLocation, useParams } from "react-router-dom";

const UpdateBlogPage = () => {
  const location = useLocation();
  const blog = location.state as Blog;
  const { isLoading, updateBlog } = useUpdateBlog();
  const { id } = useParams();

  const updateBlogs = (updateFormData: FormData) => {
    if (id) {
      updateBlog({ formData: updateFormData, id });
    }
  }

  return (
    <BlogForm title="Update Blog" isLoading={isLoading} onSave={updateBlogs} currentBlog={blog} />
  )
}

export default UpdateBlogPage