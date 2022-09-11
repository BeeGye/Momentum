const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const body = document.querySelector("body");

const todayImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${todayImage}`;

body.style.backgroundImage = `url(${bgImage.src})`;
body.style.backgroundSize = "100vw 100vh";
