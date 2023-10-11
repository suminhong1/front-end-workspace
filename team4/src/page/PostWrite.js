import React from "react"; // React를 임포트

const PostWrite = () => {
  return (
    <>
      <h1>글쓰기</h1>
      <form>
        <div className="subContainer">
          <div className="mainMinorSubject">
            <div className="boradContainer">
              <select></select>
            </div>
            <div className="categoryContainer">
              <select></select>
            </div>
          </div>
          <div className="checkbox"></div>
        </div>
        <div className="title">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="제목"
            maxLength="100"
          />
        </div>
        <div className="content">
          <div className="textareaContainer">
            <textarea
              name="content"
              id="editor"
              maxLength="10000000"
              style={{ display: "none" }}
            ></textarea>
          </div>
        </div>
        <div className="tags">
          <input
            type="text"
            name="tags"
            placeholder="태그"
            maxLength="100"
          ></input>
        </div>
        <div className="button">
          <button type="submit">등록</button>{" "}
          {/* 버튼 타입을 submit으로 변경 */}
        </div>
      </form>
    </>
  );
};

export default PostWrite;
