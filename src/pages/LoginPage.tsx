import UserLoginForm, { UserLoginFormData } from "@/form/UserRegistration/UserLoginFrom"

const LoginPage = () => {
  const userLogin=(userLoginData: UserLoginFormData)=>{
    console.log(userLoginData);
}

  return (
    <UserLoginForm onSave={userLogin} buttonText="Login" title="Login"/>
  )
}

export default LoginPage