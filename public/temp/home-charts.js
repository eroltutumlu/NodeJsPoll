$(document).ready(function(){

  var options = {
	  chart:{
		  renderTo:'poll',
		  type:'bar'
	  },
	  title:{
		  text:'Which programming language do you prefer?'
	  },
	  xAxis:{
		  categories:[
			  'Java',
			  'C#',
			  'Python'
		  ]
	  },
	  yAxis:{
		  title:{
			  text:'According to the users'
		  }
	  },
	  series:[
		  {
			  name:'Users',
			  data:[5,9,4]
		  }
	  ]
  };

  var barChart = new Highcharts.chart(options); 
	
});