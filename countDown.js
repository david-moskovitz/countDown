const countDown = () => {
  const input = document.getElementById("timing");
  const countDownAmount = parseInt(input.value);
  console.log(countDownAmount);
  if (countDownAmount === 0) {
    console.warn("error");
    return;
  }
  const output = document.getElementById("countDown");
  let sec = countDownAmount * 60;
  //remove a second
  //update the dom with the new value
  let intervalId;

  intervalId = setInterval(() => {
    if (sec === 0) {
      clearInterval(intervalId);
    }
    const min = Math.floor(sec / 60);
    const sec2 = Math.floor(sec - min * 60);
    output.innerHTML = `${min}:${sec2}`;
    sec--;
  }, 1000);
};
const button = document.getElementById("startButton");
button.onclick = countDown;
