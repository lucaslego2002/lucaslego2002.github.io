var c = document.getElementById('canvas');

var ctx = c.getContext('2d');


alert('This game is still in developments, there will be various bugs, this game is best adapted to the google chrome browser')
alert('controls: A = move left, D = move right, Space = Jump, Lshift = jetpack (pick up), capslock= shield (pick up)')



//player
var pw = 30;
var ph = 30;
var px = c.width/2 - pw/2; 
var py = c.height-100-ph;

//player abilities
var block = 0
var shield = 0
var shieldpickup = {x: 0,y: 1200,w: 40,h: 40}
var shieldspawn = 0;

var flight = 0;
var jetpack = 0	;
var jetpackpickup = {x: 0,y: 1200,w: 30,h: 13}
var jetpackpickup1 = {x: 4,y: 1204,w: 6,h: 12}
var jetpackpickup2 = {x: 19,y: 1204,w: 6,h: 12}
var jetpackspawn = 0;
var jetpackspeed = 16;
var thrust = 1;
var jetpackuse = {x:303, y: 958,w: 194,h: 30}

//movement authorization variables
var jump = 0;
var wait = 0;
var direction = 0;
var jumpTime = 0;
var jumpOrder = 0;
var screenmove = 0;

//movement scalars 
var jumpH = 18;
var Pspeed = 6;
var grav = 8;
var jumpAllocation = 22;



//platform movement
var platSpeed1 = 1;
var platSpeed2 = 1;
var platSpeed3 = 1;
var platSpeed4 = 1;
var platSpeed5 = 1;
var platSpeed6 = 1;
var platSpeed7 = 1;
var platSpeed8 = 1;
var platSpeed9 = 1;
var platSpeed10 = 1;
var platSpeed11 = 1;

//allow platform movement 
var platmove1 = 0;
var platmove2 = 0;
var platmove3 = 0;
var platmove4 = 0;
var platmove5 = 0;
var platmove6 = 0;
var platmove7 = 0;
var platmove8 = 0;
var platmove9 = 0;
var platmove10 = 0;
var platmove11 = 0;


//astroid speed
var astspeed1 = 2;
var astspeed2 = 2;
var astspeed3 = 2;
var astspeed4 = 2;
var astspeed5 = 2;

//height 
var height = 10;

//difficulty modifiers
var Ygap = 100;
var Ymargin = 50;
var  Xgap = 50;
var Xmargin = 150;
var astmin = 1;
var astmax = 2;

//lose
var lose = 0
var stop = 0

//shield use progress bar
var shielduse = {x:303, y: 958,w: 194,h: 30}
var shielddurability = 0;

window.rInterval=function(a,b){var c=Date.now,d=window.requestAnimationFrame,e=c(),f,g=function(){c()-e<b||(e+=b,a());f||d(g)};d(g);return{clear:function(){f=1}}};
window.rtimeOut=function(a,b){var c=Date.now,d=window.requestAnimationFrame,e=c(),f,g=function(){c()-e<b?f||d(g):a()};d(g);return{clear:function(){f=1}}};

    var movement, draw, platmove;

    




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
            case 81:
            QPressed();
            break;
            case 20:
            capsPressed();
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
            case 81:
            Qstopped();
            break;
            case 20:
            capsStopped();
            break;
    }
};


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


function shiftPressed(){
	if(jetpack == 1){
		flight = 1;
		if(Pspeed == 6){
			Pspeed = 9;
		}
	}

}

function shiftStopped(){
	flight = 0
	if(Pspeed == 9){
		Pspeed = 6;
	}
}

function capsPressed(){
	if(shield == 1){
block = 1;
if(Pspeed == 6){
	Pspeed = 4;
}
if(jumpH == 18){
	jumpH = 16;
} }
}

function capsStopped(){
		if(shield == 1){
	block = 0;
	if(Pspeed == 4){
		Pspeed = 6;
	}
	if(jumpH == 16){
		jumpH = 18;
	} }
}

