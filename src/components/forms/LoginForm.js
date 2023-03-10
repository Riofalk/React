import { useNavigate } from "react-router-dom";
import "./forms.css";

function LoginForm() {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/home");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;
    let allUsers = JSON.parse(localStorage.getItem("users"));

    let foundUser = allUsers.find((user) => user.email === email);

    if (foundUser !== undefined && foundUser.password === password) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
    }
    redirect();
  };

  return (
    <div className="sign-in-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            className="main-input"
            type="email"
            name="email"
            placeholder="email@accenture.com"
          />
        </label>

        <label htmlFor="password">
          Password
          <input className="main-input" type="password" name="password" />
        </label>
        <div className="button-container">
          <button className="sign-in">Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
