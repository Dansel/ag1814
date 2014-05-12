$(function () {
		$('#graph01').highcharts({
			title: {
				text: 'Månadsförbrukning',
				x: -20 //center
			},
			subtitle: {
				text: 'Senaste 12 månaderna',
				x: -20
			},
			xAxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
					'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			},
			yAxis: {
				title: {
					text: 'Förbrukning (kWh)'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				valueSuffix: 'kWh'
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [ {
				name: 'kWh',
				data: [341, 336, 328, 315, 311, 310, 304, 308, 311, 324, 332, 334]
			}]
		});
	});

$(function () {
	$('#graph02').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false
		},
		title: {
			text: 'Du har använt<br>73%(200kWh)<br>av ditt mål<br> på 275kWh',
			align: 'center',
			verticalAlign: 'middle',
			y: 50
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					distance: -50,
					style: {
						fontWeight: 'bold',
						color: 'white',
						textShadow: '0px 1px 2px black'
					}
				},
				startAngle: 0,
				endAngle: 360,
				center: ['50%', '75%']
			}
		},
		series: [{
			type: 'pie',
			name: ' ',
			innerSize: '50%',
			data: [
				['Förbrukat', 73],
				{
					name: 'Kvar',
					y: 27,
					dataLabels: {
						enabled: false
					}
				}
			]
		}]
	});
});

$(function () {
	
	var gaugeOptions = {
	
		chart: {
			type: 'solidgauge'
		},
		
		title: null,
		
		pane: {
			center: ['50%', '85%'],
			size: '140%',
			startAngle: -90,
			endAngle: 90,
			background: {
				backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
				innerRadius: '60%',
				outerRadius: '100%',
				shape: 'arc'
			}
		},

		tooltip: {
			enabled: false
		},
		   
		// the value axis
		yAxis: {
			stops: [
				[0.1, '#55BF3B'], // green
				[0.5, '#DDDF0D'], // yellow
				[0.9, '#DF5353'] // red
			],
			lineWidth: 0,
			minorTickInterval: null,
			tickPixelInterval: 400,
			tickWidth: 0,
			title: {
				y: -70
			},
			labels: {
				y: 16
			}        
		},
		
		plotOptions: {
			solidgauge: {
				dataLabels: {
					y: -30,
					borderWidth: 0,
					useHTML: true
				}
			}
		}
	};
	
	// The speed gauge
	$('#graph03').highcharts(Highcharts.merge(gaugeOptions, {
		yAxis: {
			min: 0,
			max: 5000,
			title: {
				text: 'Nuvarande förbrukning'
			}       
		},

		credits: {
			enabled: false
		},
	
		series: [{
			name: 'Speed',
			data: [1211],
			dataLabels: {
				format: '<div style="text-align:center"><span style="font-size:25px;color:' + 
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' + 
					'<span style="font-size:12px;color:silver">Watt</span></div>'
			},
			tooltip: {
				valueSuffix: ' km/h'
			}
		}]
	
	}));
	
  
							   
	// Bring life to the dials
	setInterval(function () {
		// Speed
		var chart = $('#graph03').highcharts();
		if (chart) {
			var point = chart.series[0].points[0],
				newVal,
				inc = Math.round((Math.random() - 0.5) * 100);
			
			newVal = point.y + inc;
			if (newVal < 300 || newVal > 5000) {
				newVal = point.y - inc;
			}
			
			point.update(newVal);
		}

		// RPM
		chart = $('#container-rpm').highcharts();
		if (chart) {
			var point = chart.series[0].points[0],
				newVal,
				inc = Math.random() - 0.5;
			
			newVal = point.y + inc;
			if (newVal < 0 || newVal > 5) {
				newVal = point.y - inc;
			}
			
			point.update(newVal);
		}
	}, 2000);  
});

$(function () {
		$('#graph04').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Förbrukning per dag'
			},
			subtitle: {
				text: 'Månad: Maj'
			},
			xAxis: {
				type: 'category',
				labels: {
					rotation: -45,
					align: 'right',
					style: {
						fontSize: '13px',
						fontFamily: 'Verdana, sans-serif'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Förbrukning (kWh)'
				}
			},
			legend: {
				enabled: false
			},
			tooltip: {
				pointFormat: 'Förbrukning: <b>{point.y:.1f} kWh',
			},
			series: [{
				name: 'Dag',
				data: [
					['1', 6.3],
					['2', 7.4],
					['3', 9.2],
					['4', 10.1],
					['5', 12.5],
					['6', 12.6],
					['7', 13.4],
					['8', 13.1],
					['9', 0],
					['10', 0],
					['11', 0],
					['12', 0],
					['13', 0],
					['14', 0],
					['15', 0],
					['16', 0],
					['17', 0],
					['18', 0],
					['19', 0],
					['20', 0],
					['21', 0],
					['22', 0],
					['23', 0],
					['24', 0],
					['25', 0],
					['26', 0],
					['27', 0],
					['28', 0],
					['29', 0],
					['30', 0],
					['31', 0],
				],

			}]
		});
	});