let water = 0;

function calculateBMI() {
    let h = document.getElementById("height").value / 100;
    let w = document.getElementById("weight").value;

    if (h > 0 && w > 0) {
        let bmi = (w / (h * h)).toFixed(1);
        document.getElementById("bmi").innerHTML = "BMI: " + bmi;
    } else {
        document.getElementById("bmi").innerHTML = "Enter valid values";
    }
}

function drinkWater() {
    water++;
    document.getElementById("water").innerHTML = water + " Glasses";
}
