function acceptCookies() {
    var element = document.querySelector("#cookies");
    element.remove();
}

var grads = [24, 18, 27, 19, 21, 16, 26, 21];

var result = [
    document.querySelector("#grad1"),
    document.querySelector("#grad2"),
    document.querySelector("#grad3"),
    document.querySelector("#grad4"),
    document.querySelector("#grad5"),
    document.querySelector("#grad6"),
    document.querySelector("#grad7"),
    document.querySelector("#grad8"),
];




function changeGrads(...ids) {
    for (let i = 0; i < ids.length; i++) {
        let id = ids[i];
    grads[id]= grads[id]*9/5+32;
    result[id].textContent = grads[id] + "°"
    }
}
    