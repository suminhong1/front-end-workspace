import React, { useEffect, useState } from "react";
import "../css/MatchingBoard.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Date from "../components/Date";
import { getPost } from "../api/post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/qiri",
});

export const getPosts = async () => {
  return await instance.get("/public/post");
};

export const getComments = async () => {
  return await instance.get("/comments");
};

const DetailView = ({ selectedPostSEQ }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState([]);

  const openModal = (imageIndex) => {
    setSelectedImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(0);
    setIsModalOpen(false);
  };

  const postAPI = async () => {
    const result = await getPost(selectedPostSEQ);
    setPost(result.data);
  };

  const commentsAPI = async () => {
    const result = await getComments();
    setComments(result.data);
  };

  useEffect(() => {
    console.log(selectedPostSEQ);
    commentsAPI();
    postAPI();
  }, [selectedPostSEQ]);

  const images = ["", "", ""];
  return (
    <>
      <div className="board-detail" key={post?.postSEQ}>
        <div className="board-header">
          <div className="board-header-time">3분전</div>
          <div className="titleNickname">
            <div className="title">{post?.postTitle}</div>
          </div>
          <div className="board-header-main">
            <div className="profile">
              <img src="" alt="프로필 이미지" className="profileImg" />
              <img src="" alt="유저 인기도" className="profileLike" />
            </div>
            <span className="nickname">{post?.userInfo?.userNickname}</span>
            <div className="board-image-main">
              <div className="board-image">
                {images.map((imageSrc, index) => (
                  <img
                    key={index}
                    src={imageSrc}
                    alt={`이미지 ${index + 1}`}
                    onClick={() => openModal(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="write-board">
          <div className="write">
            {post?.postContent}
            <a href="#" className="comment-count">
              <FontAwesomeIcon icon={faMessage} />
              <div className="count">0</div>
            </a>
          </div>
        </div>
        <div className="board-foot">
          <div className="board-foot-tag">
            <p className="foot-tag-type">#빡겜지향</p>
            <p className="foot-tag-type">#외향적</p>
            <p className="foot-tag-type">#직장인</p>
          </div>
          <div className="foot-place-detail">
            <p>{post?.placeSeq?.placeName}</p>
            <p>{post?.placeSeq?.placeType?.placeTypeName}</p>
          </div>
        </div>
        <hr />
        <div className="comment">
          <textarea placeholder="댓글달기"></textarea>
          <button>
            <FontAwesomeIcon icon={faArrowTurnDown} rotation={90} />
          </button>
        </div>
        <hr />
        {comments.map((co) => (
          <div className="commentList">
            <div comment-profile>
              <img alt="프로필 이미지" />
              <div comment-profile-nickname>닉네임</div>
            </div>
            <div className="comment-content" key={co.commentsSeq}>
              {co.commentDesc}
            </div>
            <hr />
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="Matching-modal-overlay">
          <div className="Matching-modal">
            {/* 왼쪽 화살표 */}
            <div
              onClick={() => {
                if (selectedImageIndex > 0) {
                  setSelectedImageIndex(selectedImageIndex - 1);
                }
              }}
              className="arrow-button left-arrow"
            >
              &lt;
            </div>
            <Carousel
              showArrows={false} // 이미지 클릭으로 넘기기 기능을 비활성화
              selectedItem={selectedImageIndex}
              dynamicHeight={true}
              showThumbs={false}
            >
              {images.map((imageSrc, index) => (
                <div key={index}>
                  <img src={imageSrc} alt={`이미지 ${index + 1}`} />
                </div>
              ))}
            </Carousel>
            {/* 오른쪽 화살표 */}
            <div
              onClick={() => {
                if (selectedImageIndex < images.length - 1) {
                  setSelectedImageIndex(selectedImageIndex + 1);
                }
              }}
              className="arrow-button right-arrow"
            >
              &gt;
            </div>
            <div onClick={closeModal} className="close-button">
              &times;
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const MatchingBoard = () => {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPostSEQ, setSelectedPostSEQ] = useState(null); // 선택된 게시물의 postSEQ를 저장

  const postsAPI = async () => {
    const result = await getPosts();
    setPosts(result.data);
  };

  const toggleModal = (postSEQ) => {
    setSelectedPostSEQ(postSEQ); // 선택된 게시물의 postSEQ를 설정
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    postsAPI();
  }, []);

  return (
    <>
      <div className="main-content">
        <main className="main">
          <div className="select-bar">
            <div className="active-button">
              <a href="#" className="active">
                전체
              </a>
            </div>
          </div>
          <section className="section">
            {posts.map((po) => (
              <div
                onClick={() => toggleModal(po.postSEQ)}
                className="board"
                key={po.postSEQ}
              >
                {/* 이 부분에서 게시물 클릭 시 toggleModal 함수 호출, postSEQ를 전달 */}
                <div className="board-header">
                  <div className="board-header-time">
                    <Date postDate={po.postDate} />
                  </div>
                  <div className="titleNickname">
                    <div className="title">{po.postTitle}</div>
                  </div>
                  <div className="board-header-main">
                    <div className="profile">
                      <img src="" alt="프로필 이미지" className="profileImg" />
                      <img src="" alt="유저 인기도" className="profileLike" />
                    </div>
                    <span className="nickname">{po.userInfo.userNickname}</span>
                    <div className="board-image-main">
                      <div className="board-image">
                        <img src="" />
                        <img src="" />
                        <img src="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="write-board">
                  <div className="write">
                    {po.postContent}
                    <a href="#" className="comment-count">
                      <FontAwesomeIcon icon={faMessage} />
                      <div className="count">0</div>
                    </a>
                  </div>
                </div>
                <div className="board-foot">
                  <div className="board-foot-tag">
                    <p className="foot-tag-type">#빡겜지향</p>
                    <p className="foot-tag-type">#외향적</p>
                    <p className="foot-tag-type">#직장인</p>
                  </div>
                  <div className="foot-place-detail">
                    <p>{po.placeSeq.placeName}</p>
                    <p>{po.placeSeq.placeType.placeTypeName}</p>
                  </div>
                </div>
              </div>
            ))}
            {isOpen && (
              <div className="Matching-modal-main">
                <div className="Matching-modal-overlay">
                  <div className="Matching-modal">
                    <div className="close-button" onClick={closeModal}>
                      &times;
                    </div>
                    <DetailView selectedPostSEQ={selectedPostSEQ} />
                  </div>
                </div>
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
};
export default MatchingBoard;
