function doFirst(){
	// Declaring global variables
	barSize=600;
	myMovie=document.getElementById('myMovie');
	playButton=document.getElementById('playButton');
	bar=document.getElementById('defaultBar');
	progressBar=document.getElementById('progressBar');
	
	// declaring event listeners
	playButton.addEventListener('click', playOrPause, false);
	bar.addEventListener('click', clickedBar, false);	
}

function playOrPause(){
	if(!myMovie.paused && !myMovie.ended){
		myMovie.pause();
		playButton.innerHTML='Play';
		window.clearInterval(updateBar);// stop updating the progress bar
	}
	else{
		myMovie.play();
		playButton.innerHTML='Pause';
		updateBar=window.setInterval(update, 500);// called evry half a second to update the progress bar
	}	
}

function update(){
	if(!myMovie.ended){
		var size=parseInt(myMovie.currentTime*barSize/myMovie.duration);// size of the bar at a particular moment
		progressBar.style.width=size+'px';		
	}
	else{
		progressBar.style.width='0px'
		playButton.innerHTML='Play';
		window.clearInterval(updateBar);
	}
}

function clickedBar(e){
	if(!myMovie.paused && !myMovie.ended){
		
		var mouseX=e.pageX-bar.offsetLeft;// x position of mouse minus that of bar
		
		var newtime=mouseX*myMovie.duration/barSize;
		
		myMovie.currentTime=newtime;
		progressBar.style.width=mouseX+'px';
	}
}
window.addEventListener('click',doFirst.false);
