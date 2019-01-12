function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  for(let i=0; i<musicians.length; i++){
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  } return emptyArray
}

function johnLennonFacts(facts){
var emptyArray = [];
var i = 0;
while(facts.length>i){
  emptyArray.push(facts[i]+ "!!!");
  i++;
} return emptyArray
}

function iLoveTheBeatles(n){
  var newArray = [];

  do {newArray.push("I love the Beatles!");
    n++
    
  }
    while(n<15);
  return newArray
}