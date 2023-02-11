const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

var hotimg = document.getElementById('hotimg');

var amt = -10;
window.addEventListener("wheel", function (event) {
  if (event.deltaY < 0) {
    // up
    amt += 0.07;
    amt = clamp(amt, -15, 0);
    hotimg.style.cssText = 'transform: translateX(-5vw) skewX('+amt.toString()+'deg) rotateY('+amt.toString()+'deg);';
  } else if (event.deltaY > 0) {
    // down
    amt -= 0.07;
    amt = clamp(amt, -15, 0);
    hotimg.style.cssText = 'transform: translateX(-5vw) skewX('+amt.toString()+'deg) rotateY('+amt.toString()+'deg);';
  }
});
