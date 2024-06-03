import { CircleUserRound } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { auth } from "@/config/firebase-config";

type Props={
    logout:()=>void;
}

const UsernameMenu = ({logout}:Props) => {
    const user = auth.currentUser;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-teal-700 gap-2">
                <CircleUserRound className="text-teal-700" />
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link to="/user-profile" className="font-bold hover:text-teal-700">
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Link to="/my-posts" className="font-bold hover:text-teal-700">
                        My Posts
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Button
                        onClick={logout}
                        className="flex flex-1 font-bold bg-teal-700"
                    >
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UsernameMenu;