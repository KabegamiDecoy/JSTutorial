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