// Урок 1
function fun1() {
    var chbox;
    chbox=document.getElementById('One');

    if (chbox.checked) {
        alert('Выбран');
    }
    else {
        alert('Не выбран');
    }
}

function fun2() {
    var radi=document.getElementsByName('r1');
    for (var i = 0 ; i < radi.length; i++) {
        if (radi[i].checked) {
            alert('Выбран ' +i+ ' элемент')
        }
    }
}

// Урок 2
function fun3() {
    var sel = document.getElementById ('mySelect').selectedIndex;
    var options = document.getElementById('mySelect').options;
    alert('Выбрана опция ' +options[sel].text);
}

function fun4() {
    var rng=document.getElementById('r2');
    var i1=document.getElementById('i1');
    i1.value=rng.value;
}
function fun5() {
    var rng=document.getElementById('r3');
    var div=document.getElementById('test');
    div.style.width=rng.value+'px';
}

// Урок 3

function fun6() {
    var rtl=document.getElementById('rtl').value;
    var rtr=document.getElementById('rtr').value;
    var rbr=document.getElementById('rbr').value;
    var rbl=document.getElementById('rbl').value;
    var ttl=document.getElementById('ttl').value;
    var ttr=document.getElementById('ttr').value;
    var tbr=document.getElementById('tbr').value;
    var tbl=document.getElementById('tbl').value;

    var block = document.getElementById('block');

    ttl.value=rtl;
    ttr.value=rtr;
    tbr.value=rbr;
    tbl.value=rbl;

    block.style.borderRadius=rtl+'px ' +rtr +'px ' +rbr +'px '+rbl+'px';
}

// Урок 4

document.getElementById('nav').onmouseover = function(event) {
    var target = event.target;
    if (target.className == 'menu-item') {
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display='block';
    }
}

document.onmouseover=function(event) {
    var target = event.target;
    if (target.className!='menu-item' && target.className!='submenu'){
        closeMenu();
    }
}

function closeMenu() {
    var menu=document.getElementById('nav');
    var subm=document.getElementsByClassName('submenu');
    for (var i=0; i <subm.length; i++) {
        subm[i].style.display="none";
    }
}
//Урок 5
var tab;
var tabContent;
 
window.onload=function() {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}


function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
            }
        }
    }
}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}
//Урок 6
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//Урок 7
function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
  }
  //Урок 8
  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1){
        slideIndex=slides.length
    }
    for (i=0; i < slides.length; i++){
        slides[i].style.display="none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className= dots[i].className.replace("active","")
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+= " active";
}
// Урок 9
function myFunction () {
    var input, filter, ul, li,a,i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i=0; i<li.length; i++){
        a =li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }
}
//Урок 10
function plus() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;

    document.getElementById('out').innerHTML = result;
}

function minus() {
    var num1,num2,result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result = num1 - num2;
    document.getElementById('out').innerHTML = result;
} 

function multiply() {
    var num1,num2,result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result = num1 * num2;
    document.getElementById('out').innerHTML = result;
}

function share() {
    var num1,num2,result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result = num1 / num2;
    document.getElementById('out').innerHTML = result;
}
//Урок 11
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.609, lng: 38.0975 },
    zoom: 16,
  })};
  //Урок 12
  var modal = document.getElementById('myModalImg');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}