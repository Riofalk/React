import './App.css';
import { useState, useRef,useEffect } from "react";
import {Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navigation from "./components/navigation/navigation.js";
import Home from "./pages/home/home.js"
import Login from "./pages/login/login.js"
import Profile from "./pages/profile/profile.js"
import YourMovies from "./pages/yourMovies/yourMovies.js"
import NoPage from "./pages/noPage/noPage.js"
import Footer from "./components/footer/footer.js"

let list = [
  { id: 0, name: '9 Songs', genre: 'Action', price: 5.99 , stock: 2, inCart: true, time: 12},
  { id: 1, name: 'The Lord of the Rings', genre: 'Action', price: 5.12 , stock: 1, inCart: false, time: 12},
  { id: 2, name: 'The Terminator ', genre: 'Action', price: 5.92 , stock: 0, inCart: false, time: 12},
  { id: 3, name: 'Cube ', genre: 'Action', price: 5.69 , stock: 1, inCart: false, time: 12},
  { id: 4, name: 'The Matrix Reloaded', genre: 'Action', price: 5.52 , stock: 0, inCart: false, time: 12},
  { id: 5, name: 'Harold and Maude', genre: 'Action', price: 52.99 , stock: 4, inCart: false, time: 12},
  { id: 6, name: 'Back to the Future Part III', genre: 'Action', price: 5.52 , stock: 2, inCart: false, time: 12},
  { id: 7, name: 'Amadeus', genre: 'Action', price: 5.39 , stock: 1, inCart: false, time: 12},
];

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState("");

  useEffect(() => {
    if (localStorage.getItem("currentUser") === null) {
      navigate('/login', { replace: true })
    };
    setData(list) 
  }, []);
  
  // if(useFirstRender()) setData(list)
  const checkIfLoggedIn = () => {
    const routes = ["/home","/yourmovies","/profile"];
    return routes.includes(location.pathname)
  }

  return (
    <>
    <div className='app-container'>
      <h1 className='title'>Movie rental</h1>
      {checkIfLoggedIn() && <Navigation/>}
        <Routes>
          <Route path="/">
            <Route path="home" element={<Home data={data} setData={setData} />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="yourmovies" element={<YourMovies data={data} setData={setData}/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>    
    </div>
    <Footer/>
    </>
  );
}

export default App;
