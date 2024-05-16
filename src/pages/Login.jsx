import { useAuth } from "../providers/AuthContext";

const Login = () => {
  const auth = useAuth();

  const handleLogin = () => {
    auth.login();
  };

  return (
    <div>
      <button className="bg-slate-500 p-2 rounded text-white" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;