setInterval(function(){
if(shield == 0){
	block = 0
	if(Pspeed == 4){
		Pspeed = 6;
	}
	if(jumpH == 16){
		jumpH = 18;
	} }

},1)

      window.onload=function(){
     movement=window.rInterval(function(){

if(jumpOrder == 1){
if(jump == 0 && wait == 0){
	jump = 1;
	wait = 1;
	jumpTime = 0;
	jumpOrder = 2}
}else if(jumpOrder == 0) {

	jump = 0
jumpTime = 0
screenmove = 0}

if(jump == 1){

py -= jumpH;


jumpTime += 1;
}
if(jumpTime >= jumpAllocation){
	jump = 0;
	screenmove = 0;
}


	if(direction == 1){ // going left
			
px -= Pspeed
	}else if(direction == 2){ //going right
px += Pspeed
	
}

py += grav;


	if(px <  - 15){ //left border

		px = c.width - 15;

  	}else if(px+pw -15 > c.width){ //right border
		px = - 15;

	}
wait = 1;

if(py <= 550 && py > 200){ 	base.y += jumpH/5;
	plat1.y += jumpH/5;
	plat2.y += jumpH/5;
	plat3.y += jumpH/5;
	plat4.y += jumpH/5;
	plat5.y += jumpH/5;
	plat6.y += jumpH/5;
	plat7.y += jumpH/5;
	plat8.y += jumpH/5;
	plat9.y += jumpH/5;
	plat10.y += jumpH/5;
	plat11.y += jumpH/5;
	py += jumpH/5;
	height += jumpH/5/5;
	ast1.y += jumpH/5;
	ast2.y += jumpH/5;
	ast3.y += jumpH/5;
	ast4.y += jumpH/5;
	ast5.y += jumpH/5;
	shieldpickup.y += jumpH/5;
	jetpackpickup.y += jumpH/5;
	jetpackpickup1.y += jumpH/5;

	jetpackpickup2.y += jumpH/5;
}else if(py <= 200){ 	base.y += jumpH/2;
	plat1.y += jumpH/2;
	plat2.y += jumpH/2;
	plat3.y += jumpH/2;
	plat4.y += jumpH/2;
	plat5.y += jumpH/2;
	plat6.y += jumpH/2;
	plat7.y += jumpH/2;
	plat8.y += jumpH/2;
	plat9.y += jumpH/2;
	plat10.y += jumpH/2;
	plat11.y += jumpH/2;
	py += jumpH/2;
	height += jumpH/2/5;
	ast1.y += jumpH/2;
	ast2.y += jumpH/2;
	ast3.y += jumpH/2;
	ast4.y += jumpH/2;
	ast5.y += jumpH/2;
	shieldpickup.y += jumpH/2;
		jetpackpickup.x += jumpH/2;
	jetpackpickup.y += jumpH/2;
	jetpackpickup1.y += jumpH/2;
	jetpackpickup2.y += jumpH/2;
}
ast1.y +=  astspeed1;
ast2.y +=  astspeed2;
ast3.y +=  astspeed3;
ast4.y +=  astspeed4;
ast5.y +=  astspeed5;


if(flight == 1){
	jump = 0
	py -= jetpackspeed;
	jetpackuse.w -= 1;
}
     },10);
}


var plat1 = {x: c.width/2 - 50,y: 800,w: 100, h: 30 }
var plat2 = {x: 0,y: 1500,w: 100, h: 30 }
var plat3 = {x: 0,y: 1500,w: 100, h: 30 }
var plat4 = {x: 0,y: 1500,w: 100, h: 30 }
var plat5 = {x: 0,y: 1500,w: 100, h: 30 }
var plat6 = {x: 0,y: 1500,w: 100, h: 30 }
var plat7 = {x: 0,y: 1500,w: 100, h: 30 }
var plat8 = {x: 0,y: 1500,w: 100, h: 30 }
var plat9 = {x: 0,y: 1500,w: 100, h: 30 }
var plat10 = {x: 0,y: 1500,w: 100, h: 30 }
var plat11 = {x: 0,y: 1500,w: 100, h: 30 }


var ast1 = {x: 0, y:1500, w: 25, h: 25}
var ast2 = {x: 0, y:1500, w: 25, h: 25}
var ast3 = {x: 0, y:1500, w: 25, h: 25}
var ast4 = {x: 0, y:1500, w: 25, h: 25}
var ast5 = {x: 0, y:1500, w: 25, h: 25}

//difficulty increase
setInterval(function(){
if(height <= 250){
Ygap = 100;
Ymargin = 50;
Xgap = 50;
Xmargin = 150;
astmin = 1;
astmax = 2;
ast1.h = 25;ast2.h = 25;ast3.h = 25;ast4.h = 25;ast5.h = 25;

}else if(height > 250 && height<= 500){
Ygap = 50;
Ymargin = 100;
Xgap = 100;
Xmargin = 150;
astmin = 1.5;
astmax = 2.5;
ast1.h = 27;ast2.h = 27;ast3.h = 27;ast4.h = 27;ast5.h = 27;
}else if(height > 500 && height<= 800){
Ygap = 50;
Ymargin = 125;
Xgap = 50;
Xmargin = 200;
astmin = 2;
astmax = 3;
ast1.h = 29;ast2.h = 29;ast3.h = 29;ast4.h = 29;ast5.h = 29;
}else if(height > 800 && height <= 1100){
Ygap = 30;
Ymargin = 170;
Xgap = 50;
Xmargin = 200;
astmin = 2.5;
astmax = 3.5;
ast1.h = 31;ast2.h = 31;ast3.h = 31;ast4.h = 31;ast5.h = 31;
}else if(height > 1100 && height <= 1400){
Ygap = 10;
Ymargin = 190;
Xgap = 10;
Xmargin = 240;
astmin = 3;
astmax = 4;
ast1.h = 33;ast2.h = 33;ast3.h = 33;ast4.h = 33;ast5.h = 33;
}else if(height > 1400 && height <= 1600){
Ygap = 2;
Ymargin = 198;
Xgap = 2;
Xmargin = 248;
astmin = 3.5;
astmax = 5;
ast1.h = 35;ast2.h = 35;ast3.h = 35;ast4.h = 35;ast5.h = 35;
}else if(height > 1600 && height <= 1800){
astmin = 4;
astmax = 5.5;
ast1.h = 37;ast2.h = 37;ast3.h = 37;ast4.h = 37;ast5.h = 37;
platmove1 = 1;
}else if(height > 1800 && height <= 2000){
astmin = 4;
astmax = 5.5;
ast1.h = 37;ast2.h = 37;ast3.h = 37;ast4.h = 37;ast5.h = 37;
platmove7 = 1;  platmove10 = 1;
}else if(height > 2000 && height <= 2400){
astmin = 4.5;
astmax = 6;
ast1.h = 39;ast2.h = 39;ast3.h = 39;ast4.h = 39;ast5.h = 39;
platmove3 = 1; platmove5 = 1; platmove9 = 1;
}else if(height > 2400 && height <= 3000){
astmin = 4.5;
astmax = 6;
ast1.h = 39;ast2.h = 39;ast3.h = 39;ast4.h = 39;ast5.h = 39;
platmove2 = 1; platmove4 = 1; platmove6 = 1;  platmove8 = 1;  platmove11 = 1;
}
},100)


