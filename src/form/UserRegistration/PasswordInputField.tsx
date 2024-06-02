import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye } from 'lucide-react';
import { useState } from "react";
import { EyeOff } from 'lucide-react';
import { useFormContext } from "react-hook-form";

type Props = {
    FieldName: string;
    label: string;
}

const PasswordInputField = ({ FieldName, label }: Props) => {
    const { control } = useFormContext();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <FormField
            control={control}
            name={FieldName}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <div className="relative">
                            <Input {...field} type={showPassword ? "text" : "password"}
                                className="bg-white" />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                            > {showPassword ? <Eye /> : <EyeOff />}
                            </button>
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default PasswordInputField