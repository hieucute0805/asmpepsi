
// index.html
var open = document.getElementById("barIcon");
var close = document.getElementById("closeIcon");
var itemPlaced = document.getElementById("ItemAlign");
var changE = document.getElementById("CImage");
var BackGroundChange = document.getElementById("Mainbody");
var MyVideo = document.getElementById("OnVideo");
var CloseButton = document.getElementById("Close");
var MyVideoA = document.getElementById("OnVideoA");
var CloseButtonA = document.getElementById("CloseA");
var ZeroPepsiShowA = document.getElementById("ImageZeroA");
var ZeroPepsiShowB = document.getElementById("ImageZeroB");
var ZeroPepsiShowC = document.getElementById("ImageZeroC");

function Close() {
  open.style.display = "none";
  close.style.display = "block";
  itemPlaced.style.textAlign = "center";
}

function Open() {
  open.style.display = "block";
  close.style.display = "none";
}
function Change(anything) {
  changE.src = anything;
}
function ColorChange(anything) {
  BackGroundChange.style.background = anything;
}

function OpenTheVideo(anything) {
  MyVideo.style.display = "block";
  CloseButton.style.display = "block";
  MyVideo.src = anything;
}

function OpenTheVideoA(anything) {
  MyVideoA.style.display = "block";
  CloseButtonA.style.display = "block";
  MyVideoA.src = anything;
}

function CloseTheVideo() {
  CloseButton.style.display = "none";
  MyVideo.style.display = "none";
  MyVideo.src = null;
}

function CloseTheVideoA() {
  CloseButtonA.style.display = "none";
  MyVideoA.style.display = "none";
  MyVideoA.src = null;
}

function ZeroDisplay(anything) {
  ZeroPepsiShowB.style.display = "block";
  ZeroPepsiShowA.style.display = "none";
}

function ZeroDisplayB(anything) {
  ZeroPepsiShowC.style.display = "block";
  ZeroPepsiShowB.style.display = "none";
}

function ZeroDisplayC(anything) {
  ZeroPepsiShowC.style.display = "none";
  ZeroPepsiShowA.style.display = "block";
}

AOS.init({
  duration: 1000
});