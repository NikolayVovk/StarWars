
//Фильтер

function myFilter(){
  var input, filter , li, block;
  input = document.getElementById("filter");
  filter = input.value.toUpperCase();
  li = document.getElementsByTagName("li");
  block = document.getElementsByClassName('block')


for (var i = 0; i < li.length; i++) {
  textValue = li[i].textContent;
  if (textValue.toUpperCase().indexOf(filter) > -1) {
    block[i].style.transform = "translateZ(0px) rotateY(-20deg)";
    block[i].style.opacity = "1";
    block[i].style.filter = "blur(0px)";
    block[i].style.pointerEvents = "auto";
  }else {
    block[i].style.transform = "translateZ(-100px) rotateY(-10deg)";
    block[i].style.opacity = "0.2";
    block[i].style.filter = "blur(3px)";
    block[i].style.pointerEvents = "none";
  }
 }
}



function init(n) {
  var con = document.querySelector("#console");

  function log(){
    console.log(...arguments);

    var pre = document.createElement("pre");

    for(var arg of arguments) {
      switch( typeof arg )
      {
        case "string":
          pre.append(arg);
          break;
        default:
          pre.append(JSON.stringify(arg, null ,2));
      }
      pre.append(" ");
    }
    con.append(pre);
  }
  log("load");
/*
  //get all films
  swapiModule.getFilms(function(data) {
    log("Result of getFilms", data);
  });
  //get all films, page 1
  swapiModule.getFilms({page: 1}, function(data) {
    log("Result of getFilms (page 1)", data);
  });
*/
  //get one film (assumes 1 works)
con.style.height = "400px";

  if (n==0) {
    swapiModule.getFilm(4,function(data) {
      log("Result of getFilm/4", data);
      });} else if (n==1) {
    swapiModule.getFilm(5,function(data) {
      log("Result of getFilm/5", data);
      });}  else if (n==2) {
    swapiModule.getFilm(6,function(data) {
      log("Result of getFilm/6", data);
      });}else if (n==3) {
    swapiModule.getFilm(1,function(data) {
      log("Result of getFilm/1", data);
       });}else if (n==4) {
    swapiModule.getFilm(2,function(data) {
      log("Result of getFilm/2", data);
    });}else if (n=5) {
    swapiModule.getFilm(3,function(data) {
      log("Result of getFilm/3", data);
    });}

  document.querySelector("#console").innerHTML = '';

}


function noresalt(){
  document.querySelector("#console").innerHTML = 'no-resalt';
  document.querySelector("#console").style.height = "100px";
}







































//
