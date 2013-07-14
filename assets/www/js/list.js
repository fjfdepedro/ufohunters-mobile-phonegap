var serviceURL = "http://www.ufo-hunters.com/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
    
	$.getJSON(serviceURL + 'reports.json', function(data) {
	     $('#employeeList li').remove();
	     $.each(data, function(key, val) {
		     var fechasighting = val.sighted_at;		     
		     var year        = fechasighting.substring(0,4);
			 var month       = fechasighting.substring(4,6);
			 var day         = fechasighting.substring(6,8);
			 var date        = new Date(year, month-1, day);					
			 fechasighting = $.datepicker.formatDate("DD d. MM yy", date);		     
		     
		     $('#employeeList').append('<li><a href="details.html?id=' + 
		      val._id + '"><h4>' + val.location + 
		      '</h4><p>' + fechasighting + '</p></a>' + 
		      '</li>' 
		     );
		  });		
		$('#employeeList').listview('refresh');
	});
}