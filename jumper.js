var c = document.getElementById('canvas');

var ctx = c.getContext('2d');


alert('This game is still in developments, there will be various bugs, this game is best adapted to google chrome browser')
alert('controls: A = move left, D = move right, Space = Jump')

//player
var pw = 30;
var ph = 30;
var px = c.width/2 - pw/2; 
var py = c.height-100-ph;

//movement authorization variables
var jump = 0;
var wait = 0;
var direction = 0;
var jumpTime = 0;
var jumpOrder = 0;

//movement scalars 
var jumpH = 5.75;
var Pspeed = 1.75;
var grav = 3;
var jumpAllocation = 80;

//motion speed
var slowmo = 3;
var slowOnce = 0;

//level designation
var level = 1;

//platform movement
var platSpeed1 = 1.75;
var platSpeed2 = 1.75;
var platSpeed3 = 1.75;
var platSpeed4 = 1.75;
var platSpeed5 = 1.75;
var platSpeed6 = 1.75;
var platSpeed7 = 1.75;
var platSpeed8 = 1.75;


//key event function
document.onkeydown = function(evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 65:
            leftArrowPressed();
            break;
        case 68:
            rightArrowPressed();
            break;
             case 32:
            spacePressed();
            break;
                case 16:
            shiftPressed();
            break;

    }
};

document.onkeyup = function(evi) {
    evi = evi || window.event;
    switch (evi.keyCode) {
        case 65:
            leftArrowstop();
            break;
        case 68:
            rightArrowstop();
            break;
             case 32:
            spacestop();
            break;
            case 16:
            shiftStopped();
            break;

    }
};

function shiftPressed() {
if(slowOnce == 0){
jumpH = jumpH/slowmo
Pspeed = Pspeed/slowmo
grav = grav/slowmo
jumpAllocation = jumpAllocation*slowmo
jumpTime = jumpTime*slowmo
platSpeed1 = platSpeed1/slowmo
platSpeed2 = platSpeed2/slowmo
platSpeed3 = platSpeed3/slowmo
platSpeed4 = platSpeed4/slowmo
platSpeed5 = platSpeed5/slowmo
platSpeed6 = platSpeed6/slowmo
platSpeed7 = platSpeed7/slowmo
platSpeed8 = platSpeed8/slowmo
}
slowOnce = 1}

function shiftStopped() {
  jumpH = jumpH*slowmo
Pspeed = Pspeed*slowmo
grav = grav*slowmo
jumpAllocation = jumpAllocation/slowmo
jumpTime = jumpTime/slowmo
slowOnce = 0
platSpeed1 = platSpeed1*slowmo
platSpeed2 = platSpeed2*slowmo
platSpeed3 = platSpeed3*slowmo
platSpeed4 = platSpeed4*slowmo
platSpeed5 = platSpeed5*slowmo
platSpeed6 = platSpeed6*slowmo
platSpeed7 = platSpeed7*slowmo
platSpeed8 = platSpeed8*slowmo
}


function leftArrowPressed() {
 
 direction = 1;
 
}
function leftArrowstop(){

if(direction == 1){
	direction = 0;}
}


function rightArrowPressed() {
	 direction = 2;
}

function rightArrowstop(){
if(direction == 2){
	direction = 0; }
}





function spacePressed() {
if(jumpOrder == 0){
jumpOrder = 1

}
}

function spacestop() {
jumpOrder = 0
}


setInterval(function(){
if(jumpOrder == 1){
if(jump == 0 && wait == 0){
	jump = 1;
	wait = 1;
	jumpTime = 0;
	jumpOrder = 2}
}else if(jumpOrder == 0) {

	jump = 0
jumpTime = 0
}},4)

setInterval(function(){
if(jump == 1){
py -= jumpH;
jumpTime += 1;
}
},4)

setInterval(function(){
if(jumpTime >= jumpAllocation){
	jump = 0;
}
},4)





//movement 
setInterval(function(){ //Movement of the player in the direction wanted 

	if(direction == 1){ // going left
			
px -= Pspeed
	}else if(direction == 2){ //going right
px += Pspeed
	
}
},4)





//gravity
setInterval(function(){
 
py += grav;

},4)
 


//border
setInterval(function(){ // world borders
	if(px <  0){ //left border

		px = 0;

  	}else if(px+pw > c.width){ //right border
		px = c.width - pw;

	}

},4)


