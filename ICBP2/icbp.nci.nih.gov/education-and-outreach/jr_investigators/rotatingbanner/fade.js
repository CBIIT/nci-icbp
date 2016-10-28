fadeTimer = new Array();
fadeOpacity = new Array();
fadeInterval = 50; //time between steps in millisec
fadeIncrement = 5; //% opacity change at each step, must be integer {1-100}
//total animation time = fadeInterval*ceil(100/fadeIncrement)

function fade(id,dir,fadeInterval,fadeIncrement) {
//id is id of element to fade
//dir is 1 for in, -1 for out
//interval is time between updates
//increment is amount of change each update
obj=document.getElementById(id);

if ((fadeTimer[id])||(dir==1&&obj.style.display=='none')||(dir==-1&&obj.style.display=='block')) {
if (fadeTimer[id]) {
fadeTimer[id]=window.clearInterval(fadeTimer[id]);
}
else {
if (dir==1) {
fadeOpacity[id]=fadeIncrement;
}
else {
fadeOpacity[id]=100-fadeIncrement;
}
}

obj.style.opacity = fadeOpacity[id]/100;
obj.style.filter = 'alpha(opacity='+fadeOpacity[id]+')';
obj.style.display='block';
fadeTimer[id]=self.setInterval('fadeUpdate("'+id+'",'+dir+','+fadeIncrement+');',fadeInterval);
}
}

function fadeUpdate(id,dir,fadeIncrement) {
//id is id of element to fade
//dir is 1 for in, -1 for out
//increment is amount of change each update
obj=document.getElementById(id);

if (dir==1&&fadeOpacity[id]+fadeIncrement>=100) {
obj.style.opacity = 1;
obj.style.filter = 'alpha(opacity=100)';
fadeTimer[id]=window.clearInterval(fadeTimer[id]);
delete(fadeTimer[id]);
delete(fadeOpacity[id]);
}
else if (dir==-1&&fadeOpacity[id]-fadeIncrement<=0) {
obj.style.display = 'none';
obj.style.opacity = 1;
obj.style.filter = 'alpha(opacity=100)';
fadeTimer[id]=window.clearInterval(fadeTimer[id]);
delete(fadeTimer[id]);
delete(fadeOpacity[id]);
}
else {
fadeOpacity[id]=fadeOpacity[id]+(fadeIncrement*dir);
obj.style.opacity = fadeOpacity[id]/100;
obj.style.filter = 'alpha(opacity='+fadeOpacity[id]+')';
}
}