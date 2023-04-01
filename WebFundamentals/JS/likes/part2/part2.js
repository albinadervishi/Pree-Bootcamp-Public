var count1 = 9;
var count2 = 12;
var count3 = 9;

function substract1(element) {
  var countElement = document.getElementById(element);
  if (element == 1) {
    count1++;
    countElement.innerText = count1 + " like(s)";
  } else if (element == 2) {
    count2++;
    countElement.innerText = count2 + " like(s)";
  } else if (element == 3) {
    count3++;
    countElement.innerText = count3 + " like(s)";
  }
}

// menyra 2

console.log("page loading...");

// index     0  1   2 , tek html vendosim funksionin sipas indexit: like(0), like(1)...
var likes = [9, 12, 9];
var spans = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + "like(s)";
}