import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Blog } from "@/types";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  title: z.string({ required_error: "Title name is required" }),
  content: z.string({ required_error: "Content name is required" }),
  imageUrl: z.string().optional(),
  imageFile: z.instanceof(File, { message: "image is required" }).optional(),
}).refine((data) => data.imageUrl || data.imageFile, {
  message: "Either image URL or image File must be provided",
  path: ["imageFile"],
});

type BlogFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (blogFormData: FormData) => void;
  isLoading: boolean;
  currentBlog?: Blog;
  title: string;
}

const BlogForm = ({ onSave, isLoading, currentBlog, title }: Props) => {
  const navigate = useNavigate();

  const form = useForm<BlogFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {}
  });

  useEffect(() => {
    form.reset(currentBlog);
  }, [currentBlog, form]);

  const onSubmit = async (formDataJson: BlogFormData) => {
    const formData = new FormData();
    formData.append("title", formDataJson.title);
    formData.append("content", formDataJson.content);
    if (formDataJson.imageFile) {
      formData.append(`imageFile`, formDataJson.imageFile);
    }
    try {
      await onSave(formData);
      setTimeout(() => {
        navigate("/my-blogs");
      }, 3000);
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <FormDescription>
            Create your own blog here to share with others.
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea {...field} className="bg-white resize h-60" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {currentBlog?.imageUrl && (
          <div className="bg-teal-100 rounded-lg md:w-1/3">
            <img className="object-scale-down h-48 w-96 ..." src={currentBlog?.imageUrl} alt="{currentBlog?.title}" />
          </div>
        )}
        <FormField
          control={form.control}
          name="imageFile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input
                  className="bg-white"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={(event) =>
                    field.onChange(
                      event.target.files ? event.target.files[0] : null
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className="bg-teal-700">
            Submit
          </Button>
        )}
      </form>
    </Form>
  )
}

export default BlogForm