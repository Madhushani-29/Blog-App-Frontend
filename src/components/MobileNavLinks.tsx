import { Link } from "react-router-dom";
import { Button } from "./ui/button";
type Props = {
    logout: () => void;
}

const MobileNavLinks = ({ logout }: Props) => {
    return (
        <>
            <Link
                to="/user-profile"
                className="flex bg-white items-center font-bold hover:text-teal-700"
            >
                User Profile
            </Link>
            <Link to="/blogs" className="font-bold hover:text-teal-700">
                Read Blogs
            </Link>
            <Link
                to="/my-blogs"
                className="flex bg-white items-center font-bold hover:text-teal-700"
            >
                My Blogs
            </Link>
            <Button
                onClick={logout}
                className="flex items-center px-3 font-bold hover:bg-gray-500"
            >
                Log Out
            </Button>
        </>
    );
};

export default MobileNavLinks;