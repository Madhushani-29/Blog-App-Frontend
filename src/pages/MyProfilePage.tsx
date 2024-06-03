import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi"
import UserAvatar from "../assets/user-avatar-image.png";
import UserProfileForm from "@/form/UserManagementForms/UserProfileForm";

const MyProfilePage = () => {
    const { isLoading:getUserLoading, currentUser } = useGetMyUser();
    const {isLoading:updateUserLoading, updateUser}=useUpdateMyUser();

    if (getUserLoading) {
        return (
            <div>Loading</div>
        );
    }

    if (!currentUser) {
        return <span>Unable to load the user...</span>
    }

    return (
        <div className="bg-teal-50 rounded-lg py-10">
            <div>
                <h2 className="text-2xl font-bold text-center ">My Profile</h2>
            </div>

            <div className="md:flex md:justify-center gap-10 mt-10">
                <img className="w-40 h-40 md:w-80 md:h-80 rounded-full md:ml-10 md:mt-10"
                    src={currentUser?.imageUrl ? currentUser.imageUrl : UserAvatar}
                    alt="Rounded avatar"></img>
                <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={updateUserLoading} />
            </div>
        </div>
    )
}

export default MyProfilePage