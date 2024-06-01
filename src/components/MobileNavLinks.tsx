import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MobileNavLinks = () => {
    return (
        <>
            <Link
                to="/user-profile"
                className="flex bg-white items-center font-bold hover:text-teal-700"
            >
                User Profile
            </Link>
            <Link
                to="/manage-restaurant"
                className="flex bg-white items-center font-bold hover:text-teal-700"
            >
                Manage Restaurant
            </Link>
            <Link
                to="/order-status"
                className="flex bg-white items-center font-bold hover:text-teal-700"
            >
                Order Status
            </Link>
            <Button
                onClick={() => {console.log("Log out")}}
                className="flex items-center px-3 font-bold hover:bg-gray-500"
            >
                Log Out
            </Button>
        </>
    );
};

export default MobileNavLinks;