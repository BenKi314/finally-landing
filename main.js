let d = new Date("Nov 15, 2022 13:37:42").getTime();
// There's no significance behind the date, I just chose one that was in the near future.

// Sorry for duplicate code! I run this code here as well as in the "loop" below because otherwise it takes a second for anything to be in the countdown tickers.
let now = new Date().getTime();

let far = d - now;

let days = Math.floor(far / (1000 * 60 * 60 * 24));
let hours = Math.floor((far % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((far % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((far % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

let x = setInterval(function() {
    // This function gets the current time and checks how far the current date is from the end date, then replaces the numbers in the countdown tickers.
    
    let now = new Date().getTime();

    let far = d - now;

    let days = Math.floor(far / (1000 * 60 * 60 * 24));
    let hours = Math.floor((far % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((far % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((far % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (far < 0) {
        // If the countdown's complete, change the text at the top.
        clearInterval(x);
        document.getElementById("bigText").innerHTML = "WE'VE FINALLY LANDED";
    }
}, 1000); // Repeat every second.
