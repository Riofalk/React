import "./home.css"
import React, { useState } from 'react';
import notInStockImg from "../../assets/not_available.png"
import inStockImg from "../../assets/available.png"

function home({ data, setData }) {
  const rent = (film) => {
    console.log(film)
    if(!film.stock & !film.inCart) return 

    const newData = [ ...data ]
    const newFilm = newData.find((item) => item.id === film.id)

    if (newFilm.inCart) {
      newFilm.stock++
      setData(newData)
    } else {
      newFilm.stock--
      setData(newData)
    }
  }

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
            {data && data.map((film, index) => {
              let notInStock = !film.stock && !film.inCart ? "not-available": "";
              let rented = film.inCart && !notInStock ? "rented": "";
              let classes = `rent-button ${notInStock} ${rented}`;

              return (
                <tr className="movie-table-tr" key={index}>
                  <td>{film.name}</td>
                  <td>{film.genre}</td>
                  <td>{film.price}$</td>
                  <td>{film.stock}</td>
                  <td><img src={film.stock <= 0 ? notInStockImg: inStockImg} alt=""></img></td>
                  <td><button className={classes} onClick={() => rent(film)}>Rent</button></td>
                </tr>
            )})}
          </tbody>
        </table>
      </div>  
    </>
  );
}

export default home;