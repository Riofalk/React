import './navigation.css'
import { Link } from "react-router-dom";


function navigation() {
    return (
        <>
          <nav className='nav-container'>
            <ul className='nav-ul-left'>
              <Link to="/home">Home</Link>
              <Link to="/yourmovies">Your Movies</Link>
              <Link to="/profile">Profile</Link>
            </ul>
            <ul className='nav-ul-right'>
              <Link to="/login" onClick={logOut}>Log Out</Link>
            </ul>
          </nav>
        </>
    );
  }

  function logOut() {
    localStorage.removeItem("currentUser");
  }
  
  export default navigation;