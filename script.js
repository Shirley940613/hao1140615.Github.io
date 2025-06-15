// 切換畫面
function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// 預設顯示首頁
showSection('home');

// 首頁輪播
const homeImgs = document.querySelectorAll("#home .carousel-img");
const homePrev = document.querySelector("#home .prev-btn");
const homeNext = document.querySelector("#home .next-btn");
let homeIndex = 0;

function showHomeImg(i) {
    homeImgs.forEach(img => img.classList.remove("active"));
    homeImgs[i].classList.add("active");
}

homePrev.onclick = () => {
    homeIndex = (homeIndex - 1 + homeImgs.length) % homeImgs.length;
    showHomeImg(homeIndex);
};
homeNext.onclick = () => {
    homeIndex = (homeIndex + 1) % homeImgs.length;
    showHomeImg(homeIndex);
};

// 新消息輪播
const newsImgs = document.querySelectorAll("#news .carousel-img");
const newsPrev = document.querySelector("#news .prev-btn");
const newsNext = document.querySelector("#news .next-btn");
let newsIndex = 0;

function showNewsImg(i) {
    newsImgs.forEach(img => img.classList.remove("active"));
    newsImgs[i].classList.add("active");
}

newsPrev.onclick = () => {
    newsIndex = (newsIndex - 1 + newsImgs.length) % newsImgs.length;
    showNewsImg(newsIndex);
};
newsNext.onclick = () => {
    newsIndex = (newsIndex + 1) % newsImgs.length;
    showNewsImg(newsIndex);
};