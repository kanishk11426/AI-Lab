// calculates the electricity bill 

function bill() {

    const units = document.getElementById("units").value;
    const rate = document.getElementById("rate").value;
    const checkbox = document.getElementById("discount");
    const puke = document.getElementById("output");

    console.log(units, rate);
    console.log(checkbox);
    const total = units * rate;
    
    puke.innerHTML =`
        <h3>The no. of units are : ${units}</h3>
        <h3>The rate is : ${rate}</h3>
        <h3>The no. of units are : ${total}</h3>
    `
    if (checkbox.checked) {
        puke.innerHTML = `
            <h3>The discount is applied.</h3>
        `
    }
};