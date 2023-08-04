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
