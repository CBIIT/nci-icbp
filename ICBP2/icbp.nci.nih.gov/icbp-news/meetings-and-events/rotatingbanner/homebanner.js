bannerCurrent = 1;
bannerMax = 4;
bannerInterval = 8000; //time in millisec for each banner to display. 1000 = 1sec.
bannerPlay = true; //whether the banner is currently rotating (true) or paused (false)

function bannerNext() {
fade("home-banner-"+bannerCurrent,-1,fadeInterval,fadeIncrement);
document.getElementById('home-banner-nav-'+bannerCurrent).className="off";
if (bannerCurrent==bannerMax) {
bannerCurrent=1;
}
else {
bannerCurrent++;
}
fade("home-banner-"+bannerCurrent,1,fadeInterval,fadeIncrement);
document.getElementById('home-banner-nav-'+bannerCurrent).className="on";
if (bannerPlay) {
bannerTimer=window.clearInterval(bannerTimer);
bannerTimer=self.setInterval("bannerNext()",bannerInterval);
}
}

function bannerPrev() {
fade("home-banner-"+bannerCurrent,-1,fadeInterval,fadeIncrement);
document.getElementById('home-banner-nav-'+bannerCurrent).className="off";
if (bannerCurrent==1) {
bannerCurrent=bannerMax;
}
else {
bannerCurrent--;
}
fade("home-banner-"+bannerCurrent,1,fadeInterval,fadeIncrement);
document.getElementById('home-banner-nav-'+bannerCurrent).className="on";
if (bannerPlay) {
bannerTimer=window.clearInterval(bannerTimer);
bannerTimer=self.setInterval("bannerNext()",bannerInterval);
}
}

function bannerSwitch(id) {
if (0<id && id<bannerMax+1) {
fade("home-banner-"+bannerCurrent,-1,fadeInterval,fadeIncrement);
document.getElementById('home-banner-nav-'+bannerCurrent).className="off";
bannerCurrent=id;
fade("home-banner-"+bannerCurrent,1,fadeInterval,fadeIncrement);
document.getElementById('home-banner-nav-'+bannerCurrent).className="on";
if (bannerPlay) {
bannerTimer=window.clearInterval(bannerTimer);
bannerTimer=self.setInterval("bannerNext()",bannerInterval);
}
}
}

function bannerPausePlay() {
if (bannerPlay) {
bannerPlay=false;
bannerTimer=window.clearInterval(bannerTimer);
document.getElementById("home-banner-nav-pause").className="play";
document.getElementById("home-banner-nav-pause").innerHTML="Play";
}
else {
bannerPlay=true;
bannerTimer=self.setInterval("bannerNext()",bannerInterval);
document.getElementById("home-banner-nav-pause").className="pause";
document.getElementById("home-banner-nav-pause").innerHTML="Pause";
}
}