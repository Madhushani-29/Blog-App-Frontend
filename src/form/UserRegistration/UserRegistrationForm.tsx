import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PasswordInputField from "./PasswordInputField";
import { Link } from "react-router-dom";

const registrationFormSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "This is not a valid email." }),
    password: z.string().min(6, { message: "Password must contain at least 6 characters" }),
    confirm: z.string(),
}).refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
});

export type UserRegisterFormData = z.infer<typeof registrationFormSchema>;

type Props = {
    onSave: (userRegistrationData: UserRegisterFormData) => void;
    title?: string;
    buttonText?: string;
};

const UserRegistrationForm = ({
    onSave,
    title,
    buttonText,
}: Props) => {
    const form = useForm<UserRegisterFormData>({
        resolver: zodResolver(registrationFormSchema),
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSave)}
                className="space-y-4 bg-gray-50 rounded-lg md:p-10"
            >
                <div>
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <FormDescription>
                        Give your details to register here.
                    </FormDescription>
                </div>
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
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} type="password" className="bg-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <PasswordInputField FieldName="password" label="Password" />
                <PasswordInputField FieldName="confirm" label="Confirm Password" />
                <Button type="submit" className="bg-teal-700">
                    {buttonText}
                </Button>
                <div className="flex">
                    <p>If you are already registered,</p>
                    <Link to="/login" className="pl-2 font-bold text-teal-700">Login</Link>
                </div>
            </form>
        </Form>
    );
};

export default UserRegistrationForm;