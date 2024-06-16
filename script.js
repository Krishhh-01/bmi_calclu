
let name, age, h, w, a, h2, t, roll, sugg, x, m1, m2, m3, m4, f, fat, k;

document.getElementById('calc').hidden = true; // hide the calculation area 

const load = () => {
    name = document.getElementById('name').value.trim();//store name value.
    age = document.getElementById('age').value.trim();//store age value.
    h = document.getElementById('height').value.trim();//store height value.
    w = document.getElementById('weight').value.trim();//store weight value.
    a = document.getElementById('ans');
    roll = document.getElementById('croller');
    sugg = document.getElementById('suggest');
    m1 = document.getElementById('1');
    m2 = document.getElementById('2');
    m3 = document.getElementById('3');
    m4 = document.getElementById('4');
    fat = document.getElementById('fat');

    if (name.length == "") {
        m1.innerText = "Name required !";
        m1.style.fontSize = "small";
        m1.style.color = "red";
    } else if (age.length == "") {
        m2.innerText = "Age required !";
        m2.style.fontSize = "small";
        m2.style.color = "red";
    } else if (h.length == "") {
        m3.innerText = "Height required !";
        m3.style.fontSize = "small";
        m3.style.color = "red";
    } else if (w.length == "") {
        m4.innerText = "Weight required !";
        m4.style.fontSize = "small";
        m4.style.color = "red";
    } else {
        document.getElementById('form').hidden = true; // form will hide.
        document.getElementById('calc').hidden = false; // mainly we hide calc but here will display.
        k = h * 0.3048; //converting feet into meter.
        h2 = Math.pow(k, 2); // square of meter height.
        t = parseFloat(w / h2).toFixed(2); // the calculation of BMI and for only two decimal numbers after point.
        a.innerHTML = t; // display BMI report.
    }

    document.getElementById('name').addEventListener("input", () => {
        m1.innerText = "";
    });
    document.getElementById('age').addEventListener("input", () => {
        m2.innerText = "";
    });
    document.getElementById('height').addEventListener("input", () => {
        m3.innerText = "";
    });
    document.getElementById('weight').addEventListener("input", () => {
        m4.innerText = "";
    });
    x = Math.floor(21.5 * h2); //calculation for suggested weight

    // f = Math.ceil(((1.20 * t) + (0.23 * age)) - 10.8); // calculation for body fat
    f = parseFloat(((1.20 * t) + (0.23 * age)) - 10.8).toFixed(2); // calculation for body fat
    fat.innerText = f + "%"; //display body fat

    //below if..else is for color line.
    if (t < 18.5) {
        roll.innerText = "Underweight";
        roll.style.backgroundColor = "yellow";
        roll.style.color = "black";
        roll.style.left = "0";


        sugg.innerText = x + "Kg"; // display suggested weight
    } else if (t > 18.5 && t < 24.9) {
        roll.innerText = "Normal";
        roll.style.backgroundColor = "green";
        roll.style.color = "white";
        roll.style.left = "3.8rem";

        sugg.innerText = "--";
    } else if (t > 25.0 && t < 29.9) {
        roll.innerText = "Overweight";
        roll.style.backgroundColor = "orange";
        roll.style.left = "8.3rem";

        sugg.innerText = x + "Kg";
    } else {
        roll.innerText = "Obesity";
        roll.style.backgroundColor = "red";
        roll.style.color = "white";
        roll.style.left = "15rem";
        sugg.innerText = x + "Kg";
    }

}
const re = () => {
    document.getElementById('form').hidden = false; //form will display. 
    document.getElementById('calc').hidden = true; //calc will hide.
    name = document.getElementById('name').value = ""; // when return the form name field will empty
    age = document.getElementById('age').value = ""; // when return the form age field will empty
    h = document.getElementById('height').value = ""; // when return the form height field will empty
    w = document.getElementById('weight').value = ""; // when return the form weight field will empty
}
