const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

var hotimg = document.getElementById('hotimg');

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

var disabled = false;

var amt = -10;
window.addEventListener("wheel", function (event) {
  if (!disabled) {
  var left = (window.pageXOffset || html.scrollLeft) - (html.clientLeft || 0);
  var top = (window.pageYOffset || html.scrollTop)  - (html.clientTop || 0);
  if ((event.deltaY < 0) && (top !== 0)) {
    // up
    amt += 0.1;
    amt = clamp(amt, -15, -5);
    hotimg.style.cssText = 'transform: translateX(-5vw) skewX('+amt.toString()+'deg) rotateY('+amt.toString()+'deg);';
  } else if ((event.deltaY > 0) && !((window.innerHeight + document.documentElement.scrollY) >= document.body.offsetHeight)) {
    // down
    amt -= 0.1;
    amt = clamp(amt, -15, -5);
    hotimg.style.cssText = 'transform: translateX(-5vw) skewX('+amt.toString()+'deg) rotateY('+amt.toString()+'deg);';
  }
  }
});

hotimg.onclick = () => {
  hotimg.expanded = !hotimg.expanded;

  if (hotimg.expanded) {
    disabled = true;
    var tl_e = new TimelineMax();
    tl_e.from(hotimg, {
      position: 'absolute',
      transform: 'translateX(-5vw) skewX(-'+amt.toString()+'deg) rotateY(-'+amt.toString()+'deg)',
    }).to(hotimg, {
      position: 'fixed',
      border: 'none',
      transform: 'skewX(0deg) rotateY(0deg) translate(-90%, 0%)',
      borderWidth: '0px',
      ease: Expo.easeOut
    }).to(hotimg, {
      transform: 'skewX(0deg) rotateY(0deg) translate(-90%, 5%) scale(1.25)',
      ease: Circ.easeOut
    })
  } else {
    disabled = false;
    var tl_e = new TimelineMax();
    tl_e.from(hotimg, {
      position: 'fixed',
      border: 'none',
      transform: 'skewX(0deg) rotateY(0deg) translate(-90%, 5%) scale(1.25)',
      borderWidth: '0px',
    }).to(hotimg, {
      transform: 'skewX(0deg) rotateY(0deg) translate(-90%, 5%) scale(1)',
      ease: Circ.easeOut
    }).to(hotimg, {
      position: 'absolute',
      x: '-5vw',
      y: 0,
      skewX: amt,
      rotateY: amt,
      ease: Expo.easeOut
    })
  }
}
