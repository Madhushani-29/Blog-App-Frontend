import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/config/firebase-config';

const ProtectedRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (isLoading) {
        return null; 
    }

    if (isAuthenticated) {
        return <Outlet />;
    }

    return <Navigate to="/" replace />;
};

export default ProtectedRoutes;
