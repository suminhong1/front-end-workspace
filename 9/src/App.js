import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

const Home = ({ list, deleteBeverage }) => {
  console.log(list);
  const onClick = (event) => {
    console.log(event.target.id);
    deleteBeverage(event.target.id);
  };
  return (
    <table border="1" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>음료명</th>
          <th>설명</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.desc}</td>
            <td>
              <button onClick={onClick} id={item.id}>
                삭제
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const Create = ({ addBeverage }) => {
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const desc = event.target.desc.value;
    addBeverage(title, desc);
    navigate("/");
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">음료명 : </label>
        <input type="text" id="title" name="title" placeholder="음료명 입력" />
      </div>
      <div>
        <label htmlFor="desc">설명 : </label>
        <input type="text" id="desc" name="desc" placeholder="설명 입력" />
      </div>
      <input type="submit" value="추가" />
    </form>
  );
};
const App = () => {
  const [id, setId] = useState(3);
  const [beverages, setBeverages] = useState([
    {
      id: 1,
      title: "여수 윤슬 헤이즐넛 콜드브루",
      desc: "윤슬을 형상화한 헤이즐넛 콜드브루",
    },
    {
      id: 2,
      title: "아이스 오렌지 판타지 유스베리 티",
      desc: "상큼한 오렌지와 유스베리, 얼그레이 티의 조화",
    },
  ]);

  const addBeverage = (title, desc) => {
    const newBeverage = { id, title, desc };
    setBeverages([...beverages, newBeverage]);
    setId(id + 1);
  };

  const deleteBeverage = (id) => {
    const newList = beverages.filter((item) => item.id !== parseInt(id));
    setBeverages(newList);
  };

  return (
    <BrowserRouter>
      <h1>Cafe</h1>
      <ul>
        <li>
          <Link to="/">목록</Link>
        </li>
        <li>
          <Link to="/create">추가</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={<Home list={beverages} deleteBeverage={deleteBeverage} />}
        />
        <Route path="/create" element={<Create addBeverage={addBeverage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
