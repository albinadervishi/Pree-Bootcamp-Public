
// function switchName() { 
//     var newName=document.getElementById("name");
//     newName.innerHTML = "Albina Dervishi";
// }


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

function changeUsername(){
    let username=localStorage.getItem("username");
    if(username == "Jane Doe"){
        username=prompt("please enter your name:");
        localStorage.setItem("username", username);
    }
    let usernameDiv=document.getElementById("username");
    usernameDiv.innerText= username;

    let newUsername= prompt("Please enter your name:");
    localStorage.setItem("username", newUsername);
    usernameDiv.innerText= newUsername;
}



