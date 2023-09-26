import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

const list = () => {
  const [id, id] = useState([]);
  const [title, title] = useState([]);
  const [Genre, Genre] = useState([]);
  const [release_date, release_date] = useState([]);
  {
    id:"1",
    title:"Movie1",
    Genre:"Drama",
    release_date:"2020-02-01",
  }
  return (
    <>
      <div className="list">
        <h1>Movies</h1>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Title</td>
              <td>Genre</td>
              <td>Release Date</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Movie</td>
              <td>Drama</td>
              <td>2022-02-01</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
const AddNewMovie = () => {
  return (
    <>
      <div className="addMovie">
        <h1>Create Movie</h1>
        <form>
          <input className="add" type="text" placeholder="Input movie id" />
          <input className="add" type="text" placeholder="Input movie title" />
          <input className="add" type="text" placeholder="Input movie genre" />
          <div className="date">
            출시일 : <select className="add"></select>
          </div>
          <button className="add" type="submit">
            Add Movie
          </button>
        </form>
      </div>
    </>
  );
};

const AddMovie = () => {};
const DeleteMovie = () => {};
const App = () => {
  return (
    <BrowserRouter>
      <Link path="/" active={list}>
        <span>list</span>
      </Link>
      <Link active={AddNewMovie}>
        <span>Add New Movie</span>
      </Link>
      <Routes>
        <Route action={list} DeleteMovie={DeleteMovie}></Route>
        <Route action={AddNewMovie} AddMovie={AddMovie}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
