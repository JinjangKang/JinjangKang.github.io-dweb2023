function typeEffect(text, i) {
    if (i < text.length) {
        if (text.charAt(i) === " ") {
            // 공백 문자일 경우 HTML entity로 변환
            document.getElementById("typing").innerHTML += "&nbsp;";
        } else {
            document.getElementById("typing").innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(function () {
            typeEffect(text, i);
        }, 300); // 각 글자가 출력되는 시간 간격 (200ms)
    }
}

window.addEventListener("load", () => {
    let moving = setTimeout(function () {
        let loadDiv = document.getElementById("load");
        loadDiv.style.backgroundPosition = "center top";
    }, 500);

    let text = "너의 이름은.";

    setTimeout(() => typeEffect(text, 0), 2000);

    setTimeout(() => {
        let wrapper = document.getElementById("wrapper");
        wrapper.classList.remove("off");
    }, 4000);

    // 로딩 화면 후 사라진 로딩 화면 뒤로 보내기
    setTimeout(() => {
        let loadDiv = document.getElementById("load");
        let typeDiv = document.getElementById("typing");
        loadDiv.style.zIndex = -1;
        typeDiv.style.zIndex = -1;
    }, 6000);
});
