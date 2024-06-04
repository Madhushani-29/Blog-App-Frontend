import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import BlogPage from "./pages/BlogPage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import MyProfilePage from "./pages/MyProfilePage";
import MyBlogsPage from "./pages/MyBlogsPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import UpdateBlogPage from "./pages/UpdateBlogPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout showHero><HomePage /></Layout>} />
            <Route path="/login" element={<Layout><LoginPage /></Layout>} />
            <Route path="/register" element={<Layout ><RegisterPage /></Layout>} />
            <Route element={<ProtectedRoutes />}>
                <Route
                    path="/blogs"
                    element={<Layout><BlogPage /></Layout>}
                />
                <Route
                    path="/user-profile"
                    element={<Layout><MyProfilePage /></Layout>}
                />
                <Route
                    path="/my-blogs"
                    element={<Layout><MyBlogsPage /></Layout>}
                />
                <Route
                    path="/create-blog"
                    element={<Layout><CreateBlogPage /></Layout>}
                />
                <Route
                    path="/update-blog/:id"
                    element={<Layout><UpdateBlogPage /></Layout>}
                />
            </Route>
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default AppRoutes;