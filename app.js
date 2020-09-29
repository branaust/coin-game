const isTouching = (a, b) => {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
};

const avatar = document.querySelector("#player");
const coin1 = document.querySelector("#coin1");
const coin2 = document.querySelector("#coin2");
const coin3 = document.querySelector("#coin3");
const score = document.querySelector("#score");

const moveVertical = (element, amount) => {
  const currTop = extractPos(element.style.top);
  element.style.top = `${currTop + amount}px`;
};

const moveHorizontal = (element, amount) => {
  const currLeft = extractPos(element.style.left);
  element.style.left = `${currLeft + amount}px`;
};

let total = 0;

const moveCoin1 = () => {
  const width = Math.floor(Math.random() * window.innerWidth);
  const height = Math.floor(Math.random() * window.innerHeight);
  coin1.style.top = `${height}px`;
  coin1.style.left = `${width}px`;
  console.log(total);
  score.innerText = total;
};

const moveCoin2 = () => {
  const width = Math.floor(Math.random() * window.innerWidth);
  const height = Math.floor(Math.random() * window.innerHeight);
  coin2.style.top = `${height}px`;
  coin2.style.left = `${width}px`;
  console.log(total);
  score.innerText = total;
};
const moveCoin3 = () => {
  const width = Math.floor(Math.random() * window.innerWidth);
  const height = Math.floor(Math.random() * window.innerHeight);
  coin3.style.top = `${height}px`;
  coin3.style.left = `${width}px`;
  console.log(total);
  score.innerText = total;
};

moveCoin1();
moveCoin2();
moveCoin3();

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "Down") {
    moveVertical(avatar, 50);
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    moveVertical(avatar, -50);
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    moveHorizontal(avatar, 50);
    avatar.style.transform = "scale(1,1)";
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    moveHorizontal(avatar, -50);
    avatar.style.transform = "scale(-1,1)";
  }
  if (isTouching(avatar, coin1)) {
    total += 1;
    moveCoin1();
  }
  if (isTouching(avatar, coin2)) {
    total += 3;
    moveCoin2();
  }
  if (isTouching(avatar, coin3)) {
    total += 5;
    moveCoin3();
  }
});

const extractPos = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};

if (total >= 10) {
  score.innerText.setAttribute("color", "green");
}
