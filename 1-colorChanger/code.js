const canvas = document.querySelectorAll(".button");
console.log("Canvas is", canvas);
canvas.forEach((element) => {
    element.addEventListener("click", function () {
    document.body.style.backgroundColor = this.id;
  });
});