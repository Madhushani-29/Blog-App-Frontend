import UserRegistrationForm, { UserRegisterFormData } from "@/form/UserRegistrationForm"

const RegisterPage = () => {
    const userRegistration=(userRegistrationData: UserRegisterFormData)=>{
        console.log(userRegistrationData);
    }

  return (
    <UserRegistrationForm onSave={userRegistration} title="Register" buttonText="Register"/>
  )
}

export default RegisterPage