setInterval(function(){
if(height >= 200){
	if(ast1.y >= 1000){
		ast1.y = -Math.floor((Math.random() *300 ) + 400)
		ast1.x =Math.floor((Math.random() *765 ) + 1)
		astspeed1 = (Math.random() * (astmax - astmin) + astmin)
	}}
if(height >= 600){
	if(ast2.y >= 1000){
		ast2.y = -Math.floor((Math.random() *300 ) + 400)
		ast2.x =Math.floor((Math.random() *765 ) + 1)
		astspeed2 = (Math.random() * (astmax - astmin) + astmin)}}
if(height >= 1100){
	if(ast3.y >= 1000){
		ast3.y = -Math.floor((Math.random() *300 ) + 400)
		ast3.x = px
	astspeed3 = (Math.random() * (astmax - astmin) + astmin)}
}if(height >= 1600){
	if(ast4.y >= 1000){
		ast4.y = -Math.floor((Math.random() *300 ) + 400)
		ast4.x =Math.floor((Math.random() *765 ) + 1)
		astspeed4 = (Math.random() * (astmax - astmin) + astmin)}
}if(height >= 2000){
	if(ast5.y >= 1000){
		ast5.y = -Math.floor((Math.random() *200 ) + 400)
		ast5.x =Math.floor((Math.random() *765 ) + 1)
		astspeed5 = (Math.random() * (astmax - astmin) + astmin)}}
},100)


var leftright = 1;
//platform respawn
//1
setInterval(function(){
	if(plat1.y > 1000){

	plat1.y = plat11.y - Math.floor((Math.random() * Ygap) + Ymargin)
	leftright = Math.floor((Math.random() * 2) + 1)
	if(leftright == 1){
	plat1.x = plat11.x - Math.floor((Math.random() * Xgap) + Xmargin)}
	else if(leftright == 2){
	plat1.x = plat11.x + Math.floor((Math.random() * Xgap) + Xmargin)}

	if(plat1.x < -100 && plat1.x > -115){
		plat1.x += 800
	}else if(plat1.x <= -115){
		plat1.x += 815
	}else if(plat1.x > 800 && plat1.x < 815){
		plat1.x -= 800
	}else if(plat1.x >= 815){
plat1.x -= 815
	}
else if(plat1.x < 0 && plat1.x >= -100){
	plat1.x = 0
}	
else if(plat1.x > 700 && plat1.x <= 800){
	plat1.x = 700
}	
	}

},1)
//2
setInterval(function(){
	if(plat2.y > 1000){
plat2.y = plat1.y - Math.floor((Math.random() * Ygap) + Ymargin);
	leftright = Math.floor((Math.random() * 2) + 1);
	if(leftright == 1){plat2.x = plat1.x - Math.floor((Math.random() * Xgap) + Xmargin);}
	else if(leftright == 2){plat2.x = plat1.x + Math.floor((Math.random() * Xgap) + Xmargin);}
	if(plat2.x < -100 && plat2.x > -115){
		plat2.x += 800
	}else if(plat2.x <= -115){
		plat2.x += 815
	}else if(plat2.x > 800 && plat2.x < 815){
		plat2.x -= 800
	}else if(plat2.x >= 815){
plat2.x -= 815
	}
else if(plat2.x < 0 && plat2.x >= -100){plat2.x = 0;}	
else if(plat2.x > 700 && plat2.x <= 800){plat2.x = 700;}}},1)

