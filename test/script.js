// script.js
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");

// 모달 열기
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// 모달 닫기
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 모달 외부 클릭 시 닫기
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// 다른 작업 수행
function doOtherTask() {
  // 여기에 다른 작업을 수행하는 코드를 추가합니다.
}

// 모달 열기 버튼 클릭 시 다른 작업 수행
openModalBtn.addEventListener("click", () => {
  doOtherTask();
});
