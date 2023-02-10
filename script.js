var dims = {
  entrance : entrance.getBoundingClientRect().height.toString() + 'px',
  dox      : barcodeDox.getBoundingClientRect().height.toString() + 'px'
}

barcodeDox.style = 'min-height: 0px; max-height: 0px;'

portal.onmousedown = () => {
  TweenMax.to(portal, {
    scale: 0.5,
    borderWidth: '5px',
    ease: Expo.easeOut
  })
}

var toggle = false;

portal.onmouseup = () => {
  toggle = !toggle;
  
  var poop = new TimelineMax();
  poop.to(portal, {
    scale: 0.9,
    borderWidth: '30px',
    ease: Expo.easeIn
  }).to(portal, {
    scale: 0.8,
    borderWidth: '0px',
    ease: Expo.easeOut
  })

  if (toggle) {
    var shit = new TimelineMax();
    shit.to(entrance, {
      scale: 0.5,
      ease: Expo.easeOut
    }).to(entrance, {
      position: 'absolute',
      y: '-100vh',
      ease: Expo.easeOut
    }).to(barcodeDox, {
      maxHeight: dims.dox,
      minHeight: dims.dox,
      ease: Expo.easeOut
    })
  } else {
    var shit = new TimelineMax();
    shit.to(barcodeDox, {
      maxHeight: '0px',
      minHeight: '0px',
      ease: Expo.easeOut
    }).to(entrance, {
      position: 'relative',
      y: '0px',
      ease: Expo.easeOut
    }).to(entrance, {
      scale: 1,
      ease: Expo.easeOut
    })
  }
}