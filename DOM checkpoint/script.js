var plus = document.getElementsByClassName('btn-plus');
var counter = document.getElementsByClassName('counter');
var minus = document.getElementsByClassName('btn-minus');

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', function () {
    counter[i].innerText++;
    total();
  });

  minus[i].addEventListener('click', function () {
    if (counter[i].innerText > 0) counter[i].innerText--;
    total();
  });
}
function total() {
  var quantity = document.querySelectorAll('.counter');
  var prixItem = document.querySelectorAll('.prx');
  var prixtotal = document.querySelector('.prix-total');
  var sum =0;
  for (let i=0; i<quantity.length;i++){
    sum += quantity[i].innerText*prixItem[i].innerText;
  }
  prixtotal.innerText = sum;
}
total();



var del = document.querySelectorAll('.close');
var item = document.querySelectorAll('.product')
for (let i=0; i<del.length;i++){
  del[i].addEventListener('click', function(){
    item[i].remove();
    
  })
 }
 


var heartBtn = document.querySelectorAll(".heartBtn");
var heart = document.querySelectorAll('.fas.fa-heart');
for(let i = 0;i<heartBtn.length;i++){
heartBtn[i].addEventListener('click', function () {
  if(heart[i].style.color == 'blue'){
     heart[i].style.color ='black'
  }
  else{
      heart[i].style.color = 'blue';
  }
  })
}
