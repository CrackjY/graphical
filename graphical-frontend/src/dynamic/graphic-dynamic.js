(() => {
	let canvas = document.getElementById('canvas');
	let btnStart = document.querySelector('.btn-start');
	let xCount;
	let yCount;
	let enabled;

	let fetchGraphical = () => {

		fetch('../../graphical-backend/data/data.php')
			.then(response => response.json())
			.then((data, index) => {

				let graphical = () => {

					let curve = () => {
						let a = canvas.getContext('2d');
						a.beginPath();
						// position
						a.moveTo(0, 250);

						data.forEach((item, index) => {
							console.log('day : ', item.day)
							console.log('temperature : ', item.temperature);

							// 1 day = 32.2 px
							a.lineTo(item.day*32.2, item.temperature);
							// writing
							a.fillText(item.temperature, item.day*32.2, item.temperature);
						})

						a.strokeStyle = 'blue';
						a.stroke();
					}

					let digonal = () => {
						let digonal = canvas.getContext('2d');

						digonal.beginPath();
						digonal.moveTo(0, 0);
						digonal.lineTo(1000, 500);
						digonal.strokeStyle = "grey";
						digonal.stroke();
					}

					digonal();
					curve();
				}

				graphical()
			});

	}

	// write vertical line
	let grid = () => {
		
		let line = canvas.getContext('2d');
		
		line.beginPath();

		for (let i = 0; i < 1000; i += 32.3) {
			line.moveTo(i, 0);
			line.lineTo(i, 500);
		}

		line.strokeStyle = "#9e9494";
		line.stroke();
	}

	// Abscissa axis
	let abscissaAxis = () => {
		let axisX = canvas.getContext('2d');
		axisX.beginPath();

		let axisXcount = 0;
		let i = 0;

		axisX.moveTo(1000, 250);
		
		while (i < 31 && axisXcount < 1000) {
			axisX.lineTo(i, 250);
			axisX.fillText(i, axisXcount, 250);

			i++;
			axisXcount += 32.3;

		}

		axisX.strokeStyle = "grey";
		axisX.stroke();
	}

	/**
	 * Use jQuery for animation (Switch my spec)
	 */
	let toggleSwitch = ($element) => {
		if ($element.attr('checked') === 'checked') {
			enabled = false;
			$element.removeAttr('checked');
			$element.removeAttr('style');
			$element.animate({float: 'left'});
			$('#dynamic').attr('disabled', 'disabled');
			return;
		} else {
			enabled = true;
			$element.removeAttr('style');
			$element.attr( 'checked', 'checked');
			$element.animate({marginLeft: '44px'}, 700);
			$('#dynamic').removeAttr('disabled');
			return;
		}
	}

	let toggleOff = ($element) => {
		
	}

	$('.sub-chunk').on('click', (e) => {
		toggleSwitch($('.sub-chunk'));

		if (enabled === true) {
			$('#dynamic').on('click', (e) => {
				setTimeout(fetchGraphical, 1000);
			});

			grid();
			abscissaAxis();
		}

		if (enabled == false) {

			$('#reload-off').on('click', () => {

			});
		}
		





		console.log('enabled : ', enabled);

	});
		
})();

