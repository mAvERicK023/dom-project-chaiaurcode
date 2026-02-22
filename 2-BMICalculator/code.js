const heigh = document.getElementById("height");
const weight = document.getElementById("weight");
const form = document.querySelector('form');
    console.log("Height is", heigh.value);
    console.log("Weight is", weight.value);

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

calculateBtn.addEventListener("click", function () {
    console.log("Height is", heigh.value);
    console.log("Weight is", weight.value);
    const h = heigh.value;  
    const w = weight.value;
    const bmi = w / (h * h) * 10000;
    console.log("BMI is", bmi);
});