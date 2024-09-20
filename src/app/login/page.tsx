import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="md:px-32 px-8 flex flex-col justify-center items-center gap-4 h-[calc(100vh-81px)] ">
      <h2 className="text-offwhite md:text-2xl text-xl font-medium">
        Welcome to The Blog Website
      </h2>
      <p className="text-gray-300">Please login to continue</p>
      <LoginForm />
    </div>
  );
};

export default Login;
