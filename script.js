



var buttonSubmit = document.getElementById('button');


function employee() {
    
    var clientList = document.getElementById('client-list').value;
    var datePicker = document.getElementById('date-picker').value;

    var month = datePicker.slice(5,7);
    var date  = datePicker.slice(8,10);
    var year  = datePicker.slice(0,4);
    var dateFormat = month+"/"+date+"/"+year;

  
    // Result Timesheet    
    document.getElementById('client').innerHTML = clientList;
    document.getElementById('date').innerHTML = dateFormat;

}



buttonSubmit.addEventListener('click', employee);