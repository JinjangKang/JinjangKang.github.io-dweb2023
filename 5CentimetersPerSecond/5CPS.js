let indexList = document.getElementById("index").getElementsByTagName("li");

for (let i = 0; i < indexList.length; i++) {
    indexList[i].addEventListener("click", function () {
        let link = this.getAttribute("data-link");
        location.href = link;
    });
}
