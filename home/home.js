let indexList = document.getElementById("index").getElementsByTagName("li");

for (let i = 0; i < indexList.length; i++) {
    indexList[i].addEventListener("click", function () {
        let link = this.getAttribute("data-link");
        location.href = link;
    });
}

let pageChangeEffecter = (poster) => {
    const sha = document.getElementById("sha");
    sha.classList.add("go_front");

    poster.style.animation = "zoomIn 2s forwards";
    let link = poster.getAttribute("data-link"); // 이미지를 클릭했을 때 이동할 페이지 URL

    setTimeout(() => {
        sha.classList.add("shasha");
    }, 800);
    setTimeout(() => {
        window.location.href = link; // 페이지 이동
    }, 2000);
};

let moviePoster = document
    .getElementById("posters")
    .getElementsByTagName("img");

[...moviePoster].forEach((element) => {
    element.addEventListener("click", () => pageChangeEffecter(element));
});
