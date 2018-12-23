<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<link rel="icon" href="favicon.jpg" />
		<link rel="stylesheet" type="text/css" href="../assets/css/style.css">
		<link rel="stylesheet" type="text/css" href="../assets/css/graphical.css">
	</head>
	<body>

		<div class="wrapper">

			<div id="block-switch">
				<div>Switch</div>
				<div class="chunk">
					<div class="sub-chunk"></div>
				</div>
			</div>

			<div class="block-btn">
				<button class="graphical-btn-red" id="dynamic">Start curve</button>
				<!-- <button class="graphical-btn-blue" id="static">Start static curve</button> -->
			</div>
<!-- 
			<div class="line-y">Y</div>
			<div class="line-x">X</div> -->

			<canvas id="canvas" width="1000" height="500"></canvas>
			
			<div class="days">
			</div>
		</div>

		<div class="popup">
			<h3>Are you sure to reload ?</h3>
			<div class="popup-btn">
				<button class="graphical-btn-blue" id="reload-on">Yes</button>
				<button class="graphical-btn-red" id="reload-off">No</button>
			</div>
		</div>

		<script type="text/javascript" src="../assets/jquery/jquery.min.js"></script>
		<script type="text/javascript" src="../src/dynamic/graphic-dynamic.js"></script>
		<script type="text/javascript" src="../src/static/graphic-static.js"></script>
	</body>
</html>