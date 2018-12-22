<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<link rel="icon" href="favicon.jpg" />
		<link rel="stylesheet" type="text/css" href="../assets/css/style.css">
	</head>
	<body>

		<div class="wrapper">
			<div class="btn-start">
				<button id="dynamic">Start curve</button>
				<button id="static">Start static curve</button>
			</div>

			<div class="line-y">Y</div>
			<div class="line-x">X</div>

			<div class="months">
			</div>

			<canvas id="canvas" width="1000" height="500"></canvas>


		</div>

		<script type="text/javascript" src="../src/dynamic/dynamic.js"></script>
		<script type="text/javascript" src="../src/static/static.js"></script>
	</body>
</html>