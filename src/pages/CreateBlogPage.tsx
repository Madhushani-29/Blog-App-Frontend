import { useCreateBlog } from "@/api/MyBlogsApi";
import BlogForm from "@/form/BlogForms/BlogForm"

const CreateBlogPage = () => {
  const { isLoading, createBlog } = useCreateBlog();
  return (
    <BlogForm title="Create Blog" onSave={createBlog} isLoading={isLoading} />
  )
}

export default CreateBlogPage