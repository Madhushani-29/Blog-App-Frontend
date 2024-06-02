import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet';
import { CircleUserRound, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import MobileNavLinks from './MobileNavLinks';
import { useNavigate } from 'react-router-dom';

const MobileNav = () => {
    const navigate = useNavigate();

    const isAuthenticated = false;

    const navigateLoginPage = () => {
        navigate("/login");
    }

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className='text-teal-700' />
            </SheetTrigger>
            <SheetContent className='space-y-4'>
                <SheetTitle>
                    {isAuthenticated ? (
                        <span className="flex items-center font-bold gap-2">
                            <CircleUserRound className="text-teal-700" />
                            Email
                        </span>
                    ) : (
                        <span> Welcome to MernEats.com!</span>
                    )}
                </SheetTitle>
                <Separator />
                <SheetDescription className='flex flex-col gap-4'>
                    {isAuthenticated ? (
                        <MobileNavLinks />
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