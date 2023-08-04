let indexList = document.getElementById("index").getElementsByTagName("li");

for (let i = 0; i < indexList.length; i++) {
    indexList[i].addEventListener("click", function () {
        let link = this.getAttribute("data-link");
        location.href = link;
    });
}

let yourName = document
    .getElementById("posters")
    .getElementsByTagName("img")[1];

let pageChangeEffecter_YourName = () => {
    const sha = document.getElementById("sha");
    sha.classList.add("go_front");

    yourName.style.animation = "zoomIn 1.5s forwards";
    let link = yourName.getAttribute("data-link"); // 이미지를 클릭했을 때 이동할 페이지 URL

    setTimeout(() => {
        sha.classList.add("shasha");
    }, 800);
    setTimeout(() => {
        window.location.href = link; // 페이지 이동
    }, 2000);
};

yourName.addEventListener("click", pageChangeEffecter_YourName);
