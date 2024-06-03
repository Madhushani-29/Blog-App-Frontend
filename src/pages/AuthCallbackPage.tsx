import { useCreateMyUser } from '@/api/MyUserApi';
import { auth } from '@/config/firebase-config';
import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const AuthCallbackPage = () => {
    const navigate = useNavigate();
    const { createUser } = useCreateMyUser();
    const hasCreatedUser = useRef(false);
    const location = useLocation();
    const user = auth.currentUser;

    useEffect(() => {
        if (user && !hasCreatedUser.current) {
            const params = new URLSearchParams(location.search);
            const firstName = params.get("firstName") || "";
            const lastName = params.get("lastName") || "";
            const email = params.get("email") || "";
            const imageUrl = "";

            createUser({ firstName, lastName, email, imageUrl });
            hasCreatedUser.current = true;
        }
        navigate("/login");
    }, [createUser, location.search, navigate, user]);

    return (
        <>Loading...</>
    )
}

export default AuthCallbackPage;