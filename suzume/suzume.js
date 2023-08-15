let indexList = document.getElementById("index").getElementsByTagName("li");

for (let i = 0; i < indexList.length; i++) {
    indexList[i].addEventListener("click", function () {
        let link = this.getAttribute("data-link");
        location.href = link;
    });
}

//BGM Controls
let bgmCtrl = document.getElementById("bgmCtrl");
let bgm = document.getElementById("bgm");
let bgmName = document.getElementById("bgmName");
let playState = false;

bgmCtrl.addEventListener("click", function () {
    if (playState === false) {
        bgm.play();
        bgmCtrl.src = "../src/pause.png";
        playState = true;
    } else {
        bgm.pause();
        bgmCtrl.src = "../src/play.png";
        // bgmName.style.stopColor();
        playState = false;
    }
});

let bgChanger = document
    .getElementById("backgroundChanger")
    .querySelector("img");
let brightness = document.getElementById("brightness");
let html = document.querySelector("html");
let bgimg = document.getElementById("bgimg");

bgChanger.addEventListener("mouseover", () => {
    document.querySelector("header").style.animation = "backViewer 1s forwards";
    document.getElementById("note1").style.animation = "backViewer 1s forwards";
    document.getElementById("note2").style.animation = "backViewer 1s forwards";
    brightness.style.animation = "backViewer 1s forwards";
});
bgChanger.addEventListener("mouseout", () => {
    document.querySelector("header").style.animation =
        "leaveViewer 1s forwards";
    document.getElementById("note1").style.animation =
        "leaveViewer 1s forwards";
    document.getElementById("note2").style.animation =
        "leaveViewer 1s forwards";
    brightness.style.animation = "leaveViewer 1s forwards";
});

let bgList = ["1.avif", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"];
let i = 0;
bgChanger.addEventListener("click", () => {
    bgimg.style.animation = "press 0.5s forwards";
    setTimeout(() => {
        bgimg.style.backgroundImage = `url(../src/suzumebg${bgList[i]})`;
    }, 500);
    setTimeout(() => {
        bgimg.style.animation = "spread 0.5s forwards";
    }, 1000);
    i == bgList.length - 1 ? (i = 0) : i++;

    // setTimeout 은 우선순위가 낮게 동작함
});
