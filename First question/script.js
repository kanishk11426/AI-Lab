function bill() {

    const units = document.getElementById("units").value;
    const rate = document.getElementById("rate").value;
    const puke = document.getElementById("output");

    console.log(units, rate);

    puke.innerHTML =`
        <h3>The no. of units are : ${units}</h3>
        <h3>The rate is : ${rate}</h3>
        <h3>The no. of units are : ${units * rate}</h3>
    `
};