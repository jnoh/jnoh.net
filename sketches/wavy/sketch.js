var f = 0;
canvasWidth = window.innerWidth;
canvasHeight = window.innerHeight;

setup=draw=_=>{

  createCanvas(window.innerWidth,window.innerHeight);
	f++;

	background(255);
	fill(255);
  stroke(255, 255, 255);
  strokeWeight(2);

  var width = canvasWidth;
  var height = canvasHeight - 300;
  var numLines = 10;
  var lineHeight = height / numLines;

  var color = 255;
  var starty = canvasHeight - height;
	for(y=starty;y<starty+height;y+=lineHeight) {
		beginShape()

    stroke(255, color, 255);
    color = color - (255 / numLines);

    var startx = (canvasWidth - width) / 2
    for(x=startx;x<startx+width;++x) {
      newy = y - 400/(2 + pow(x - (canvasWidth/2),4) / 8e8) * noise(x/30+f/90+y);
      vertex(x, newy);
    }

		endShape()
	}
}
