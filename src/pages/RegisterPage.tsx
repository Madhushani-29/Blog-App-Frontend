import { auth } from "@/config/firebase-config";
import UserRegistrationForm, { UserRegisterFormData } from "@/form/UserRegistration/UserRegistrationForm"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "sonner";

const RegisterPage = () => {
  const handleRegistration = async (userRegistrationData: UserRegisterFormData) => {
    try {
      await createUserWithEmailAndPassword(auth, userRegistrationData.email, userRegistrationData.password);
      // after successfully register the auth created in firebase config hold the data of current user
      toast.success("User registered successfully !");
      const user = auth.currentUser;
      console.log(user);
    }
    catch (error) {
      if (error instanceof Error) {
        // checks if the error object is an instance of the Error class
        // if the condition is true, it means that the error is a standard JavaScript error object, 
        // you can access its properties and methods.
        toast.error(`User registration failed: ${error.message}`);
      } else {
        toast.error("User registration failed!");
      }
      console.error("Error registering user:", error);
    }
  }

  return (
    <UserRegistrationForm onSave={handleRegistration} title="Registration" buttonText="Register" />
  )
}

export default RegisterPage;