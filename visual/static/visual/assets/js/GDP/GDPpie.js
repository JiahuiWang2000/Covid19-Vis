function drawGDPpie() {
	var dataset1 = [218062.8, 242573.8,  252208.7, 278019.7, 206504.3];
	var data1 = [1.8, 3.4, 4.1, 5.7, 2.0];
	var data2 = [36.0, 36.3, 36.9, 34.4, 39.2, 53.9];
	var data3 = [61.9, 59.7, 61.5, 55.0, 44.2];
	var dataset2 = [];
	
	for(var i = 0; i < 5; ++i)
	{
		sum = data1[i] + data2[i] + data3[i];
		dataset2[i * 3] = dataset1[i] * data1[i] / sum;
		dataset2[i * 3 + 1] = dataset1[i] * data2[i] / sum;
		dataset2[i * 3 + 2] = dataset1[i] * data3[i] / sum;
	}
	
	var pie = d3.pie()
		.value(function(d){ return d.value; })
		.sort(null)
    	.sortValues(null);
	
	var data_ready1 = pie(d3.entries(dataset1));
	var data_ready2 = pie(d3.entries(dataset2));
	
	var width = 1600, height = 500;
	
	var arcGenerator1 = d3.arc()
			.innerRadius(100)
			.outerRadius(172);
	var arcGenerator2 = d3.arc()
			.innerRadius(173)
			.outerRadius(245);
	var highlightarc = d3.arc()
		.innerRadius(173)
		.outerRadius(250);
	var clickedarc = d3.arc()
		.innerRadius(100)
		.outerRadius(245);
	var highlightclickedarc = d3.arc()
		.innerRadius(100)
		.outerRadius(250);

	function arcTween(d){
		var i = d3.interpolate(this._current, d);
		this._current = i(0);
		return function(t){
			return arcGenerator2(i(t))
		}
	}
	
	var green = d3.scaleLinear()
			.range(["white", "#69b3a2"])
			.domain([0, 5]);
	
	var blue = d3.scaleLinear()
			.range(["white", "#1b6ca8"])
			.domain([0, 5]);
	
	var father = d3.select("#draw");
	var svg = father.select("svg");

	svg = father.append("svg")
		.attr("width", width)
		.attr("height", height)
		.append("g")
		.attr("transform", "translate(" + 360 + "," + 250 + ")");

	init();
	
	function init(){
		svg.selectAll('clickedSlices').remove();
		
		svg.selectAll('innerSlices')
			.data(data_ready1)
			.enter()
			.append("path")
			.attr("class", function(d, i){return i;})
			.attr("transform", "translate(" + 0 + "," + 0 + ")")
			.attr("d", arcGenerator1)
			.attr("fill", function(d, i){ return green(i + 1); })
			.attr("stroke", "#FFF")
			.on("mouseover", function(d, i){
				svg.append("text")
					.attr("class", "detail")
					.text(function(){
						var title = "";
						if(i < 4) title += "2019年第";
						else title += "2020年第";
						title += i % 4 + 1;
						title += "季度";
						return title;
					})
					.attr("fill", "white")
					.attr("x", "-50")
					.attr("y", "-10")
					.style("text-align", "middle")
					.style("font-size", "14px")
					.style("opacity", 1);
				svg.append("text")
					.attr("class", "detail")
					.text(function(){
						var value = "";
						value += dataset1[i];
						value += "亿元";
						return value;
					})
					.attr("fill", "white")
					.attr("x", "-48")
					.attr("y", "10")
					.style("text-align", "middle")
					.style("font-size", "14px")
					.style("opacity", 1);
				d3.select(this).attr("fill", "#f4ea8e");
			})
			.on("mouseout", function(d, i){
				d3.selectAll(".detail").style("opacity", 0);
				d3.select(this).attr("fill", function(){ return green(i + 1); });
			});

		svg.selectAll('outerSlices')
			.data(data_ready2)
			.enter()
			.append("path")
			.attr("class", "second")
			.attr("transform", "translate(" + 0 + "," + 0 + ")")
			.attr("d", arcGenerator2)
			.attr("fill", function(d, i){ return blue(i % 3 + 1); })
			.attr("stroke", "#FFF")
			.on("mouseover", function(d, i){
				d3.select(this).attr("d", highlightarc);
				svg.append("text")
					.attr("class", "detail")
					.text(function(){
						var title = "";
						season = parseInt(i / 3);
						if(season < 4) title += "2019年第";
						else title += "2020年第";
						title += season % 4 + 1;
						title += "季度";
						return title;
					})
					.attr("fill", "white")
					.attr("x", "-50")
					.attr("y", "-10")
					.style("text-align", "middle")
					.style("font-size", "14px")
					.style("opacity", 1);
				svg.append("text")
					.attr("class", "detail")
					.text(function(){
						var value = "";
						num = i % 3;
						season = parseInt(i / 3);
						value += "第";
						value += num + 1;
						value += "产业";
						if(num == 0)
							value += data1[season];
						else if(num == 1)
							value += data2[season];
						else if(num == 2)
							value += data3[season];
						value += "%";
						return value;
					})
					.attr("fill", "white")
					.attr("x", "-46")
					.attr("y", "10")
					.style("text-align", "middle")
					.style("font-size", "14px")
					.style("opacity", 1);
			})
			.on("mouseout", function(){
				d3.select(this).attr("d", arcGenerator2);
				d3.selectAll(".detail").style("opacity", 0);
			})
			.on("click", function(d, i){
				click(parseInt(i / 3));
			});
	}
	
	function click(season){	
		dataset3 = [data1[season], data2[season], data3[season]];
		var data_ready3 = pie(d3.entries(dataset3));
		
		svg.selectAll('innerSlices').remove();
		svg.selectAll('outerSlices').remove();
		
		svg.selectAll('clickedSlices')
			.data(data_ready3)
			.enter()
			.append("path")
			.attr("class", "second")
			.attr("transform", "translate(" + 0 + "," + 0 + ")")
			.attr("d", clickedarc)
			.attr("fill", function(d, i){ return blue(i % 3 + 1); })
			.attr("stroke", "#FFF")
			.on("mouseover", function(d, i){
				d3.select(this).attr("d", highlightclickedarc);
				svg.append("text")
					.attr("class", "detail")
					.text(function(){
						var title = "";
						if(season < 4) title += "2019年第";
						else title += "2020年第";
						title += season % 4 + 1;
						title += "季度";
						return title;
					})
					.attr("fill", "white")
					.attr("x", "-50")
					.attr("y", "-10")
					.style("text-align", "middle")
					.style("font-size", "14px")
					.style("opacity", 1);
				svg.append("text")
					.attr("class", "detail")
					.text(function(){
						var value = "";
						value += "第";
						value += i + 1;
						value += "产业";
						value += dataset3[i];
						value += "%";
						return value;
					})
					.attr("fill", "white")
					.attr("x", "-46")
					.attr("y", "10")
					.style("text-align", "middle")
					.style("font-size", "14px")
					.style("opacity", 1);
			})
			.on("mouseout", function(){
				d3.select(this).attr("d", clickedarc);
				d3.selectAll(".detail").style("opacity", 0);
			})
			.on("click", function(d, i){
				init(i);
			});
	}
}
