import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { auth } from "@/config/firebase-config";

const MainNav = () => {
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
        <span>
            {user ? (
                <>
                    <UsernameMenu logout={logout}/>
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