//3
setInterval(function(){
	if(plat3.y > 1000){
plat3.y = plat2.y - Math.floor((Math.random() * Ygap) + Ymargin);
	leftright = Math.floor((Math.random() * 2) + 1);
	if(leftright == 1){plat3.x = plat2.x - Math.floor((Math.random() * Xgap) + Xmargin);}
	else if(leftright == 2){plat3.x = plat2.x + Math.floor((Math.random() * Xgap) + Xmargin);}
	if(plat3.x < -100 && plat3.x > -115){
		plat3.x += 800
	}else if(plat3.x <= -115){
		plat3.x += 815
	}else if(plat3.x > 800 && plat3.x < 815){
		plat3.x -= 800
	}else if(plat3.x >= 815){
plat3.x -= 815
	}
else if(plat3.x < 0 && plat3.x >= -100){plat3.x = 0;}	
else if(plat3.x > 700 && plat3.x <= 800){plat3.x = 700;}}},1)
//4
setInterval(function(){
	if(plat4.y > 1000){
plat4.y = plat3.y - Math.floor((Math.random() * Ygap) + Ymargin);
	leftright = Math.floor((Math.random() * 2) + 1);
	if(leftright == 1){plat4.x = plat3.x - Math.floor((Math.random() * Xgap) + Xmargin);}
	else if(leftright == 2){plat4.x = plat3.x + Math.floor((Math.random() * Xgap) + Xmargin);}
	if(plat4.x < -100 && plat4.x > -115){
		plat4.x += 800
	}else if(plat4.x <= -115){
		plat4.x += 815
	}else if(plat4.x > 800 && plat4.x < 815){
		plat4.x -= 800
	}else if(plat4.x >= 815){
plat4.x -= 815
	}
else if(plat4.x < 0 && plat4.x >= -100){plat4.x = 0;}	
else if(plat4.x > 700 && plat4.x <= 800){plat4.x = 700;}}},1)
//5
setInterval(function(){
	if(plat5.y > 1000){
plat5.y = plat4.y - Math.floor((Math.random() * Ygap) + Ymargin);
	leftright = Math.floor((Math.random() * 2) + 1);
	if(leftright == 1){plat5.x = plat4.x - Math.floor((Math.random() * Xgap) + Xmargin);}
	else if(leftright == 2){plat5.x = plat4.x + Math.floor((Math.random() * Xgap) + Xmargin);}
	if(plat5.x < -100 && plat5.x > -115){
		plat5.x += 800
	}else if(plat5.x <= -115){
		plat5.x += 815
	}else if(plat5.x > 800 && plat5.x < 815){
		plat5.x -= 800
	}else if(plat5.x >= 815){
plat5.x -= 815
	}
else if(plat5.x < 0 && plat5.x >= -100){plat5.x = 0;}	
else if(plat5.x > 700 && plat5.x <= 800){plat5.x = 700;}}},1)
//6
setInterval(function(){
	if(plat6.y > 1000){
plat6.y = plat5.y - Math.floor((Math.random() * Ygap) + Ymargin);
	leftright = Math.floor((Math.random() * 2) + 1);
	if(leftright == 1){plat6.x = plat5.x - Math.floor((Math.random() * Xgap) + Xmargin);}
	else if(leftright == 2){plat6.x = plat5.x + Math.floor((Math.random() * Xgap) + Xmargin);}
	if(plat6.x < -100 && plat6.x > -115){
		plat6.x += 800
	}else if(plat6.x <= -115){
		plat6.x += 815
	}else if(plat6.x > 800 && plat6.x < 815){
		plat6.x -= 800
	}else if(plat6.x >= 815){
plat6.x -= 815
	}
else if(plat6.x < 0 && plat6.x >= -100){plat6.x = 0;}	
else if(plat6.x > 700 && plat6.x <= 800){plat6.x = 700;}
if(jetpackspawn == 1){

	jetpackpickup.x = plat6.x + 35;
	jetpackpickup.y = plat6.y - 45;
	jetpackpickup1.x = plat6.x + 39;
	jetpackpickup1.y = plat6.y - 41;
	jetpackpickup2.x = plat6.x + 54;
	jetpackpickup2.y = plat6.y - 41;
	jetpackspawn = 0
}
}},1)
//7
setInterval(function(){
	if(plat7.y > 1000){
plat7.y = plat6.y - Math.floor((Math.random() * Ygap) + Ymargin);
	leftright = Math.floor((Math.random() * 2) + 1);
	if(leftright == 1){plat7.x = plat6.x - Math.floor((Math.random() * Xgap) + Xmargin);}
	else if(leftright == 2){plat7.x = plat6.x + Math.floor((Math.random() * Xgap) + Xmargin);}
	if(plat7.x < -100 && plat7.x > -115){
		plat7.x += 800
	}else if(plat7.x <= -115){
		plat7.x += 815
	}else if(plat7.x > 800 && plat7.x < 815){
		plat7.x -= 800
	}else if(plat7.x >= 815){
plat7.x -= 815
	}
else if(plat7.x < 0 && plat7.x >= -100){plat7.x = 0;}	
else if(plat7.x > 700 && plat7.x <= 800){plat7.x = 700;}}},1)
//8
setInterval(function(){
	if(plat8.y > 1000){
plat8.y = plat7.y - Math.floor((Math.random() * Ygap) + Ymargin);
	leftright = Math.floor((Math.random() * 2) + 1);
	if(leftright == 1){plat8.x = plat7.x - Math.floor((Math.random() * Xgap) + Xmargin);}
	else if(leftright == 2){plat8.x = plat7.x + Math.floor((Math.random() * Xgap) + Xmargin);}
	if(plat8.x < -100 && plat8.x > -115){
		plat8.x += 800
	}else if(plat8.x <= -115){
		plat8.x += 815
	}else if(plat8.x > 800 && plat8.x < 815){
		plat8.x -= 800
	}else if(plat8.x >= 815){
plat8.x -= 815
	}
else if(plat8.x < 0 && plat8.x >= -100){plat8.x = 0;}	
else if(plat8.x > 700 && plat8.x <= 800){plat8.x = 700;}}},1)
//9
setInterval(function(){
	if(plat9.y > 1000){
plat9.y = plat8.y - Math.floor((Math.random() * Ygap) + Ymargin);
	leftright = Math.floor((Math.random() * 2) + 1);
	if(leftright == 1){plat9.x = plat8.x - Math.floor((Math.random() * Xgap) + Xmargin);}
	else if(leftright == 2){plat9.x = plat8.x + Math.floor((Math.random() * Xgap) + Xmargin);}
	if(plat9.x < -100 && plat9.x > -115){
		plat9.x += 800
	}else if(plat9.x <= -115){
		plat9.x += 815
	}else if(plat9.x > 800 && plat9.x < 815){
		plat9.x -= 800
	}else if(plat9.x >= 815){
plat9.x -= 815
	}
else if(plat9.x < 0 && plat9.x >= -100){plat9.x = 0;}	
else if(plat9.x > 700 && plat9.x <= 800){plat9.x = 700;}}},1)
//10
setInterval(function(){
	if(plat10.y > 1000){
plat10.y = plat9.y - Math.floor((Math.random() * Ygap) + Ymargin);
	leftright = Math.floor((Math.random() * 2) + 1);
	if(leftright == 1){plat10.x = plat9.x - Math.floor((Math.random() * Xgap) + Xmargin);}
	else if(leftright == 2){plat10.x = plat9.x + Math.floor((Math.random() * Xgap) + Xmargin);}
	if(plat10.x < -100 && plat10.x > -115){
		plat10.x += 800
	}else if(plat10.x <= -115){
		plat10.x += 815
	}else if(plat10.x > 800 && plat10.x < 815){
		plat10.x -= 800
	}else if(plat10.x >= 815){
plat10.x -= 815
	}
else if(plat10.x < 0 && plat10.x >= -100){plat10.x = 0;}	
else if(plat10.x > 700 && plat10.x <= 800){plat10.x = 700;}}},1)
//11
setInterval(function(){
	if(plat11.y > 1000){
plat11.y = plat10.y - Math.floor((Math.random() * Ygap) + Ymargin);
	leftright = Math.floor((Math.random() * 2) + 1);
	if(leftright == 1){plat11.x = plat10.x - Math.floor((Math.random() * Xgap) + Xmargin);}
	else if(leftright == 2){plat11.x = plat10.x + Math.floor((Math.random() * Xgap) + Xmargin);}
	if(plat11.x < -100 && plat11.x > -115){
		plat11.x += 800
	}else if(plat11.x <= -115){
		plat11.x += 815
	}else if(plat11.x > 800 && plat11.x < 815){
		plat11.x -= 800
	}else if(plat11.x >= 815){
plat11.x -= 815
	}
else if(plat11.x < 0 && plat11.x >= -100){plat11.x = 0;}	
else if(plat11.x > 700 && plat11.x <= 800){plat11.x = 700;}
if(shieldspawn == 1){

	shieldpickup.x = plat11.x + 30;
	shieldpickup.y = plat11.y - 50;
	shieldspawn = 0
}

}},1)



