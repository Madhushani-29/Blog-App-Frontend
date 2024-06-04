import { auth } from "@/config/firebase-config";
import { Blog } from "@/types";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateBlog = () => {
    const createMyBlogRequest = async (formData: FormData) => {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            throw new Error("No authenticated user found");
        }
        const token = await currentUser.getIdToken();

        const response = await fetch(`${VITE_API_BASE_URL}/api/my/blogs`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Failed to create blog");
        }

        return response.json();
    };

    const {
        mutateAsync: createBlog,
        isLoading,
        isSuccess,
        error,
        reset,
    } = useMutation(createMyBlogRequest);

    if (isSuccess) {
        toast.success("Blog created!");
    }

    if (error) {
        toast.error(error.toString());
        reset();
    }

    return { createBlog, isLoading };
};

export const useGetMyBlogs = () => {
    const getMyBlogsRequest = async (): Promise<Blog[]> => {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            throw new Error("No authenticated user found");
        }
        const token = await currentUser.getIdToken();

        const response = await fetch(`${VITE_API_BASE_URL}/api/my/blogs`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        return response.json();
    };

    const {
        data: blogs,
        isLoading,
        error,
    } = useQuery("fetchCurrentUser", getMyBlogsRequest);

    if (error) {
        toast.error(error.toString());
    }

    return { blogs, isLoading };
};

type UpdateBlogRequest = {
    formData: FormData;
    id: string;
};

export const useUpdateBlog = () => {
    const updateBlogRequest = async (updateBlogData: UpdateBlogRequest) => {
        const { id, formData } = updateBlogData;
        const currentUser = auth.currentUser;
        if (!currentUser) {
            throw new Error("No authenticated user found");
        }
        const token = await currentUser.getIdToken();

        const response = await fetch(`${VITE_API_BASE_URL}/api/my/blogs/${id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Failed to update blog");
        }
    };

    const { mutateAsync: updateBlog, isLoading, isSuccess, error, reset } = useMutation(updateBlogRequest);

    if (isSuccess) {
        toast.success("Blog updated!");
    }

    if (error) {
        toast.error(error.toString());
        reset();
    }

    return { updateBlog, isLoading };
};

export const useDeleteBlog = () => {
    const deleteBlogRequest = async (id: string) => {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            throw new Error("No authenticated user found");
        }
        const token = await currentUser.getIdToken();

        const response = await fetch(`${VITE_API_BASE_URL}/api/my/blogs/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to delete blog");
        }
    };

    const { mutateAsync: deleteBlog, isLoading, isSuccess, error, reset } = useMutation(deleteBlogRequest);

    if (isSuccess) {
        toast.success("Blog deleted!");
    }

    if (error) {
        toast.error(error.toString());
        reset();
    }

    return { deleteBlog, isLoading };
};

