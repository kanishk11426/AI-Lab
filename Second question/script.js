// Maximum allowed overdue period set to 30 days
const MAX_DAYS = 30;

// Connect the button to the calculation function when clicked
document.getElementById("calculateBtn").addEventListener("click", function() {
    
    // Get the value from the input field and convert it to a number
    const daysInput = document.getElementById("daysInput").value;
    const days = parseInt(daysInput);
    
    // Get the HTML elements where we will display the results
    const validationMessage = document.getElementById("validationMessage");
    const fineCategory = document.getElementById("fineCategory");
    const countdownMessage = document.getElementById("countdownMessage");

    // Clear previous results
    validationMessage.textContent = "";
    fineCategory.textContent = "";
    countdownMessage.textContent = "";

    // 1. Validate the entered value
    if (daysInput === "" || isNaN(days) || days < 0) {
        validationMessage.textContent = "Please enter a valid, positive number of days.";
        return; // Stop the function early if input is invalid
    }

    // 2. Determine the fine category
    let category = "";
    if (days === 0) {
        category = "No fine. The book is returned on time!";
    } else if (days <= 7) {
        category = "Standard Fine: $0.50 per day.";
    } else if (days <= 14) {
        category = "Moderate Fine: $1.00 per day.";
    } else if (days <= MAX_DAYS) {
        category = "Heavy Fine: $2.00 per day + account temporary suspension.";
    } else {
        category = "Maximum Overdue Exceeded: Book considered lost. Replacement fee applied.";
    }
    
    // Display the fine category
    fineCategory.textContent = "Fine Status: " + category;

    // 3. Generate a countdown to the maximum overdue period
    if (days <= MAX_DAYS) {
        let daysLeft = MAX_DAYS - days;
        countdownMessage.textContent = "Remaining days until maximum overdue limit (" + MAX_DAYS + " days): " + daysLeft + " day(s) left.";
    } else {
        countdownMessage.textContent = "You have passed the maximum limit by " + (days - MAX_DAYS) + " day(s).";
    }
});
