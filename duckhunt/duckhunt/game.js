// Your work goes here...

function draw() {

	canvas = document.getElementById('game');

	if (canvas.getContext) {
		ctx = canvas.getContext('2d');

		var img = document.getElementById("spSheet");

	  //ctx.drawImage(img, srcXCoord, srcYCoord, srcWidth, srcHeight,
	  //			  xCoord, yCoord, width, height)
	

		//tree 		
		//if attempting to use ground div, use arguments of
		//			  img, 0,   270, 80,  130, 30,  180, 170, 300
		ctx.drawImage(img, 0,   270, 80,  130, 30,  210, 170, 300);
		
		//bushes - done after tree so that tree is behind grass
		//if attempting to use ground div, use arguments of
		//			  img, 0,   700, 900, 200, 0,   370, 800, 200
		ctx.drawImage(img, 0,   700, 900, 200, 0,   400, 800, 200);
		
		//duck 1
		ctx.drawImage(img, 212, 198, 30,  30,  500, 100, 50,  50);
		
		//duck 2
		ctx.drawImage(img, 301, 158, 30,  30,  220, 200, 50,  50);
		
		//duck 3
		ctx.drawImage(img, 48,  237, 30,  30,  650, 300, 50,  50);
		
		//duck 4
		ctx.drawImage(img, 130, 121, 34,  30,  50,  50,  55,  50);
		
		//duck 5
		ctx.drawImage(img, 83,  157, 30,  30,  670, 50,  50,  50);
		
		//dog
		ctx.drawImage(img, 66,  1,   50,  42,  200, 510, 80,  70);


	} else {
		alert('Sorry, canvas is not supported on your browser!');
	}

	
}

