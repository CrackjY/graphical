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
				<span>Switch</span>
				<div class="chunk">
					<div class="sub-chunk"></div>
				</div>
			</div>

			<div class="block-btn">
				<button id="dynamic">Start curve</button>
				<button id="static">Start static curve</button>
			</div>
<!-- 
			<div class="line-y">Y</div>
			<div class="line-x">X</div> -->

			<canvas id="canvas" width="1000" height="500"></canvas>
			
			<div class="days">
			</div>
		</div>

		<script type="text/javascript" src="../src/dynamic/graphic-dynamic.js"></script>
		<script type="text/javascript" src="../src/static/graphic-static.js"></script>
	</body>
</html>