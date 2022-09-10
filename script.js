const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hr = document.querySelector(".hr");

setInterval(function () {
  let time = new Date();
  let secs = time.getSeconds() * (360 / 60); //360 degrees divided by seconds
  let mins = time.getMinutes() * (360 / 60); //360 degrees divided by minutes
  let hrs = time.getHours() * (360 / 12); //360 degrees divided by hours

  sec.style.transform = `rotateZ(${secs}deg)`;
  min.style.transform = `rotateZ(${mins}deg)`;
  hr.style.transform = `rotateZ(${hrs + mins / 12}deg)`;
});