//platform movement
 platmove=window.rInterval(function(){ 
 	if(platmove1 == 1){
if(plat1.x < 0){
	platSpeed1 = -platSpeed1
}else if(plat1.x > 700){ 
platSpeed1 = -platSpeed1}
plat1.x += platSpeed1
 	}
	if(platmove2 == 1){
if(plat2.x < 0){
	platSpeed2 = -platSpeed2
}else if(plat2.x > 700){ 
platSpeed2 = -platSpeed2}
plat2.x += platSpeed2
 	}
	if(platmove3 == 1){
if(plat3.x < 0){
	platSpeed3 = -platSpeed3
}else if(plat3.x > 700){ 
platSpeed3 = -platSpeed3}
plat3.x += platSpeed3
 	}
	if(platmove4 == 1){
if(plat4.x < 0){
	platSpeed4 = -platSpeed4
}else if(plat4.x > 700){ 
platSpeed4 = -platSpeed4}
plat4.x += platSpeed4
 	}
	if(platmove5 == 1){
if(plat5.x < 0){
	platSpeed5 = -platSpeed5
}else if(plat5.x > 700){ 
platSpeed5 = -platSpeed5}
plat5.x += platSpeed5
 	}
	if(platmove6 == 1){
if(plat6.x < 0){
	platSpeed6 = -platSpeed6
}else if(plat6.x > 700){ 
platSpeed6 = -platSpeed6}
plat6.x += platSpeed6
 	}
	if(platmove7 == 1){
if(plat7.x < 0){
	platSpeed7 = -platSpeed7
}else if(plat7.x > 700){ 
platSpeed7 = -platSpeed7}
plat7.x += platSpeed7
 	}
	if(platmove8 == 1){
if(plat8.x < 0){
	platSpeed8 = -platSpeed8
}else if(plat8.x > 700){ 
platSpeed8 = -platSpeed8}
plat8.x += platSpeed8
 	}
	if(platmove9 == 1){
if(plat9.x < 0){
	platSpeed9 = -platSpeed9
}else if(plat9.x > 700){ 
platSpeed9 = -platSpeed9}
plat9.x += platSpeed9
 	}
	if(platmove10 == 1){
if(plat10.x < 0){
	platSpeed10 = -platSpeed10
}else if(plat10.x > 700){ 
platSpeed10 = -platSpeed10}
plat10.x += platSpeed10
 	}
	if(platmove11 == 1){
if(plat11.x < 0){
	platSpeed11 = -platSpeed11
}else if(plat11.x > 700){ 
platSpeed11 = -platSpeed11}
plat11.x += platSpeed11
 	}


},10)





//base platform
var base = {x:-50, y:c.height-100, w:900, h:50 }

setInterval(function(){
  if ( px < base.x + base.w && px + pw > base.x && py < base.y + base.h && ph + py > base.y){
 if(py + ph >= base.y){ py = base.y - ph; wait = 0;}}},5.56)




//platforms


setInterval(function(){
  if ( px <= plat1.x + plat1.w && px + pw >= plat1.x && py <= plat1.y + plat1.h && ph + py >= plat1.y ){
//top collision
   if(ph + py >= plat1.y && ph + py <= plat1.y + jumpH + 2){  py = plat1.y - ph; wait = 0;}
//bottom collision
  else if(py <= plat1.y + plat1.h &&  py >= plat1.y + plat1.h - jumpH - 2){py = plat1.y + plat1.h;setTimeout(function(){jump = 0;},50)}
//right collision
  else if( px <= plat1.x + plat1.w && px >= plat1.x + plat1.w - Pspeed- 2){ px = plat1.x + plat1.w;setTimeout(function(){jump = 0;},50)
//left collision
 }else if( px + pw >= plat1.x && px + pw <= plat1.x + Pspeed+ 2){px = plat1.x - pw;setTimeout(function(){jump = 0;},50)}}},5.56)

