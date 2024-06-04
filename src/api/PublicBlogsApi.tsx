import { PopulatedBlog } from "@/types";
import { auth } from "@/config/firebase-config";
import { useQuery } from "react-query";
import { toast } from "sonner";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetPublicBlogs = () => {
    const getPublicBlogsRequest = async (): Promise<PopulatedBlog[]> => {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            throw new Error("No authenticated user found");
        }
        const token = await currentUser.getIdToken();

        const response = await fetch(`${VITE_API_BASE_URL}/api/public/blogs`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch blogs");
        }

        return response.json();
    };

    const {
        data: publicBlogs,
        isLoading,
        error,
    } = useQuery("fetchPublicBlogs", getPublicBlogsRequest);

    if (error) {
        toast.error(error.toString());
    }

    return { publicBlogs, isLoading };
};