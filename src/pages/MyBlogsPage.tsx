import { useGetMyBlogs } from "@/api/MyBlogsApi";
import { Button } from "@/components/ui/button"
import { Blog } from "@/types";
import { useNavigate } from "react-router-dom"

const MyBlogsPage = () => {
  const { isLoading, blogs } = useGetMyBlogs();
  const navigate = useNavigate();

  const deleteBlog = () => {
    console.log("delete")
  }

  const updateBlog = (blog: Blog) => {
    navigate(`/update-blog/${blog._id}`, { state: blog });
  }

  const navigateNewBlogs = () => {
    navigate("/create-blog");
  }

  return (
    <>
      <div className="flex mb-4">
        <div className="md:w-5/6 h-12">
          <h2 className="text-3xl font-bold">My Blogs</h2>
        </div>
        <div className="md:w-1/6 h-12">
          <Button className="bg-teal-700 ml-5" onClick={navigateNewBlogs}>Create New Blog</Button>
        </div>
      </div>

      {isLoading ?
        <>Loading</> :
        blogs?.map((blog: Blog) => {
          return (
            <div id={blog._id} className="bg-teal-100 p-10 rounded-lg md:flex gap-20 mb-10">
              <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <figcaption className="px-4 pb-5 text-4xl text-black italic font-bold bottom-30">
                  <p>{blog.title}</p>
                </figcaption>
                <a href="#">
                  <img className="rounded-lg pb-5" src={blog.imageUrl} alt="location image" />
                </a>

              </figure>
              <div className="w-full h-full">
                <p className="font-sans ... pt-12">{blog.content}</p>
                <div className="md:flex gap-10 mr-10">
                  <div className="w-5/6 h-12">
                  </div>
                  <div className="flex w-1/6 h-12">
                    <Button className="mr-3 bg-blue-800" onClick={() => updateBlog(blog)}>Update</Button>
                    <Button className="bg-red-600" onClick={deleteBlog}>Delete</Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default MyBlogsPage