//2


setInterval(function(){
  if ( px <= plat2.x + plat2.w && px + pw >= plat2.x && py <= plat2.y + plat2.h && ph + py >= plat2.y ){
   if(ph + py >= plat2.y && ph + py <= plat2.y + jumpH+ 2){  py = plat2.y - ph; wait = 0;}
  else if(py <= plat2.y + plat2.h &&  py >= plat2.y + plat2.h - jumpH- 2){py = plat2.y + plat2.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat2.x + plat2.w && px >= plat2.x + plat2.w - Pspeed- 2){ px = plat2.x + plat2.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat2.x && px + pw <= plat2.x + Pspeed+ 2){px = plat2.x - pw;setTimeout(function(){jump = 0;},50)}}},5.56)

//3


setInterval(function(){
  if ( px <= plat3.x + plat3.w && px + pw >= plat3.x && py <= plat3.y + plat3.h && ph + py >= plat3.y ){
   if(ph + py >= plat3.y && ph + py <= plat3.y + jumpH+2){  py = plat3.y - ph; wait = 0;}
  else if(py <= plat3.y + plat3.h &&  py >= plat3.y + plat3.h - jumpH- 2){py = plat3.y + plat3.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat3.x + plat3.w && px >= plat3.x + plat3.w - Pspeed- 2){ px = plat3.x + plat3.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat3.x && px + pw <= plat3.x + Pspeed+ 2){px = plat3.x - pw;setTimeout(function(){jump = 0;},50)}}},5.56)


//4


setInterval(function(){
  if ( px <= plat4.x + plat4.w && px + pw >= plat4.x && py <= plat4.y + plat4.h && ph + py >= plat4.y ){
   if(ph + py >= plat4.y && ph + py <= plat4.y + jumpH+2){  py = plat4.y - ph; wait = 0;}
  else if(py <= plat4.y + plat4.h &&  py >= plat4.y + plat4.h - jumpH-2){py = plat4.y + plat4.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat4.x + plat4.w && px >= plat4.x + plat4.w - Pspeed- 2){ px = plat4.x + plat4.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat4.x && px + pw <= plat4.x + Pspeed+ 2){px = plat4.x - pw;setTimeout(function(){jump = 0;},50)}}},5.56)




setInterval(function(){
  if ( px <= plat5.x + plat5.w && px + pw >= plat5.x && py <= plat5.y + plat5.h && ph + py >= plat5.y ){
   if(ph + py >= plat5.y && ph + py <= plat5.y + jumpH+2){  py = plat5.y - ph; wait = 0;}
  else if(py <= plat5.y + plat5.h &&  py >= plat5.y + plat5.h - jumpH-2){py = plat5.y + plat5.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat5.x + plat5.w && px >= plat5.x + plat5.w - Pspeed- 2){ px = plat5.x + plat5.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat5.x && px + pw <= plat5.x + Pspeed+ 2){px = plat5.x - pw;setTimeout(function(){jump = 0;},50)}}},5.56)




setInterval(function(){
  if ( px <= plat6.x + plat6.w && px + pw >= plat6.x && py <= plat6.y + plat6.h && ph + py >= plat6.y ){
   if(ph + py >= plat6.y && ph + py <= plat6.y + jumpH+2){  py = plat6.y - ph; wait = 0;}
  else if(py <= plat6.y + plat6.h &&  py >= plat6.y + plat6.h - jumpH-2){py = plat6.y + plat6.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat6.x + plat6.w && px >= plat6.x + plat6.w - Pspeed - 2){ px = plat6.x + plat6.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat6.x && px + pw <= plat6.x + Pspeed + 2){px = plat6.x - pw;setTimeout(function(){jump = 0;},50)}}},5.56)




setInterval(function(){
  if ( px <= plat7.x + plat7.w && px + pw >= plat7.x && py <= plat7.y + plat7.h && ph + py >= plat7.y ){
   if(ph + py >= plat7.y && ph + py <= plat7.y + jumpH+2){  py = plat7.y - ph; wait = 0;}
  else if(py <= plat7.y + plat7.h &&  py >= plat7.y + plat7.h - jumpH-2){py = plat7.y + plat7.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat7.x + plat7.w && px >= plat7.x + plat7.w - Pspeed - 2){ px = plat7.x + plat7.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat7.x && px + pw <= plat7.x + Pspeed+ 2){px = plat7.x - pw;setTimeout(function(){jump = 0;},50)}}},5.56)




setInterval(function(){
  if ( px <= plat8.x + plat8.w && px + pw >= plat8.x && py <= plat8.y + plat8.h && ph + py >= plat8.y ){
   if(ph + py >= plat8.y && ph + py <= plat8.y + jumpH+2){  py = plat8.y - ph; wait = 0;}
  else if(py <= plat8.y + plat8.h &&  py >= plat8.y + plat8.h - jumpH-2){py = plat8.y + plat8.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat8.x + plat8.w && px >= plat8.x + plat8.w - Pspeed - 2){ px = plat8.x + plat8.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat8.x && px + pw <= plat8.x + Pspeed + 2){px = plat8.x - pw;setTimeout(function(){jump = 0;},50)}}},5.56)




