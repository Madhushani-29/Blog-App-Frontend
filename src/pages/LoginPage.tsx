import { auth } from "@/config/firebase-config";
import UserLoginForm, { UserLoginFormData } from "@/form/UserManagementForms/UserLoginFrom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LoginPage = () => {
  const navigate = useNavigate();

  const userLogin = async (userLoginData: UserLoginFormData) => {
    try {
      await signInWithEmailAndPassword(auth, userLoginData.email, userLoginData.password);
      toast.success("User login successful !");
      const user = auth.currentUser;
      if (user) {
        navigate("/blogs");
      }
      else {
        toast.error("Error occurs during login !");
      }
    }
    catch (error) {
      if (error instanceof Error) {
        toast.error(`User login failed: ${error.message}`);
      } else {
        toast.error("User login failed!");
      }
      console.error("Error login user:", error);
    }
  }

  return (
    <UserLoginForm onSave={userLogin} buttonText="Login" title="Login" />
  )
}

export default LoginPage