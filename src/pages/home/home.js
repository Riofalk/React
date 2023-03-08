import "./home.css"
import React, { useState } from 'react';
import notInStockImg from "../../assets/not_available.png"
import inStockImg from "../../assets/available.png"

function home({data}) {
  const results = [];
  data.forEach((film, index) => {
    let notInStock = !film.stock & !film.inCart ? "not-available": "";
    let rented = film.inCart && !notInStock ? "rented": "";
    let classes = `rent-button ${notInStock} ${rented}`;
    const [stock, setStock] = useState(film.stock);
    results.push(
      <tr className="movie-table-tr" key={index}>
        <td>{film.name}</td>
        <td>{film.genre}</td>
        <td>{film.price}$</td>
        <td>{stock}</td>
        <td><img src={film.stock ? inStockImg: notInStockImg}></img></td>
        <td><button className={classes} onClick={() => rent(film, setStock)}>Rent</button></td>
      </tr>,
    );
  });
  return (
    <>
      <div className="home-container">
        <h1 className="home-title">Available Movies</h1>
        <table className="movie-table">
          <thead className="movie-table-header">
            <tr>
              <th>Name</th>
              <th>Genre</th>
              <th>Price for 12h</th>
              <th>Stock</th>
              <th>Is in stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="movie-table-body">
            {results}
          </tbody>
        </table>
      </div>  
    </>
  );
}

function rent(film, setStock) {
  if(!film.stock & !film.inCart) return 
  if (film.inCart) {
    film.inCart = false;
    setStock(++film.stock);
  } else {
    film.inCart = true;
    setStock(--film.stock);
  }
}

export default home;