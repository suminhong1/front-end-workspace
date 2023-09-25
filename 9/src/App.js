import { useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const Home = ({ list, deleteBeverage }) => {
  console.log(list);
  const onClick = (event) => {
    console.log(event.target.id);
    deleteBeverage(event.target.id);
  };
  return (
    <table border="1" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr></tr>
      </thead>
    </table>
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
      title: "어쩔탱ㅋㅋ",
      desc: "안물ㅋㅋ ",
    },
  ]);
  const addBeverage = (title, desc) => {
    const newBeverage = { id, title, desc };
    setBeverages([...beverages, newBeverage]);
    setId(id + 1);
  };

  const deleteBeverage = () => {
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
          <Link to="/">추가</Link>
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
