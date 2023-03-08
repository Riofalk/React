import "./login.css";
import { useState, useEffect } from "react";
import LoginForm from "../../components/forms/LoginForm";
import RegisterForm from "../../components/forms/RegisterForm";

function Login() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="login-page">
        <LoginForm />
        {!visible && (
          <button className="register" onClick={() => setVisible(true)}>
            Register
          </button>
        )}
        {visible && <RegisterForm />}
      </div>
    </>
  );
}

export default Login;
