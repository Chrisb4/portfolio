var headers = document.getElementsByTagName('h1');
headers[0].classList.add('blink')
var didScroll = false;
window.onscroll = scrollCheck;
function scrollCheck() {
  didScroll = true;
}
function setBlink(){
  var y = window.scrollY;
  if (y < 125) {
    headers[0].classList.add('blink');
    headers[1].classList.remove('blink');
    headers[2].classList.remove('blink');
  } else if (y > 125 && y < 450) {
    headers[0].classList.remove('blink');
    headers[1].classList.add('blink');
    headers[2].classList.remove('blink');
  } else if (y > 450) {
    headers[0].classList.remove('blink');
    headers[1].classList.remove('blink');
    headers[2].classList.add('blink');
  }
}
setInterval(function() {
  if(didScroll) {
    didScroll = false;
    setBlink();
  }
}, 100);