setInterval(function(){
	if(py <= 0){
		py = 0
	}
},4)


//restrict mid air jump
setInterval(function(){
wait = 1;
},4)


//base platform
var base = {x:-50, y:c.height-100, w:900, h:50 }

setInterval(function(){
  if ( px < base.x + base.w && px + pw > base.x && py < base.y + base.h && ph + py > base.y){
 if(py <= base.y){ py = base.y - ph; wait = 0;}}},4)


//platforms
var plat1 = {x: 100, y: 1400, w: 100, h: 25 }

setInterval(function(){
  if ( px <= plat1.x + plat1.w && px + pw >= plat1.x && py <= plat1.y + plat1.h && ph + py >= plat1.y ){
//top collision
   if(ph + py >= plat1.y && ph + py <= plat1.y + jumpH + 2){  py = plat1.y - ph; wait = 0;}
//bottom collision
  else if(py <= plat1.y + plat1.h &&  py >= plat1.y + plat1.h - jumpH - 2){py = plat1.y + plat1.h;setTimeout(function(){jump = 0;},50)}
//right collision
  else if( px <= plat1.x + plat1.w && px >= plat1.x + plat1.w - Pspeed- 2){ px = plat1.x + plat1.w;setTimeout(function(){jump = 0;},50)
//left collision
 }else if( px + pw >= plat1.x && px + pw <= plat1.x + Pspeed+ 2){px = plat1.x - pw;setTimeout(function(){jump = 0;},50)}}},4)

//2
var plat2 = {x: 250, y: 1300, w: 150, h: 25 }

setInterval(function(){
  if ( px <= plat2.x + plat2.w && px + pw >= plat2.x && py <= plat2.y + plat2.h && ph + py >= plat2.y ){
   if(ph + py >= plat2.y && ph + py <= plat2.y + jumpH+ 2){  py = plat2.y - ph; wait = 0;}
  else if(py <= plat2.y + plat2.h &&  py >= plat2.y + plat2.h - jumpH- 2){py = plat2.y + plat2.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat2.x + plat2.w && px >= plat2.x + plat2.w - Pspeed- 2){ px = plat2.x + plat2.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat2.x && px + pw <= plat2.x + Pspeed+ 2){px = plat2.x - pw;setTimeout(function(){jump = 0;},50)}}},4)

//3
var plat3 = {x: 350, y: 1150, w: 100, h: 25 }

setInterval(function(){
  if ( px <= plat3.x + plat3.w && px + pw >= plat3.x && py <= plat3.y + plat3.h && ph + py >= plat3.y ){
   if(ph + py >= plat3.y && ph + py <= plat3.y + jumpH+2){  py = plat3.y - ph; wait = 0;}
  else if(py <= plat3.y + plat3.h &&  py >= plat3.y + plat3.h - jumpH- 2){py = plat3.y + plat3.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat3.x + plat3.w && px >= plat3.x + plat3.w - Pspeed- 2){ px = plat3.x + plat3.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat3.x && px + pw <= plat3.x + Pspeed+ 2){px = plat3.x - pw;setTimeout(function(){jump = 0;},50)}}},4)


//4
var plat4 = {x: 400, y: 1000, w: 200, h: 25 }

setInterval(function(){
  if ( px <= plat4.x + plat4.w && px + pw >= plat4.x && py <= plat4.y + plat4.h && ph + py >= plat4.y ){
   if(ph + py >= plat4.y && ph + py <= plat4.y + jumpH+2){  py = plat4.y - ph; wait = 0;}
  else if(py <= plat4.y + plat4.h &&  py >= plat4.y + plat4.h - jumpH-2){py = plat4.y + plat4.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat4.x + plat4.w && px >= plat4.x + plat4.w - Pspeed- 2){ px = plat4.x + plat4.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat4.x && px + pw <= plat4.x + Pspeed+ 2){px = plat4.x - pw;setTimeout(function(){jump = 0;},50)}}},4)


var plat5 = {x: 100, y: 900, w: 150, h: 25 }

