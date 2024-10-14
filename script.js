
// var form = document.querySelector("#userForm");
// var clientList = document.getElementById("client-list").value;

// document.addEventListener('submit', function(e){
//     e.preventDefault();

//     var clientList = document.getElementById('client').value;

// });


var buttonSubmit = document.getElementById('button');


function employee() {
    
    var clientList = document.getElementById('client-list').value;
    document.getElementById('client').innerHTML = clientList;

}



buttonSubmit.addEventListener('click', employee);