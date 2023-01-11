let myName = document.querySelector("#myName");
let myClock = document.querySelector("#myClock");
let name = prompt("kullanici adinizi giriniz");
myName.innerHTML = name ? name : "kullanici";

let day = [
  "Pazar",
  "Pazartesi",
  "Sali",
  "Carsamba",
  "Persembe",
  "Cuma",
  "Cumartesi",
];

function Clock() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let days = day[today.getDay()];
  myClock.innerHTML = `${hours} : ${minutes} : ${seconds} : ${days}`;
}

setInterval(Clock);

Clock();