setInterval(function(){
  if ( px <= plat5.x + plat5.w && px + pw >= plat5.x && py <= plat5.y + plat5.h && ph + py >= plat5.y ){
   if(ph + py >= plat5.y && ph + py <= plat5.y + jumpH+2){  py = plat5.y - ph; wait = 0;}
  else if(py <= plat5.y + plat5.h &&  py >= plat5.y + plat5.h - jumpH-2){py = plat5.y + plat5.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat5.x + plat5.w && px >= plat5.x + plat5.w - Pspeed- 2){ px = plat5.x + plat5.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat5.x && px + pw <= plat5.x + Pspeed+ 2){px = plat5.x - pw;setTimeout(function(){jump = 0;},50)}}},4)


var plat6 = {x: 300, y: 750, w: 100, h: 25 }

setInterval(function(){
  if ( px <= plat6.x + plat6.w && px + pw >= plat6.x && py <= plat6.y + plat6.h && ph + py >= plat6.y ){
   if(ph + py >= plat6.y && ph + py <= plat6.y + jumpH+2){  py = plat6.y - ph; wait = 0;}
  else if(py <= plat6.y + plat6.h &&  py >= plat6.y + plat6.h - jumpH-2){py = plat6.y + plat6.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat6.x + plat6.w && px >= plat6.x + plat6.w - Pspeed - 2){ px = plat6.x + plat6.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat6.x && px + pw <= plat6.x + Pspeed + 2){px = plat6.x - pw;setTimeout(function(){jump = 0;},50)}}},4)


var plat7 = {x: 370, y: 580, w: 100, h: 25 }

setInterval(function(){
  if ( px <= plat7.x + plat7.w && px + pw >= plat7.x && py <= plat7.y + plat7.h && ph + py >= plat7.y ){
   if(ph + py >= plat7.y && ph + py <= plat7.y + jumpH+2){  py = plat7.y - ph; wait = 0;}
  else if(py <= plat7.y + plat7.h &&  py >= plat7.y + plat7.h - jumpH-2){py = plat7.y + plat7.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat7.x + plat7.w && px >= plat7.x + plat7.w - Pspeed - 2){ px = plat7.x + plat7.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat7.x && px + pw <= plat7.x + Pspeed+ 2){px = plat7.x - pw;setTimeout(function(){jump = 0;},50)}}},4)


var plat8 = {x: 150, y: 420, w: 100, h: 25 }

setInterval(function(){
  if ( px <= plat8.x + plat8.w && px + pw >= plat8.x && py <= plat8.y + plat8.h && ph + py >= plat8.y ){
   if(ph + py >= plat8.y && ph + py <= plat8.y + jumpH+2){  py = plat8.y - ph; wait = 0;}
  else if(py <= plat8.y + plat8.h &&  py >= plat8.y + plat8.h - jumpH-2){py = plat8.y + plat8.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat8.x + plat8.w && px >= plat8.x + plat8.w - Pspeed - 2){ px = plat8.x + plat8.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat8.x && px + pw <= plat8.x + Pspeed + 2){px = plat8.x - pw;setTimeout(function(){jump = 0;},50)}}},4)


var plat9 = {x: 370, y: 250, w: 100, h: 25 }

setInterval(function(){
  if ( px <= plat9.x + plat9.w && px + pw >= plat9.x && py <= plat9.y + plat9.h && ph + py >= plat9.y ){
   if(ph + py >= plat9.y && ph + py <= plat9.y + jumpH+2){  py = plat9.y - ph; wait = 0;}
  else if(py <= plat9.y + plat9.h &&  py >= plat9.y + plat9.h - jumpH-2){py = plat9.y + plat9.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat9.x + plat9.w && px >= plat9.x + plat9.w - Pspeed- 2){ px = plat9.x + plat9.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat9.x && px + pw <= plat9.x + Pspeed+ 2){px = plat9.x - pw;setTimeout(function(){jump = 0;},50)}}},4)


var plat10 = {x: 650, y: 310, w: 100, h: 25 }

setInterval(function(){
  if ( px <= plat10.x + plat10.w && px + pw >= plat10.x && py <= plat10.y + plat10.h && ph + py >= plat10.y ){
   if(ph + py >= plat10.y && ph + py <= plat10.y + jumpH+2){  py = plat10.y - ph; wait = 0;}
  else if(py <= plat10.y + plat10.h &&  py >= plat10.y + plat10.h - jumpH-2){py = plat10.y + plat10.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat10.x + plat10.w && px >= plat10.x + plat10.w - Pspeed - 2){ px = plat10.x + plat10.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat10.x && px + pw <= plat10.x + Pspeed + 2){px = plat10.x - pw;setTimeout(function(){jump = 0;},50)}}},4)


