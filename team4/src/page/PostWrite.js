import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
          <button>등록</button>
        </div>
      </form>
    </>
  );
};

export default PostWrite;
