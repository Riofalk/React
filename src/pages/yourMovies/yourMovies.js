import "./yourMovies.css";
import React, { useState, useEffect} from "react";

function YourMovies({ data }) {
  const [tableData, setTableData] = useState(data.filter(isInCart));

  function removeItemFromCart(film) { 
    const searchIndex = data.findIndex((object) => object.name === film.name)
    data[searchIndex].inCart = false;
    data[searchIndex].stock++;
    setTableData(data.filter(isInCart))
  }

  return (
    <>
      <div className="yourMovies-container">
        <h1 className="yourMovies-title">Your movies</h1>
        <table className="yourMovies-table">
          <TableHeader/>
          <tbody>
            {tableData.map((film, index) => {
              
              return (
                <tr key={index} className="yourMovies-tr">
                  <td>{film.name}</td>
                  <td>{film.genre}</td>
                  <td>
                    <CreatTimeElement film={film}/>
                  </td>
                  <td>{(film.time / 12 * film.price).toFixed(2)} $</td>
                  <td>
                    <button className="remove-button" onClick={() => removeItemFromCart(film)}>Remove</button>
                  </td>
                </tr>
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

function isInCart(films) {
  return films.inCart;
}

function CreatTimeElement({film}) {
  const [time, setTime] = useState(film.time);
  const timeString = `${time}h`;
  return (
    <span className="time-element">
      <button
        className="time-btn"
        onClick={() => setTime(decrTime(time, film))}
      >
        &lt;
      </button>
      <input id="time-input" name="name" value={timeString} disabled></input>
      <button
        className="time-btn"
        onClick={() => setTime(incrTime(time, film))}
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

export default YourMovies;
