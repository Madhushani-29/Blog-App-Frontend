import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
    
    const navigate = useNavigate();
    
    const isAuthenticated = false;

    const navigateLoginPage = () => {
        navigate("/login");
    }

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
                    onClick={navigateLoginPage}>
                    Log In
                </Button>
            )}
        </span>
    )
}

export default MainNav;