// Your work goes here...

function draw() {

	canvas = document.getElementById('game');

	if (canvas.getContext) {
		ctx = canvas.getContext('2d');

		var img = document.getElementById("spSheet");

	  //ctx.drawImage(img, srcXCoord, srcYCoord, srcWidth, srcHeight,
	  //			  xCoord, yCoord, width, height)
	

		//tree
		ctx.drawImage(img, 0, 270, 80,  130, 30, 150, 170, 300);
		//bushes - done after tree so that it's behind grass
		ctx.drawImage(img, 0, 700, 900, 200, 0, 350, 800, 200);
		//duck 1
		ctx.drawImage(img, 212, 198, 30, 30, 500, 100, 50, 50);



	} else {
		alert('Sorry, canvas is not supported on your browser!');
	}

	
}

