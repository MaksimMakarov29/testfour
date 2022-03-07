al("Правила: копите деньги и прокачиваетесь, в минус можно уходить до -100, далее вы проиграете!")
var score = 0;
updating = 1;
function clickBtn() {
  score = score + updating;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "LC";
}
function update() {
  score = score - 100;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "LC";
  if1();
  updating += 1;
}
function update1() {
  score = score - 150;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "LC";
  if1();
  updating += 2;
}
function update2() {
  score = score - 250;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "LC";
  if1();
  updating += 3;
}
function update3() {
  score = score - 500;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "LC";
  if1();
  updating += 10;
}
function auto() {
  score = score - 10000;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "LC";
  if1();
  setTimeout("plusauto()", 1000);
}
function if1 () {
  if (score < -100) {
    document.write("Вы проиграли, так-как вы превысили лимит кредита");
  }
}
function plusauto () {
  score += updating;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "LC";
  setTimeout("auto1()", 1000);
}
function auto1 () {
  score += updating;
  setTimeout("plusauto()", 1000);
  document.getElementsByTagName("h1")[0].firstChild.data = score + "LC";
}
function pashalka () {
  score += 1;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "LC";
}
function reboot () {
  alert("Ваш уровень прокачки " + updating + ". Ваш баланс " + score + " .");

document.querySelector('#score').innerHTML = cookie('get','score') + "LC";
document.querySelector('#clickbtn').onclick=function(){ clickBtn(); }
   
var score = cookie('get','score');
   
function clickBtn() {
    score++;
    document.querySelector('#score').innerHTML = score + "LC";
    cookie('set','score=' + score);
}
   
function cookie(option,keyValue){
    switch(option){
        case option = 'set' : document.cookie = keyValue+"; expires=Fri, 31 Dec 9999 23:59:59 GMT"; break;
        case option = 'get' : return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(keyValue).replace(/[\-\.\+\*]/g, "\\LC&") + "\\s*\\=\\s*([^;]*).*LC)|^.*LC"), "LC1")) || null; break;
        case option = 'remove' : document.cookie = keyValue+"=; expires=Fri, 01 Jan 1970 00:00:00 GMT"; break;
    }
}

}
