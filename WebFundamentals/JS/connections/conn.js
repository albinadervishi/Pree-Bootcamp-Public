
function switchName() { 
    var newName=document.getElementById("name");
    newName.innerHTML = "Albina Dervishi";
}


function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    var requestElement = document.querySelector("#request_number");
    requestElement.innerHTML--;
    var friendsElement = document.querySelector("#friends_number");  
    friendsElement.innerHTML++;
}

function decline(id){
    var element = document.querySelector(id);
    element.remove();
    var requestElement = document.querySelector("#request_number");
    requestElement.innerHTML--;
}



