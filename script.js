let gridSize = 16;

const container = document.querySelector('#grid')

function darken(e) {
	if(this.style.opacity < 1) this.style.opacity = (+this.style.opacity + .1);
}

function getWidth() { 
 var viewportwidth;
  
 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
  
	if (typeof window.innerWidth != 'undefined')
	{
		viewportwidth = window.innerWidth;
	}
  
// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
 
	else if (typeof document.documentElement != 'undefined'
		&& typeof document.documentElement.clientWidth !=
		'undefined' && document.documentElement.clientWidth != 0)
	{
		viewportwidth = document.documentElement.clientWidth;
    }
  
 // older versions of IE
  
	else
	{
		viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
	}
	return viewportwidth;
}

function getHeight(){

 var viewportheight;
  
 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
  
	if (typeof window.innerWidth != 'undefined')
	{
		viewportheight = window.innerHeight;
	}
  
// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
 
	else if (typeof document.documentElement != 'undefined'
		&& typeof document.documentElement.clientWidth !=
		'undefined' && document.documentElement.clientWidth != 0)
	{
		viewportheight = document.documentElement.clientHeight;
	}
  
 // older versions of IE
  
	else
	{
		viewportheight = document.getElementsByTagName('body')[0].clientHeight;
	}
	return viewportheight;
}
function resizeGrid(){
	let width = getWidth();
	let height = getHeight();
	
	const grid = document.querySelector('#grid');

	console.log(width);
	console.log(height);
	
	console.log(grid.style.width);
	console.log(grid.style.width);

	grid.style.width = width;
	grid.style.height = height;
	
	grid.setAttribute('style',`display:grid;width:${width}px;
		height:${height}px;grid-template-columns:repeat(${gridSize},${Math.floor(width/gridSize)}px)`);

	console.log(grid.style.width);
	console.log(grid.style.height);
	grid.innerHTML = '';
	console.log(container.style.width);
	for(i = 0; i < gridSize; i++){
		for(j = 0; j < gridSize; j++){
			const grid = document.createElement('div');
			grid.classList.add('gridBlock');
			grid.id = ((i*gridSize)+j);
			grid.setAttribute('style',`background-color:black;opacity:0;
			height:${height/gridSize}px;
			width:${width/gridSize}px;`);
			container.appendChild(grid);
		}
	}
	const gridBlocks = document.querySelectorAll('.gridBlock');
	gridBlocks.forEach((gridBlock) => gridBlock.addEventListener('mouseenter', darken));

}

function buildGrid(){
	console.log(container.style.width);
	for(i = 0; i < gridSize; i++){
		for(j = 0; j < gridSize; j++){
			const grid = document.createElement('div');
			grid.classList.add('gridBlock');
			grid.id = ((i*gridSize)+j);
			grid.setAttribute('style',`background-color:black;opacity:0;
			height:${container.style.height/gridSize};
			width:${container.style.width/gridSize};`);
			container.appendChild(grid);
		}
	}
}

function getSize(){
	let newSize = parseInt(prompt("What size grid would you like?","16"),10);

	if(newSize != null && newSize != 'NaN' && newSize > 0 && newSize < 129){
		gridSize = newSize;
		resizeGrid();
	}else{
		alert("Invalid input!");
	}
}
resizeGrid();
container.addEventListener('pageshow', resizeGrid);
container.addEventListener('resize', resizeGrid);

const reset = document.querySelector('#reset');
reset.addEventListener('click', getSize);
