import landing from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { auth } from "@/config/firebase-config";

const HomePage = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;
    const navigateNextPage = () => {
        if (user) {
            navigate("/blogs");
        } else {
            navigate("/register");
        }
    }

    return (
        <div className='flex flex-col gap-12'>
            <div className='bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
                <h1 className="text-5xl font-bold tracking-tight text-teal-700">Wanderlust Chronicles: Global Adventure Stories</h1>
                <span className="text-xl px-10">Dive into Wanderlust Diaries for captivating global adventure stories, travel tips, and destination guides. Join us as we explore unique cultures, breathtaking landscapes, and unforgettable journeys around the world. Your adventure begins here!</span>
                <Button
                    className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded md:mx-80 mx-20  mb-10 h-14 text-2xl"
                    onClick={navigateNextPage}>
                    {user ? "Read Blogs" : "Join Us"}
                </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landing} alt="mobile preview image" className="ml-10" />
                <div className="flex flex-col items-center justify-center gap-4 text-center ">
                    <span className="font-bold text-3xl tracking-tighter">
                        Your Mobile Travel Companion!
                    </span>
                    <span>
                        Get the WanderEase App for seamless travel planning and personalized recommendations on the go.
                    </span>
                    <img src={appDownload} alt="Playstore apple store" />
                </div>
            </div>
        </div>
    )
}

export default HomePage