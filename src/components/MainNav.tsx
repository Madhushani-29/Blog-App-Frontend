import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
    const isAuthenticated  = false;
    return (
        <span>
            {isAuthenticated ? (
                <>
                    <UsernameMenu />
                </>
            ) : (
                <Button
                    variant="ghost"
                    className="font-bold hover:text-teal-700 hover:bg-white"
                    onClick={async () => {}}>
                    Log In
                </Button>
            )}
        </span>
    )
}

export default MainNav;