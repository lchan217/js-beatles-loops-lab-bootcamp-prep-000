function theBeatlesPlay(musician, instruments){
  var newArray = [];
  for(var i = 0; i<musician.length; i++) {
    newArray.push(musician[i] + " plays " + instruments[i])
  }
  return newArray
}