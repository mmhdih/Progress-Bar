const bar = document.querySelector(".bar");

setTimeout(() => {
  bar.style.setProperty("--progress", "100%");
}, 500);