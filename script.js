const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const timeOutput = document.querySelector("#time-output");
const time24 = document.querySelector("#time-24");
const timeText = document.querySelector("#time-text");
const textBtn = document.querySelector("#text-btn");
const digitalBtn = document.querySelector("#digital-btn");

setInterval(() => {
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  hr_rotation = 30 * hr + min / 2;
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;

  time24.innerHTML = hr + ":" + min + ':' + sec;

  let minutesArray = [
    "",
    "fem över",
    "tio över",
    "kvart över",
    "tjugo över",
    "fem i halv",
    "halv",
    "fem över halv",
    "tjugo i",
    "kvart i",
    "tio i",
    "fem i",
    "",
  ];

  let minuteText = minutesArray[Math.round(min / 5)];

  let hoursArray = [
    "tolv",
    "ett",
    "två",
    "tre",
    "fyra",
    "fem",
    "sex",
    "sju",
    "åtta",
    "nio",
    "tio",
    "elva",
    "tolv",
    "ett",
    "två",
    "tre",
    "fyra",
    "fem",
    "sex",
    "sju",
    "åtta",
    "nio",
    "tio",
    "elva",
    "tolv",
  ];

  let hourText = hoursArray[min >= 23 ? hr + 1 : hr];

  timeText.innerHTML = `${minuteText} ${hourText}`;
  
}, 1000);

digitalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (digitalBtn.textContent === "Visa i digital form") {
    digitalBtn.textContent = "Dölj i digital form";
    timeText.style.display = "none";
    time24.style.display = "inline-block";
    timeOutput.classList.add("show-output");
    textBtn.textContent = "Visa tiden i text";
  } else {
    digitalBtn.textContent = "Visa i digital form";
    timeOutput.classList.remove("show-output");
  }
});

textBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (textBtn.textContent === "Visa tiden i text") {
    textBtn.textContent = "Dölj tiden i text";
    timeText.style.display = "inline-block";
    time24.style.display = "none";
    timeOutput.classList.add("show-output");
    digitalBtn.textContent = "Visa i digital form";
  } else {
    textBtn.textContent = "Visa tiden i text";
    timeOutput.classList.remove("show-output");
  }
});