setInterval(function(){
  if ( px <= plat9.x + plat9.w && px + pw >= plat9.x && py <= plat9.y + plat9.h && ph + py >= plat9.y ){
   if(ph + py >= plat9.y && ph + py <= plat9.y + jumpH+2){  py = plat9.y - ph; wait = 0;}
  else if(py <= plat9.y + plat9.h &&  py >= plat9.y + plat9.h - jumpH-2){py = plat9.y + plat9.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat9.x + plat9.w && px >= plat9.x + plat9.w - Pspeed- 2){ px = plat9.x + plat9.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat9.x && px + pw <= plat9.x + Pspeed+ 2){px = plat9.x - pw;setTimeout(function(){jump = 0;},50)}}},5.56)




setInterval(function(){
  if ( px <= plat10.x + plat10.w && px + pw >= plat10.x && py <= plat10.y + plat10.h && ph + py >= plat10.y ){
   if(ph + py >= plat10.y && ph + py <= plat10.y + jumpH+2){  py = plat10.y - ph; wait = 0;}
  else if(py <= plat10.y + plat10.h &&  py >= plat10.y + plat10.h - jumpH-2){py = plat10.y + plat10.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat10.x + plat10.w && px >= plat10.x + plat10.w - Pspeed - 2){ px = plat10.x + plat10.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat10.x && px + pw <= plat10.x + Pspeed + 2){px = plat10.x - pw;setTimeout(function(){jump = 0;},50)}}},5.56)




setInterval(function(){
  if ( px <= plat11.x + plat11.w && px + pw >= plat11.x && py <= plat11.y + plat11.h && ph + py >= plat11.y ){
   if(ph + py >= plat11.y && ph + py <= plat11.y + jumpH+2){  py = plat11.y - ph; wait = 0;}
  else if(py <= plat11.y + plat11.h &&  py >= plat11.y + plat11.h - jumpH-2){py = plat11.y + plat11.h;setTimeout(function(){jump = 0;},50)}
  else if( px <= plat11.x + plat11.w && px >= plat11.x + plat11.w - Pspeed-2){ px = plat11.x + plat11.w;setTimeout(function(){jump = 0;},50)
 }else if( px + pw >= plat11.x && px + pw <= plat11.x + Pspeed+2){px = plat11.x - pw;setTimeout(function(){jump = 0;},50)}}},5.56)



//falling astroids
setInterval(function(){
  if ( px < ast1.x + ast1.w && px + pw > ast1.x && py < ast1.y + ast1.h && ph + py > ast1.y){
  if(block == 0){
  	lose = 1 
  }else if(block == 1){
  	ast1.y = 1200
  	shielddurability -= 1
  	shielduse.w -= 194*0.25
  }
 }},5.56)

setInterval(function(){
  if ( px < ast2.x + ast2.w && px + pw > ast2.x && py < ast2.y + ast2.h && ph + py > ast2.y){
 if(block == 0){
  	lose = 1 
  }else if(block == 1){
  	ast2.y = 1200
  	shielddurability -= 1
  	shielduse.w -= 194*0.25
  }
 }},5.56)

setInterval(function(){
  if ( px < ast3.x + ast3.w && px + pw > ast3.x && py < ast3.y + ast3.h && ph + py > ast3.y){
 if(block == 0){
  	lose = 1 
  }else if(block == 1){
  	ast3.y = 1200
  	shielddurability -= 1
  	shielduse.w -= 194*0.25
  }
 }},5.56)

setInterval(function(){
  if ( px < ast4.x + ast4.w && px + pw > ast4.x && py < ast4.y + ast4.h && ph + py > ast4.y){
 if(block == 0){
  	lose = 1 
  }else if(block == 1){
  	ast4.y = 1200
  	shielddurability -= 1
  	shielduse.w -= 194*0.25
  }
 }},5.56)

setInterval(function(){
  if ( px < ast5.x + ast5.w && px + pw > ast5.x && py < ast5.y + ast5.h && ph + py > ast5.y){
 if(block == 0){
  	lose = 1 
  }else if(block == 1){
  	ast5.y = 1200
  	shielddurability -= 1
  	shielduse.w -= 194*0.25
  }
 }},5.56)


//shield pickup
setInterval(function(){
  if ( px < shieldpickup.x + shieldpickup.w && px + pw > shieldpickup.x && py < shieldpickup.y + shieldpickup.h && ph + py > shieldpickup.y){
 shield = 1;
 shieldpickup.y = 1200;
 shielddurability = 4;
 shielduse.w = 194
 jetpack = 0
 }},5.56)

//jetpack pickup
setInterval(function(){
  if ( px < jetpackpickup.x + jetpackpickup.w && px + pw > jetpackpickup.x && py < jetpackpickup.y + jetpackpickup.h && ph + py > jetpackpickup.y){
 jetpack

  = 1;
 jetpackpickup.y = 1200;
 jetpackpickup1.y = 1200;
 jetpackpickup2.y = 1200;
 jetpackuse.w = 194;
 shield = 0
 }},5.56)
//shield manager
setInterval(function(){
if(shielddurability == 0){
shield = 0;
}
},1)

//jetpack manager
setInterval(function(){
if(jetpackuse.w <= 0){
jetpack = 0;
}
},1)



