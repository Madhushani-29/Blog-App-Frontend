import { useGetPublicBlogs } from "@/api/PublicBlogsApi"
import { Separator } from "@/components/ui/separator";
import { PopulatedBlog } from "@/types";
import user from "../assets/user.jpg";

const BlogPage = () => {
  const { isLoading, publicBlogs } = useGetPublicBlogs();

  if (isLoading) {
    return (
      <div>Loading</div>
    )
  }
  return (
    publicBlogs?.map((blog: PopulatedBlog) => {
      return (
        <div className="bg-teal-100 p-10 rounded-lg mt-10">
          <div className="flex mb-5">

            <img className="w-[55px] h-[55px] rounded-full mr-5"
              src={blog.user.imageUrl ? blog.user.imageUrl : user}
              alt="Rounded avatar" />
            <div className="">
              <p className="font-sans ... text-2xl text-black italic font-bold ">{blog.user.firstName}</p>
              <p className="font-sans ... text-sm text-black italic font-bold ">{blog.user.email}</p>
            </div>
          </div>
          <Separator className="bg-teal-600" />
          <div id={blog._id} className="md:flex gap-20 mb-10 mt-3">
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
            </div>
          </div>
        </div>
      )
    }
    )
  )
}


export default BlogPage