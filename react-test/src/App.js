import { useState } from "react";
import "./App.css";
// 6. 각 UI의 전환은 react-router-dom 라이브러리를 사용합니다.
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// 1. 모든 코드는 함수형 컴포넌트를 기반으로 합니다.
const Home = ({ list, deleteMovie }) => {
  const onClick = (e) => {
    deleteMovie(e.target.id);
  };
  return (
    <>
      <h1>Movies</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th width="80">Title</th>
            <th>Genre</th>
            <th width="120">ReleseDate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.genre}</td>
              <td>{item.releseDate}</td>
              <td>
                <button onClick={onClick} id={item.id}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Create = ({ addMovie }) => {
  // 8. 신규 등록 페이지에서 addMovie 버튼을 누르면 입력 후, 모든 입력 필드는 깨끗하게 비워주세요.
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [releseDate, setReleseDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // 9. 모든 값은 반드시 입력되어야 합니다.
    if (id === "" || title === "" || genre === "" || releseDate === "") {
      alert("모든 입력값은 반드시 입력해야 합니다!");
      return;
    }
    addMovie(id, title, genre, releseDate);
    setId("");
    setTitle("");
    setGenre("");
    setReleseDate("");
  };

  return (
    <>
      <h1>Create Movie</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Input movie id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <div>
            <input
              type="text"
              placeholder="Input movie title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Input movie genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div>
            <label>출시일 : </label>
            <input
              type="date"
              value={releseDate}
              onChange={(e) => setReleseDate(e.target.value)}
            />
          </div>
          <input type="submit" value="Add Movie" />
        </div>
      </form>
    </>
  );
};

const App = () => {
  // 3. 기능은 신규 등록(create), 목록 출력(read), 삭제(delete)를 구현합니다.
  // 7. 데이터 저장소는 객체 배열을 사용하며 state로 관리합니다.
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Movie1",
      genre: "Drama",
      releseDate: "2022-01-01",
    },
    {
      id: 2,
      title: "Movie2",
      genre: "Action",
      releseDate: "2022-02-01",
    },
    {
      id: 3,
      title: "Movie3",
      genre: "Comedy",
      releseDate: "2022-03-01",
    },
  ]);

  const addMovie = (id, title, genre, releseDate) => {
    // 10. 중복되는 ID는 입력 될 수 없습니다.
    // for (const item of movies) {
    //   if (item.id === parseInt(id)) {
    //     alert("중복되는 아이디는 입력할 수 없습니다!");
    //     return;
    //   }
    // }
    const result = movies.some((item) => {
      // 있으면 true, 없으면 false
      return item.id === parseInt(id);
    });
    if (result) {
      alert("중복되는 ID는 입력할 수 없습니다!");
      return;
    }
    const newMovie = { id: parseInt(id), title, genre, releseDate };
    setMovies([...movies, newMovie]);
  };

  const deleteMovie = (id) => {
    const newList = movies.filter((item) => item.id !== parseInt(id));
    setMovies(newList);
  };
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">List</Link>
        </li>
        <li>
          <Link to="/create">Add New Movie</Link>
        </li>
      </ul>
      <Routes>
        {/* 4. 데이터 및 데이터 관련 기능은 모두 App 컴포넌트에서 제작하여 각 컴포넌트에 필요한 항목만 전달합니다. */}
        <Route
          path="/"
          element={<Home list={movies} deleteMovie={deleteMovie} />}
        />
        <Route path="/create" element={<Create addMovie={addMovie} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
