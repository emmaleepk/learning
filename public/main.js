
function classChart(){
	let myChart = document.getElementById('classChart').getContext('2d');

	//Global Options
	Chart.defaults.global.defaultFontFamily='Lato';
	Chart.defaults.global.defaultFontSize=18;
	Chart.defaults.global.defaultFontFamily='#777';

	let massPopChart = new Chart(myChart, {
		type:'doughnut', //bar, hoizontalBar, pie, line, doughnut,radar,polarArea
		responsive:true,
		maintainAspectRatio:true,
		data:{
			labels:['Cycle', 'Kick Box','Power Training','SHRED','Total Resistance','Cardio Dance','Yoga','ABS-so-GLUTE','Co-Op'],
			datasets:[{
				label:'Classes',
				data:[
					9,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9
				],
				backgroundColor:[
					'#AAB056',
					'#B23675',
					'#345449',
					'#ff6600',
					'#F1445B',
					'#2B193E',
					'#BE3B45',
					'#52733B',
					'#8D2D56'
				],
				borderWidth:1,
				borderColor:'#777',
				hoverBorderWidth:3,
				hoverBorderColor:'#000'
			}]
		},
		options:{
			legend:{
				display: true,
				position:'right',
				labels:{
					fontColor:'#000'
				}
			},
			layout:{
				padding:{
					left:50,
					right:50,
					top:25,
					bottom:50
				}
			},
		}
	});
}

function yearChart(){
	let myChart = document.getElementById('yearChart').getContext('2d');

	//Global Options
	Chart.defaults.global.defaultFontSize=18;
	Chart.defaults.global.defaultFontColor='#777';

	let massPopChart = new Chart(myChart, {
		type:'line', //bar, hoizontalBar, pie, line, doughnut,radar,polarArea
		responsive:true,
		maintainAspectRatio:true,
		data:{
			labels:['June','July','August','September','October','November','December','Janurary','Feburary','March','April','May'],
			datasets:[{
				label:'Classes',
				data:[
					9,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					10,
					11,
					12
				],
				backgroundColor:'transparent',
				borderWidth:1,
				borderColor:'#345449',
				pointBackgroundColor:'#345449',
				pointHoverBorderColor:'#345449',
				pointHoverWidth:5
			}]
		},
		options:{
			legend:{
				display: false,
				position:'right',
			},
			layout:{
				padding:{
					left:50,
					right:50,
					top:25,
					bottom:50
				}
			},
			tooltip:{
				enable:false,
				displayColors:false
			}
		}
	});
}
