$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + '/reports/' + id + '.json', displayEmployee);
});

function displayEmployee(data) {
	var employee = data;
	console.log(employee);
	
	 var fechasighting = employee.sighted_at;		     
	 var year        = fechasighting.substring(0,4);
	 var month       = fechasighting.substring(4,6);
	 var day         = fechasighting.substring(6,8);
	 var date        = new Date(year, month-1, day);					
	 fechasighting = $.datepicker.formatDate("DD d. MM yy", date);	
	 
	 var fechasightingdate = employee.reported_at;		     
	 var years        = fechasightingdate.substring(0,4);
	 var months       = fechasightingdate.substring(4,6);
	 var days        = fechasightingdate.substring(6,8);
	 var dates        = new Date(years, months-1, days);					
	 fechasightingdate = $.datepicker.formatDate("DD d. MM yy", dates);	
	 
	$('#location').html(employee.location);
	$('#sighted_at').html('<strong>Sighted at:</strong>' + fechasighting);
	$('#reported_at').html('<strong>Reported at:</strong>' + fechasightingdate);
	$('#shape_duration').html('<strong>Shape:</strong>' + employee.shape + '| <strong>Duration:</strong>' + employee.duration);
	$('#description').html(employee.description);
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
