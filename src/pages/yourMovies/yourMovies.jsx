import "./yourMovies.css";
import React, { useState} from "react";

function YourMovies({data}) {
  let userData = JSON.parse(localStorage.getItem("currentUser"));
  let userFilms = userData.moviesInTheCart;
  const [tableData, setTableData] = useState(userFilms);

  return (
    <>
      <div className="yourMovies-container">
        <h1 className="yourMovies-title">Your movies</h1>
        {tableData.length === 0 && <h1 className="yourMovies-title">Empty</h1>}
        <table className="yourMovies-table">
          {tableData.length !== 0 && <TableHeader/>}
          <tbody>
            {tableData?.map((film, index) => {
              return (
                <TableRow key={index} film={film} data={data} setTableData={setTableData}/>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

function TableHeader() {
  return (
    <>
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Time</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
    </>
  );
}

function TimeElement({film, setTableData}) {
  const [time, setTime] = useState(film.time);
  const timeString = `${time}h`;
  return (
    <span className="time-element">
      <button
        className="time-btn"
        onClick={() => setTime(decrTime(time, film, setTableData))}
      >
        &lt;
      </button>
      <input id="time-input" name="name" value={timeString} disabled></input>
      <button
        className="time-btn"
        onClick={() => setTime(incrTime(time, film, setTableData))}
      >
        &gt;
      </button>
    </span>
  );
}

function incrTime(time, film) {
  time = parseInt(time);
  if (time >= 168) return time;
  time += 12;
  film.time +=12;
  return time;
}

function decrTime(time, film) {
  time = parseInt(time);
  if (time <= 12) return time;
  time -= 12;
  film.time -=12;
  return time;
}

function TableRow({film, setTableData, data}) {
  return (
  <tr className="yourMovies-tr">
  <td>{film.name}</td>
  <td>{film.genre}</td>
  <td>
    <TimeElement film={film}/>
  </td>
  <td>{(film.time / 12 * film.price).toFixed(2)} $</td>
  <td>
    <button className="remove-button" onClick={() => removeItemFromCart(film, data, setTableData)}>Remove</button>
  </td>
</tr>
)}

function removeItemFromCart(film, data, setTableData) { 
  let userData = JSON.parse(localStorage.getItem("currentUser"));
  let userFilms = userData.moviesInTheCart;
  const searchIndex = userFilms.findIndex((object) => object.name === film.name)
  let newUserFilms = [...userFilms]
  newUserFilms.splice(searchIndex ,1)
  data[film.id].stock++;
  localStorage.setItem("currentUser", JSON.stringify ({...userData, moviesInTheCart: newUserFilms}))
  setTableData(newUserFilms);
}

export default YourMovies;
