import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ImageSection from "@/form/UserManagementForms/ImageSelection";
import { User } from "@/types";
import { useEffect } from "react";
import LoadingButton from "@/components/LoadingButton";

const userProfileFormSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "This is not a valid email." }),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "image is required" }).optional(),
})
    .refine((data) => data.imageUrl || data.imageFile, {
        message: "Either image URL or image File must be provided",
        path: ["imageFile"],
    });

export type UserProfileFormData = z.infer<typeof userProfileFormSchema>;

type Props = {
    onSave: (userProfileData: UserProfileFormData) => void;
    currentUser: User;
    isLoading: boolean;
};

const UserProfileForm = ({ onSave, currentUser, isLoading }: Props) => {
    const form = useForm<UserProfileFormData>({
        resolver: zodResolver(userProfileFormSchema),
        defaultValues: currentUser
    });

    useEffect(() => {
        form.reset(currentUser);
    }, [currentUser, form]);

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSave)}
                className="space-y-4 bg-gray-50 rounded-lg md:p-10"
            >
                <div className="md:flex gap-4">
                    <div className="w-full md:w-1/2">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} className="bg-white" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} className="bg-white" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} className="bg-white" disabled />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <ImageSection />
                {isLoading ? (
                    <LoadingButton />
                ) : (
                    <Button type="submit" className="bg-teal-700">
                        Submit
                    </Button>
                )}
            </form>
        </Form >
    )
}

export default UserProfileForm