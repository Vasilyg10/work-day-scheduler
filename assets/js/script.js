let currentDate = document.querySelector("#currentDay")
currentDate.innerHTML = dayjs().format("dddd, MMMM D, YYYY");
console.log(currentDate);
