function getBMI (weight, height) {
    const bmi = weight / (height * height) * 10000;
    return bmi;
}

const form = document.querySelector('form');

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const result = document.getElementById("results");
    console.log("Height is", heightInput.value);
    console.log("Weight is", weightInput.value);
    const bmi = getBMI(weightInput.value, heightInput.value);
    console.log("BMI is", bmi);
    result.innerHTML = `<p><strong>Your BMI is ${bmi.toFixed(2)}</strong></p>`;
});