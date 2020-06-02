function drawBarPlot(){ 
	d3.select("#treemapDiv").remove();
	var father = d3.select("#draw");
	father.append("canvas")
		.attr("id", "productBar")
		.attr("width", 800)
		.attr("height", 400);
	
	var butt = document.createElement("input");
	butt.style.position = "absolute";
	butt.style.left = "2000";
	butt.style.top = "400";
	butt.setAttribute("type", "button");
	butt.setAttribute("value", "RETURN");
	butt.setAttribute("id", "returnButt");
	butt.style.borderColor = "#82C4C3";
	butt.style.backgroundColor = "#82C4C3";
	butt.style.color = "#FFF";
	butt.onclick = function(){
		drawTreemap();
	}
	document.getElementById("draw").appendChild(butt);
	
	if($("#productBar").length) {
			var chartLineLG = document.querySelector("#productBar").getContext("2d"),
				gradientStroke = chartLineLG.createLinearGradient(700, 0, 100, 0),
				gradientgridLines = chartLineLG.createLinearGradient(700, 0, 100, 0),
				gradientFill = chartLineLG.createLinearGradient(0, 0, 0, 400);
			gradientStroke.addColorStop(0, 'rgba(32, 73, 219, .6)');
			gradientStroke.addColorStop(.5, 'rgba(255, 255, 255, 1)');
			gradientStroke.addColorStop(1, 'rgba(42, 242, 112, .4)');
			gradientgridLines.addColorStop(0, 'rgba(255, 255, 255, .1)');
			gradientgridLines.addColorStop(.5, 'rgba(255, 255, 255, .5)');
			gradientgridLines.addColorStop(1, 'rgba(255, 255, 255, .1)');
			gradientFill.addColorStop(0, "rgba(32, 73, 219, 1)");
			gradientFill.addColorStop(1, "rgba(42, 242, 112, 1)");
			new Chart(chartLineLG, {
				type: 'bar',
				data: {
				labels: [202004,202003,202002,202001,201912,201911,201910,201909,201908,201907,201906,201905,201904,201903,201902,201901,201812,201811,201810,201809,201808,201807,201806,201805],
				datasets: [{
					type: 'line',
					borderColor: gradientStroke,
					pointBorderColor: gradientStroke,
					pointBackgroundColor: gradientStroke,
					pointHoverBackgroundColor: gradientStroke,
					pointHoverBorderColor: gradientStroke,
					borderWidth: "2",
					data: [111.38786, 124.92163, 0, 0, 118.1197, 126.19565, 127.96006, 123.50656, 143.15197, 126.74635, 145.68988, 148.83572, 142.01749, 120.10847, 0, 0, 114.13745, 121.58936, 140.98443, 139.66763, 138.80241, 140.14546, 155.25693, 128.62953],
					label: 'Dataset 1',
					fill: false,
					radius: 0
				}, {
					type: 'bar',
					hoverBackgroundColor: gradientFill,
					backgroundColor: gradientFill,
					data: [111.38786, 124.92163, 0, 0, 118.1197, 126.19565, 127.96006, 123.50656, 143.15197, 126.74635, 145.68988, 148.83572, 142.01749, 120.10847, 0, 0, 114.13745, 121.58936, 140.98443, 139.66763, 138.80241, 140.14546, 155.25693, 128.62953],
					label: 'Dataset 2',
					fill: gradientFill
				}
				]},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					tooltips: {
					},
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							barPercentage: 0.1,
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
							}
						}],
						yAxes: [{
							gridLines: {
								color: gradientgridLines,
								zeroLineColor: "rgba(42, 242, 112, .7)",
							}   
						}]
					},
					title: {
						display: true
					},
					plugins: {
						labels: false
					}
				}
			});
		}

}
