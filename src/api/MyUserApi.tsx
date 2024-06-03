import { auth } from "@/config/firebase-config";
import { User } from "@/types";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyUser = () => {

    const getMyUserRequest = async (): Promise<User> => {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            throw new Error("No authenticated user found");
        }
        const token = await currentUser.getIdToken();

        const response = await fetch(`${VITE_API_BASE_URL}/api/my/user`, {
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
        data: currentUser,
        isLoading,
        error,
    } = useQuery("fetchCurrentUser", getMyUserRequest);

    if (error) {
        toast.error(error.toString());
    }

    return { currentUser, isLoading };
};

type CreateUserRequest = {
    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
};

export const useCreateMyUser = () => {
    const createMyUserRequest = async (user: CreateUserRequest) => {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            throw new Error("No authenticated user found");
        }

        const token = await currentUser.getIdToken();
        const response = await fetch(`${VITE_API_BASE_URL}/api/my/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error("Failed to create user");
        }
    };

    const {
        mutateAsync: createUser,
        isLoading,
        isError,
        isSuccess,
    } = useMutation(createMyUserRequest);

    return {
        createUser,
        isLoading,
        isError,
        isSuccess,
    };
};

type UpdateMyUserRequest = {
    firstName: string;
    lastName: string;
    imageUrl?: string;
};

export const useUpdateMyUser = () => {
    const updateMyUserRequest = async (formData: UpdateMyUserRequest) => {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            throw new Error("No authenticated user found");
        }
        const token = await currentUser.getIdToken();

        const response = await fetch(`${VITE_API_BASE_URL}/api/my/user`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error("Failed to update user");
        }

        return response.json();
    };

    const {
        mutateAsync: updateUser,
        isLoading,
        isSuccess,
        error,
        reset,
    } = useMutation(updateMyUserRequest);

    if (isSuccess) {
        toast.success("User profile updated!");
    }

    if (error) {
        toast.error(error.toString());
        reset();
    }

    return { updateUser, isLoading };
};