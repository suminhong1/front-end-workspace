import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = ({ list, deleteMessage }) => {
  const onClick = (e) => {
    deleteMessage(e.target.id);
  };
  return (
    <>
      <h1>Messages</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Writer</th>
            <th>Message</th>
            <th>Write Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.writer}</td>
              <td>{item.message}</td>
              <td>{item.writeDate}</td>
              <td>
                <button onClick={onClick} id={item.id}>
                  Action
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Create = ({ addMessage }) => {
  const [id, setId] = useState("");
  const [writer, setWriter] = useState("");
  const [message, setMessage] = useState("");
  const [writeDate, setWriteDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (id === "" || writer === "" || message === "" || writeDate === "") {
      alert("모든 값은 반드시 입력되어야 합니다.");
      return;
    }
    addMessage(id, writer, message, writeDate);
    setId("");
    setWriter("");
    setMessage("");
    setWriteDate("");
  };
  return (
    <>
      <h1>CreateMessage</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Input message id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Input message writer"
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Input message content"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div>
          <label>작성일 : </label>
          <input
            type="date"
            value={writeDate}
            onChange={(e) => setWriteDate(e.target.value)}
          />
        </div>
        <input type="submit" value="Add Message" />
      </form>
    </>
  );
};
const App = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      writer: "Writer 1",
      message: "Message 1",
      writeDate: "2022-01-01",
    },
    {
      id: 2,
      writer: "Writer 2",
      message: "Message 2",
      writeDate: "2022-02-01",
    },
    {
      id: 3,
      writer: "Writer 3",
      message: "Message 3",
      writeDate: "2022-03-01",
    },
  ]);

  const addMessage = (id, writer, message, writeDate) => {
    const result = messages.some((item) => {
      return item.id === parseInt(id);
    });
    if (result) {
      alert("중복되는 ID 는 입력 될 수 없습니다.");
      return;
    }
    const newMessage = { id: parseInt(id), writer, message, writeDate };
    setMessages([...messages, newMessage]);
  };

  const deleteMessage = (id) => {
    const newList = messages.filter((item) => item.id !== parseInt(id));
    setMessages(newList);
  };

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">List</Link>
        </li>
        <li>
          <Link to="/create">Add New Message</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={<Home list={messages} deleteMessage={deleteMessage} />}
        />
        <Route path="/create" element={<Create addMessage={addMessage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