var plat11 = {x: 200, y: 100, w: 400, h: 25 }

setInterval(function(){
  if ( px <= plat11.x + plat11.w && px + pw >= plat11.x && py <= plat11.y + plat11.h && ph + py >= plat11.y ){
   if(ph + py >= plat11.y && ph + py <= plat11.y + jumpH+2){  py = plat11.y - ph; wait = 0;}
  else if(py <= plat11.y + plat11.h &&  py >= plat11.y + plat11.h - jumpH-2){py = plat11.y + plat11.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat11.x + plat11.w && px >= plat11.x + plat11.w - Pspeed-2){ px = plat11.x + plat11.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat11.x && px + pw <= plat11.x + Pspeed+2){px = plat11.x - pw;setTimeout(function(){jump = 0;},50)}}},4)


var victoryPlat = {x: 350, y: 90, w: 100, h: 10 }

setInterval(function(){
  if ( px <= victoryPlat.x + victoryPlat.w && px + pw >= victoryPlat.x && py <= victoryPlat.y + victoryPlat.h && ph + py >= victoryPlat.y ){
   if(ph + py >= victoryPlat.y){  py = victoryPlat.y - ph;  
   	if(level == 4){level = 5; level5()}
   	else if(level == 3){level = 4; level4()
   		} else if(level == 2){level = 3;  level3() }
   		else if(level == 1){level = 2;  level2() }
 }}},4)

//level 2 
function level2(){
pw = 30;
ph = 30;
px = c.width/2 + 50; 
py = c.height-100-ph ;
	
	plat1 = {x:250 ,y: 1300 ,w:100 ,h: 200}
	plat2 = {x:0 ,y: 1100 ,w:100 ,h: 400}
	plat3 = {x:350 ,y: 450 ,w:200 ,h: 200}
	plat4 = {x:600 ,y: 500 ,w:200 ,h: 100}
	plat5 = {x:250 ,y: 900 ,w:550 ,h: 100}
	plat6 = {x:480 ,y: 700 ,w:100 ,h: 200}
	plat7 = {x:0 ,y: 500 ,w:350 ,h: 100}
	plat8 = {x:200 ,y: 300 ,w:600 ,h: 100}
	plat9 = {x:550 ,y: 1000 ,w:100 ,h: 500}
	plat10 = {x: c.width/2 - 20, y: 200, w: 30, h: 100 }
	plat11 = {x: 0, y: 100, w: 600, h: 100 }


}
//level 2 platform movement
setInterval(function(){
	if(level == 2){
plat10.x += platSpeed1;
if(plat10.x <= 0){
	platSpeed1 = -platSpeed1;
}
if(plat10.x >= 800){
	platSpeed1 = -platSpeed1;
}

}},4)



//level 3
function level3(){
pw = 30;
ph = 30;
px = 10; 
py = c.height-100-ph ;
	
	plat1 = {x:100 ,y: 1350 ,w:100 ,h: 300}
	plat2 = {x:250 ,y: 1250 ,w:100 ,h: 500}
	plat3 = {x:400 ,y: 975 ,w:100 ,h: 700}
	plat4 = {x:0 ,y: 800 ,w:200 ,h: 60}
	plat5 = {x: 300,y: 650 ,w:100 ,h: 40}
	plat6 = {x:500 ,y: 1220 ,w:300 ,h: 60}
	plat7 = {x:700 ,y: 450 ,w:60,h: 150}
	plat8 = {x:400 ,y: 200 ,w:330 ,h: 30}
	plat9 = {x:500 ,y: 230 ,w:30 ,h: 250}
	plat10 = {x:170 ,y: 300 ,w:120 ,h: 30}
	plat11 = {x: 200, y: 100, w: 600, h: 30 }

platSpeed1 = 1;
platSpeed2 = -1;
platSpeed3 = 1;
platSpeed4 = 0.5;
platSpeed5 = 1;
platSpeed6 = 1;


if(slowOnce == 1){
platSpeed1 = 1/slowmo;
platSpeed2 = -1/slowmo;
platSpeed3 = 1/slowmo;
platSpeed4 = 0.5/slowmo;
platSpeed5 = 1/slowmo;
platSpeed6 = 1/slowmo;
}

}

