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

const loginFormSchema = z.object({
    email: z.string().email({ message: "This is not a valid email." }),
    password: z.string().min(6, { message: "Password must contain at least 6 characters" }),
});

export type UserLoginFormData = z.infer<typeof loginFormSchema>;

type Props = {
    onSave: (userLoginData: UserLoginFormData) => void;
    title?: string;
    buttonText?: string;
};

const UserLoginForm = ({
    onSave,
    title,
    buttonText,
}: Props) => {
    const form = useForm<UserLoginFormData>({
        resolver: zodResolver(loginFormSchema),
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
                        Give your details to login.
                    </FormDescription>
                </div>
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
                <Button type="submit" className="bg-teal-700">
                    {buttonText}
                </Button>
                <div className="flex">
                <p>If still not registered,</p>
                <Link to="/register" className="pl-2 font-bold text-teal-700">Register</Link>
                </div>
            </form>
        </Form>
    );
};

export default UserLoginForm;