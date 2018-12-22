(() => {
	let i = 0;
	
	let curveStatic = () => {
		let chunk = canvas.getContext('2d');

		chunk.beginPath();
		chunk.moveTo(0, 250);

		let xCount = 0;
		let yCount = 250;

		while(i < 5 && xCount < 1000 && yCount < 500) {

			chunk.lineTo(xCount, yCount);
			chunk.strokeStyle = "blue";

			console.log('i : ', i);
			console.log('x : ', xCount);
			console.log('y : ', yCount);
			
			i++;
			xCount +=32.3;
			yCount -= Math.random() * 15 - Math.random() * 15;
		}
		chunk.stroke();
	}

	document.getElementById('static').addEventListener('click', function(e) {
		setTimeout(curveStatic, 100);
	});
	
})();