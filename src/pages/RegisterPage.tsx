import UserRegistrationForm, { UserRegisterFormData } from "@/form/UserRegistration/UserRegistrationForm"

const RegisterPage = () => {
    const userRegistration=(userRegistrationData: UserRegisterFormData)=>{
        console.log(userRegistrationData);
    }

  return (
    <UserRegistrationForm onSave={userRegistration} title="Registration" buttonText="Register"/>
  )
}

export default RegisterPage;