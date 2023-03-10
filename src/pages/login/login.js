import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";
import RegisterForm from "../../components/forms/RegisterForm";

function Login() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const handleRegister = () => {
    // navigate('/login', { replace: true })
    setVisible(true)
  }

  return (
    <>
      <div className="login-page">
        <LoginForm />
        {!visible && (
          <button className="register" onClick={handleRegister}>
            Register
          </button>
        )}
        {visible && <RegisterForm />}
      </div>
    </>
  );
}

export default Login;
