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

