import { useCreateMyUser } from '@/api/MyUserApi';
import { auth } from '@/config/firebase-config';
import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const AuthCallbackPage = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;
    const { createUser } = useCreateMyUser();
    const hasCreatedUser = useRef(false);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const firstName = params.get("firstName") || "";
        const lastName = params.get("lastName") || "";
        const email = params.get("email") || "";
        const uid = params.get("uid") || "";
        createUser({ firstName, lastName, email, uid });
        hasCreatedUser.current = true;
        navigate("/login");
    }, [createUser, navigate, user, location.search]);

    return (
        <>Loading...</>
    )
}

export default AuthCallbackPage;