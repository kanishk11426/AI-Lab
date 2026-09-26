// calculates the electricity bill 

function bill() {

    const units = document.getElementById("units").value;
    const rate = document.getElementById("rate").value;
    const checkbox = document.getElementById("discount");
    const outputbox = document.getElementById("output");
    let total = 0;
    if (checkbox.checked){
        total = units * rate * 0.9;
    }
    else {
        total = units * rate
    }
    
    outputbox.innerHTML =`
        <h3>The no. of units are : ${units}</h3>
        <h3>The rate is : ${rate}</h3>

        ${( () => { 
            if (checkbox.checked) {
                return `Discount Applied`;
            }
            return ``
        }) ()}
        <h3>The total cost is : ${total}</h3>
    `;
}