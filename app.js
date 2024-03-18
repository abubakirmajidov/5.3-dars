let div = document.querySelector("div");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

let date = new Date().getHours();

setInterval(() => {
  h1.textContent = new Date().toLocaleTimeString();
  div.setAttribute("class", "image");
  if (date >= 6 && date <= 10) {
    div.style.backgroundImage = "url('./images/tong_img.jpg')";
  } else if (date >= 11 && date <= 15) {
    div.style.backgroundImage = "url('./images/kun_img.jpg')";
    div.style.color = "yellow";
  } else if (date >= 16 && date <= 18) {
    div.style.backgroundImage = "url('./images/tush_img.jpg')";
  } else if (date >= 20 && date <= 23) {
    div.style.backgroundImage = "url('./images/tong_img.jpg')";
  } else if (date >= 0 && date < 5) {
    div.style.backgroundImage = "url('./images/kech_img.webp')";
  }
}, 1000);

setInterval(() => {
  h2.textContent = new Date().toLocaleDateString();
}, 1000);
