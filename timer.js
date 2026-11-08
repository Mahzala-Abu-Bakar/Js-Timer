// 1. naming-variables
let min = 0;
let sec = 0;
let ms = 0;
let clock = null;

function tick() {
    ms++;

    // settingvalues here
    if (ms == 100) {
        ms = 0;
        sec++;
    }
    if (sec == 60) {
        sec = 0;
        min++;
    }

    // 2. naming loop variables name...
    let output = "";
    let loopCount = 0;

    while (loopCount < 3) {
        let currentNum = ms; // Default-milliseconds
        if (loopCount == 0) currentNum = min;
        if (loopCount == 1) currentNum = sec;

        if (currentNum < 10) {
            currentNum = "0" + currentNum;
        }

        output += currentNum;

        // Adding a colon between numbers
        if (loopCount < 2) {
            output += " : ";
        }

        loopCount++;
    }

    // 3. dispalying on website-page
    timerDisplay.innerHTML = output;
}

// Button controls
startbtn.onclick = function () {
    if (clock !== null) clearInterval(clock);
    clock = setInterval(tick, 10);
};

stopbtn.onclick = function () {
    clearInterval(clock);
};

resetbtn.onclick = function () {
    clearInterval(clock);
    min = 0;
    sec = 0;
    ms = 0; // Reset values back to 0
    timerDisplay.innerHTML = "00 : 00 : 00";
};
