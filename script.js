var counter = 0;
var elem = document.getElementById("changeText");
var elemap = document.getElementById("map");
var inst = setInterval(change, 4000);
var temp = 0;



var text = ["Welcome to the Museum", "Feel free to explore"];

elem.innerHTML = text[counter];
counter ++;
console.log('counter is increased');
console.log(counter);
function change() {
  console.log('hello');
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    console.log('counter');
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}

function newquote(x) {
  console.log('hello');
  clearInterval(inst);
  elem.innerHTML = x;
}

function newmap(x) {
  console.log("newmap");
  console.log(elem);
  console.log(elemap);
  elemap.setAttribute("src",x);
 

}

function newmapdone() {
  elemap.setAttribute("src","assets/mapoutline.svg");
 

}




function newqdone() {
  inst = setInterval(change,4000);
  if(counter == 0)
    {
      temp = ((text.length) - 1);
      console.log(temp);
      elem.innerHTML = text[temp];
      //elem.innerHTML = text[counter-1];
      console.log(text.length);
    }
  else
    {
      elem.innerHTML = text[counter-1];
      console.log('else statement');
    }
    
  
}


