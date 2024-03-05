
const countAll = () => {
    kl = document.getElementById('kl')
    heit = document.getElementById('heit')
    const onlyKL1 = heit.value * 0.01 / 1
    const onlyKL2 = onlyKL1 * onlyKL1
    const BMI = kl.value / onlyKL2

    if (kl.value) {
        if (BMI <= 18) {
            document.getElementById('countAll').innerHTML = 'Thin weight'
        }
        else if (BMI <= 24.9) {
            document.getElementById('countAll').innerHTML = 'Perfect weight'
        }
        else if (BMI <= 29.9) {
            document.getElementById('countAll').innerHTML = "Overweight"
        }
        else if (BMI <= 34.9) {
            document.getElementById('countAll').innerHTML = "Obesity first degree"
        }
        else if (BMI <= 39.9) {
            document.getElementById('countAll').innerHTML = "Second degree obesity"
        }
        else if (BMI > 40) {
            document.getElementById('countAll').innerHTML = "Dangerously obese"
        }

        document.getElementById('countkl').innerHTML = Math.floor(BMI);
    } else {
        document.getElementById('countkl').innerHTML = 'Please Enter Correct Numbers'
    }

}