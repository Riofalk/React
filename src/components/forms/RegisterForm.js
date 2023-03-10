import { useNavigate } from "react-router-dom";
import "./forms.css";

function RegisterForm() {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/home");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let name = e.target.name.value.toLowerCase();
    let surname = e.target.surname.value.toLowerCase();
    let email = e.target.email.value;
    let emailAgain = e.target.emailAgain.value;
    let password = e.target.password.value;
    let passwordAgain = e.target.passwordAgain.value;

    let allUsers =
      JSON.parse(localStorage.getItem("users")) == null
        ? []
        : JSON.parse(localStorage.getItem("users"));

    let registartionInfo = {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      sname: surname.charAt(0).toUpperCase() + surname.slice(1),
      email: email,
      password: password,
    };

    if (name.length < 2) {
      alert("Invalid name");
      return;
    }

    if (surname.length < 2 && surname.length !== 0) {
      alert("Invalid surname");
      return;
    }

    if (allUsers?.find((e) => e.email === email)) {
      alert("Email is already taken");
      return;
    }

    if (!email) {
      alert("Email is required");
      return;
    }

    if (!(emailAgain === email)) {
      alert("Emails aren't matching");
      return;
    }

    if (!password || password.length < 6) {
      alert("invalid password/ Password is required");
      return;
    }

    if (password !== passwordAgain) {
      alert("Passwords don't match");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(registartionInfo));
    allUsers.push(registartionInfo);
    localStorage.setItem("users", JSON.stringify(allUsers));
    redirect();
  };

  return (
    <div className="sign-in-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            className="main-input"
            type="text"
            name="name"
            placeholder="name"
          />
        </label>
        <label htmlFor="surname">
          Surname
          <input
            className="main-input"
            type="text"
            name="surname"
            placeholder="Surname"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            className="main-input"
            type="email"
            name="email"
            placeholder="email@accenture.com"
          />
        </label>
        <label htmlFor="emailAgain">
          Email again
          <input
            className="main-input"
            type="email"
            name="emailAgain"
            placeholder="email@accenture.com"
          />
        </label>

        <label htmlFor="password">
          Password
          <input className="main-input" type="password" name="password" />
        </label>
        <label htmlFor="passwordAgain">
          Password again
          <input className="main-input" type="password" name="passwordAgain" />
        </label>
        <div className="button-container">
          <button className="sign-in">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
