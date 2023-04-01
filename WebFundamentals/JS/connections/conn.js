
function switchName() { 
    var newName=document.getElementById("name");
    newName.innerHTML = "Albina Dervishi";
}


function hide(element) {
    var removeElement = document.getElementById(element);
    if (element == request1) {
        element.remove(request1);
    } else if (element == request2) {
        element.remove(request2);
    } 
    
  }

  
function substract1(request_number) {
    var requestnr=2;
    var countElement = document.getElementById("request_number");
    requestnr--;
    countElement.innerHTML = requestnr ;  
  }

  function add1(friends_number) {
    var friendsnr=500;
    var countElement = document.getElementById("friends_number");
    friendsnr++;
    countElement.innerHTML = friendsnr ;
  }
