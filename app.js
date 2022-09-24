const container = document.querySelector(".container");
const error = document.querySelector(".error");

function getAge() {
  return document.getElementById("dob").value;
}

function calcAge() {
  const dob = getAge();
  const [years, months, days] = dob.split("-");

  const today = new Date();
  const curYear = Math.abs(today.getFullYear());
  const curMonth = Math.abs(today.getMonth() + 1);
  const curDate = Math.abs(today.getDate());

  let totalYears = curYear - years;
  let totalMonths = curMonth - months;
  let totalDays = curDate - days;

  if (curMonth < months) {
    totalYears--;
    totalMonths = 12 - Math.abs(totalMonths);
  }

  if (curDate < days) {
    totalMonths--;
    totalDays = 30 - Math.abs(totalMonths);
  }

  if (new Date() - new Date(dob) < 0) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".desc").style.display = "none";
    document.querySelector(".age").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".desc").style.display = "block";
    document.querySelector(".age").style.display = "block";
  }
  return `${totalYears}-${totalMonths}-${totalDays}`;
}

function displayAge() {
  const [years, months, days] = calcAge().split("-");

  document.getElementById("years").innerText = years;
  document.getElementById("months").innerText = months;
  document.getElementById("days").innerText = days;
}

container.addEventListener("keydown", function (e) {
  if (e.key == "Enter") displayAge();
});
