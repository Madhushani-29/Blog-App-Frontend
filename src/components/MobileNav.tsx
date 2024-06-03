import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet';
import { CircleUserRound, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import MobileNavLinks from './MobileNavLinks';
import { useNavigate } from 'react-router-dom';
import { auth } from "@/config/firebase-config";

const MobileNav = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;

    const navigateLoginPage = () => {
        navigate("/login");
    }

    const logout=()=>{
        auth.signOut();
        navigateLoginPage();
    }

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className='text-teal-700' />
            </SheetTrigger>
            <SheetContent className='space-y-4'>
                <SheetTitle>
                    {user ? (
                        <span className="flex items-center font-bold gap-2">
                            <CircleUserRound className="text-teal-700" />
                            {user.email}
                        </span>
                    ) : (
                        <span> Welcome to MernEats.com!</span>
                    )}
                </SheetTitle>
                <Separator />
                <SheetDescription className='flex flex-col gap-4'>
                    {user ? (
                        <MobileNavLinks logout={logout}/>
                    ) : (
                        <Button
                            onClick={navigateLoginPage}
                            className="flex-1 font-bold bg-teal-700"
                        >
                            Log In
                        </Button>
                    )}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;