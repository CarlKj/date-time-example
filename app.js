let time = new Date();
let countdown = false;
let countdownTime = 0;
document.getElementById("ymd").innerHTML = `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`;
document.getElementById("hms").innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

setInterval(function () {
    time = new Date();
    if (!countdown) {
        document.getElementById("hms").innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        document.getElementById("ymd").innerHTML = `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`;
    }else{
        countdownfunc();
    }
}, 1000);

document.getElementById("submit").addEventListener('click', function () {
    console.log(document.getElementById("date").valueAsNumber - time.getTime());
    countdownDate = document.getElementById("date").valueAsNumber;
    document.getElementById("hms").style.display = 'none';
    document.getElementById("ymd").innerHTML = "";
    document.getElementById("hms").innerHTML = "";
    countdown = true;
});

let deafult = "";
let settings = false;
document.getElementById("settings").addEventListener('click', function () {
    document.getElementById("settingscontainer").style.display = (settings ? "none" : "flex");
    console.log(`${(settings ? "none" : "block")}  ${settings}`)
    settings = !settings;
});
var body = document.getElementsByTagName('body')[0];
document.getElementById("bgOff").addEventListener('click', function () {
    body.style.backgroundImage = 'url(clockstransparent.png)';
    body.style.boxShadow = '0 0 1000px 8px rgba(0, 0, 0, 0.267) inset';
   // document.getElementById("colors").style.display = 'none';
});
document.getElementById("bgOn").addEventListener('click', function () {
    body.style.backgroundImage = 'url()';
    body.style.boxShadow = '0 0 0 0 #000';
  //  document.getElementById("colors").style.display = 'flex';
});

var color;

color = document.querySelector("#color");
color.value = "#8CDECF";
color.addEventListener("input", updateFirst, false);
color.select();

function updateFirst(event) {
    body.style.backgroundColor = event.target.value;
}

function countdownfunc() {
    countdownTime = (countdownDate - time.getTime());
    if (countdownTime < 0) {
        document.getElementById("hms").innerHTML = "eoooe";
    } else {
        var countdownPrint = ""
        var d = Math.floor(countdownTime / (1000 * 60 * 60 * 24));
        var h = Math.floor((countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((countdownTime % (1000 * 60)) / 1000);
        if (d > 0) {
            if (d == 1) {
                countdownPrint += `${d} Day, `;
            } else {
                countdownPrint += `${d} Days, `;
            }
        }
        if (h > 0) {
            if (h == 1) {
                countdownPrint += `${h} Hour, `;
            } else {
                countdownPrint += `${h} Hours, `;
            }
        }
        if (m > 0 || h > 0) {
            if (m == 1) {
                countdownPrint += `${m} Minute, `;
            } else {
                countdownPrint += `${m} Minutes, `;
            }
        }
        if (s > 0 || d > 0) {
            if (s == 0) {
                countdownPrint += `${s + 1} Second `;
            } else {
                countdownPrint += `${s + 1} Seconds `;
            }
        }
        document.getElementById("hms").innerHTML = countdownPrint;
        if (document.getElementById("hms").style.display == 'none') {
            document.getElementById("hms").style.display = 'block';
        }
    }
}