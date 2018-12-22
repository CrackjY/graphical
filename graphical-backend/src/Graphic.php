<?php

/**
* @return JsonResponse
*/
class Graphic
{
	public function statistic()
	{	
		$statistics = [];
		
		for($i = 0; $i < 31; $i++) {

			$statistics[$i] = [
				'day' => $i+1,
				'temperature' => rand(150, 300),
			];
		}

		return json_encode($statistics);
	}
}