//shield spawns
setInterval(function(){
if(height >= 70 && height <= 100){

	shieldspawn = 1
}else if(height >= 970 && height <= 1000){

	shieldspawn = 1
}else if(height >= 2470 && height <= 2500){

	shieldspawn = 1
}else if(height >= 3970 && height <= 4000){

	shieldspawn = 1
}},1)
//jet pack animation
setInterval(function(){
if(thrust == 1){
	thrust = 0
}else if(thrust == 0){
	thrust = 1
}

},50)
//jetpack spawn
setInterval(function(){
if(height >= 1370 && height <= 1400){

	jetpackspawn = 1
}else if(height >= 2970 && height <= 3000){

	jetpackspawn = 1
}else if(height >= 4470 && height <= 4500){

	jetpackspawn = 1
}},1)




//timer
var time = 0
setInterval(function(){
time += 1
},1000)


//draw function
setInterval(function(){
if( py >= c.height){
	setTimeout(function(){
 lose = 1 
},100)
}
},100)


     draw=window.rInterval(function(){

 if(lose == 0){
	c.width = c.width;
ctx.strokeRect(base.x, base.y, base.w, base.h)

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
ctx.fillRect(ast1.x,ast1.y,ast1.w,ast1.h)
ctx.fillRect(ast2.x,ast2.y,ast2.w,ast2.h)
ctx.fillRect(ast3.x,ast3.y,ast3.w,ast3.h)
ctx.fillRect(ast4.x,ast4.y,ast4.w,ast4.h)
ctx.fillRect(ast5.x,ast5.y,ast5.w,ast5.h)

ctx.lineWidth = 5; 




ctx.fillStyle ='rgba(0,0,0,1)';
 ctx.font = "30px Arial";
	ctx.fillText("Time:" + time + 's',550,980);
	ctx.fillText("Height:" + Math.round(height) + 'm'  ,50,980);

//player
ctx.fillRect(px,py,pw,ph)
if(jetpack == 1){
	ctx.strokeRect(300, 955, 200, 36)
	ctx.fillStyle ='rgba(255,116,5,1)';
ctx.fillRect(jetpackuse.x, jetpackuse.y,jetpackuse.w, jetpackuse.h)
ctx.fillStyle ='rgba(139,69,19,1)';
	ctx.fillRect(px,py+17,pw,ph-17)
	
if(flight == 1){
if(thrust == 1){
ctx.fillStyle ='rgba(255,116,5,1)';
	ctx.fillRect(px+5,py+30,5,12)
	ctx.fillRect(px+20,py+30,5,12)
}
}
ctx.fillStyle ='rgba(192,192,192,1)';
ctx.fillRect(px+4,py+21,7,12)
	ctx.fillRect(px+19,py+21,7,12)}

ctx.fillStyle ='rgba(255,255,0,1)';
if(shield == 1){
ctx.strokeRect(300, 955, 200, 36)
ctx.fillRect(shielduse.x, shielduse.y,shielduse.w, shielduse.h)
ctx.fillRect(px+10, py +10, 10,10 )
}


ctx.fillStyle ='rgba(0,0,0,1)';
//shield
ctx.strokeStyle ='rgba(255,255,0,1)';
ctx.lineWidth = 5; 
ctx.strokeRect(shieldpickup.x,shieldpickup.y,shieldpickup.w,shieldpickup.h)

ctx.fillStyle ='rgba(139,69,19,1)';
ctx.fillRect(jetpackpickup.x,jetpackpickup.y,jetpackpickup.w,jetpackpickup.h)
ctx.fillStyle ='rgba(192,192,192,1)'
ctx.fillRect(jetpackpickup1.x,jetpackpickup1.y,jetpackpickup1.w,jetpackpickup1.h)
ctx.fillRect(jetpackpickup2.x,jetpackpickup2.y,jetpackpickup2.w,jetpackpickup2.h)


'rgba(255,255,0,1)'
if(block == 1){
ctx.strokeRect(px-5,py-5,pw+10,ph+10)
}



}else if(lose == 1){
	if(stop == 0){
c.width = c.width
	 ctx.font = "100px Arial";
	ctx.fillText("You lost",225,200); 
	if(time < 100){
		ctx.fillText("Time:" + time + 's',200,750);
	}else if(time >= 100 && time < 1000){
		ctx.fillText("Time:" + time + 's',160,750);
	}else if(time >= 1000 && time < 10000){
		ctx.fillText("Time:" + time + 's',140,750);
	}else if(time >= 10000 && time < 100000){
		ctx.fillText("Time:" + time + 's',100,750);
	}else if(time >= 100000 && time < 1000000){
		ctx.fillText("Time:" + time + 's',60,750);
	}else if(time >= 1000000 && time < 10000000){
		ctx.fillText("Time:" + time + 's',20,750);
	}else if(time >= 10000000){
		 ctx.font = "70px Arial";
		ctx.fillText("Time:" + time + 's',20,750);
	}


 ctx.font = "100px Arial";


	if(height < 1000){
	ctx.fillText("Height:" + Math.round(height) + 'm'  ,160,500);}
	else if(height >= 1000 && height < 10000){
		ctx.fillText("Height:" + Math.round(height) + 'm'  ,120,500);
	}else if(height >= 10000 && height < 100000){
		ctx.fillText("Height:" + Math.round(height) + 'm'  ,80,500);
	}else if(height >= 100000 && height < 1000000){
		ctx.fillText("Height:" + Math.round(height) + 'm'  ,40,500);
	}else if(height >= 1000000){
		 ctx.font = "70px Arial";
		ctx.fillText("Height:" + Math.round(height) + 'm'  ,40,500);
	}
	stop = 1;
}}



},10)


//Created by Lucas Marrie
//a product of Firebals LTD