//level 3 platfrom movement
setInterval(function(){
	if(level == 3){
plat1.y += platSpeed1 ;
if(plat1.y < 1300){
	platSpeed1 = -platSpeed1;
}
else if(plat1.y > 1400){
	platSpeed1 = -platSpeed1;
}}},4)


setInterval(function(){
	if(level ==3){
plat2.y += platSpeed2;
if(plat2.y <  1150){
	platSpeed2 = -platSpeed2;
}
else if(plat2.y > 1350){
	platSpeed2 = -platSpeed2;

}}},4)


setInterval(function(){
	if(level ==3){
plat3.y += platSpeed3 ;
if(plat3.y < 900){
	platSpeed3 = -platSpeed3;
}
else if(plat3.y > 1050){
	platSpeed3 = -platSpeed3;
}}},4)

setInterval(function(){
	if(level ==3){
plat5.x += platSpeed4 ;
if(plat5.x < 300){
	platSpeed4 = -platSpeed4;
}
else if(plat5.x > 600 ){
	platSpeed4 = -platSpeed4;
}}},4)


setInterval(function(){
	if(level ==3){
plat7.y += platSpeed5 ;
if(plat7.y < 350){
	platSpeed5 = -platSpeed5;
}
else if(plat7.y > 550 ){
	platSpeed5 = -platSpeed5;
}}},4)

setInterval(function(){
	if(level ==3){
plat10.x += platSpeed6 ;
if(plat10.x < 40){
	platSpeed6 = -platSpeed6;
}
else if(plat10.x > 280 ){
	platSpeed6 = -platSpeed6;
}}},4)


//level 4
function level4(){

px = 10; 
py = c.height-100-ph ;
	
	plat1 = {x:0 ,y: 1300 ,w:600 ,h: 100}
	plat2 = {x:100 ,y: 1100 ,w:700 ,h: 100}
	plat3 = {x:100 ,y: 1400 ,w:30 ,h: 100}
	plat4 = {x:700 ,y: 1200 ,w:30 ,h: 100}
	plat5 = {x:700 ,y: 1300 ,w:30 ,h: 100}
	plat6 = {x:700 ,y: 850 ,w:60 ,h: 40}
	plat7 = {x:300 ,y: 600 ,w:200 ,h: 30}
	plat8 = {x:575 ,y: 250 ,w:30 ,h: 150}
	plat9 = {x:200 ,y: 650 ,w:30 ,h: 150}
	plat10 = {x:30 ,y: 400 ,w:60 ,h: 40}
	plat11 = {x: 200, y: 100, w: 600, h: 30 }

platSpeed1 = 1.75;
platSpeed2 = 1.75;
platSpeed3 = 1.5;
platSpeed4 = 1.25;
platSpeed5 = 3;
platSpeed6 = 3;	
platSpeed7 = 1.25;
platSpeed8 = 0.5;

if(slowOnce == 1){
	platSpeed1 = 1.75/slowmo;
platSpeed2 = 1.75/slowmo;
platSpeed3 = 1.5/slowmo;
platSpeed4 = 1.25/slowmo;
platSpeed5 = 3/slowmo;
platSpeed6 = 3/slowmo;	
platSpeed7 = 1.25/slowmo;
platSpeed8 = 0.5/slowmo;
}

}

//level 4 platform movement
setInterval(function(){
	if(level == 4){
plat3.x += platSpeed1;
if(plat3.x <= 100){
	platSpeed1 = -platSpeed1;
}
if(plat3.x >= 800){
	platSpeed1 = -platSpeed1;
}

}},4)


setInterval(function(){
	if(level == 4){
plat4.x += platSpeed2;
if(plat4.x <= -30){
	platSpeed2 = -platSpeed2;
}
if(plat4.x >= 770){
	platSpeed2 = -platSpeed2;
}

}},4)

setInterval(function(){
	if(level == 4){
plat5.x += platSpeed3;
if(plat5.x <= 610){
	platSpeed3 = -platSpeed3;
}
if(plat5.x >= 760){
	platSpeed3 = -platSpeed3;
}

}},4)

setInterval(function(){
	if(level == 4){
plat6.y += platSpeed4;
if(plat6.y < 670){
	platSpeed4 = -platSpeed4;
}
if(plat6.y > 910){
	platSpeed4 = -platSpeed4;
}

}},4)


setInterval(function(){
	if(level == 4){
plat8.y += platSpeed5;
if(plat8.y < 250){
	platSpeed5 = -platSpeed5;
}
if(plat8.y > 650){
	platSpeed5 = -platSpeed5;
}

}},4)

setInterval(function(){
	if(level == 4){
plat9.y += platSpeed6;
if(plat9.y < 250){
	platSpeed6 = -platSpeed6;
}
if(plat9.y > 650){
	platSpeed6 = -platSpeed6;
}

}},4)

setInterval(function(){
	if(level == 4){
plat10.y += platSpeed7;
if(plat10.y <= 250){
	platSpeed7 = -platSpeed7;
}
if(plat10.y >= 500){
	platSpeed7 = -platSpeed7;
}

}},4)


setInterval(function(){
	if(level == 4){
plat7.y += platSpeed8;
if(plat7.y <= 550){
	platSpeed8 = -platSpeed8;
}
if(plat7.y >= 650){
	platSpeed8 = -platSpeed8;
}

}},4)


function level5(){

px = 10; 
py = c.height-100-ph ;
	
	plat1 = {x:0 ,y: 1300 ,w:600 ,h: 100}
	plat2 = {x:100 ,y: 1100 ,w:700 ,h: 100}
	plat3 = {x:100 ,y: 1400 ,w:30 ,h: 100}
	plat4 = {x:700 ,y: 1200 ,w:30 ,h: 100}
	plat5 = {x:700 ,y: 1300 ,w:30 ,h: 100}
	plat6 = {x:700 ,y: 850 ,w:60 ,h: 40}
	plat7 = {x:300 ,y: 600 ,w:200 ,h: 30}
	plat8 = {x:575 ,y: 250 ,w:30 ,h: 150}
	plat9 = {x:200 ,y: 650 ,w:30 ,h: 150}
	plat10 = {x:30 ,y: 400 ,w:60 ,h: 40}
	plat11 = {x: 200, y: 100, w: 600, h: 30 }

platSpeed1 = 1.75;
platSpeed2 = 1.75;
platSpeed3 = 1.5;
platSpeed4 = 1.25;
platSpeed5 = 3;
platSpeed6 = 3;	
platSpeed7 = 1.25;
platSpeed8 = 0.5;

if(slowOnce == 1){
	platSpeed1 = 1.75/slowmo;
platSpeed2 = 1.75/slowmo;
platSpeed3 = 1.5/slowmo;
platSpeed4 = 1.25/slowmo;
platSpeed5 = 3/slowmo;
platSpeed6 = 3/slowmo;	
platSpeed7 = 1.25/slowmo;
platSpeed8 = 0.5/slowmo;
}

}










//timer
var time = 0
setInterval(function(){
time += 1
},1000)


//draw function
setInterval(function(){
	c.width = c.width;
ctx.strokeRect(base.x, base.y, base.w, base.h)
ctx.fillRect(px,py,pw,ph)
//platforms
ctx.fillRect(plat1.x,plat1.y,plat1.w,plat1.h)
ctx.fillRect(plat2.x,plat2.y,plat2.w,plat2.h)
ctx.fillRect(plat3.x,plat3.y,plat3.w,plat3.h)
ctx.fillRect(plat4.x,plat4.y,plat4.w,plat4.h)
ctx.fillRect(plat5.x,plat5.y,plat5.w,plat5.h)
ctx.fillRect(plat6.x,plat6.y,plat6.w,plat6.h)
ctx.fillRect(plat7.x,plat7.y,plat7.w,plat7.h)
ctx.fillRect(plat8.x,plat8.y,plat8.w,plat8.h)
ctx.fillRect(plat9.x,plat9.y,plat9.w,plat9.h)
ctx.fillRect(plat10.x,plat10.y,plat10.w,plat10.h)
ctx.fillRect(plat11.x,plat11.y,plat11.w,plat11.h)
ctx.fillStyle ='rgba(255,0,0,1)';
ctx.fillRect(victoryPlat.x,victoryPlat.y,victoryPlat.w,victoryPlat.h)
ctx.fillStyle ='rgba(0,0,0,1)';
 ctx.font = "30px Arial";
	ctx.fillText("Time:" + time + 's',610,1580);
	ctx.fillText("level:" + level  ,510,1580);
},4)



//Created by Lucas Marrie
//a product of Firebals LTD


var test = 0 
var num = 0

setInterval(function(){
if(test == 0){
console.log(num)
num += 1
setTimeout(function(){
test = 1 
},1000)

}

},8)



