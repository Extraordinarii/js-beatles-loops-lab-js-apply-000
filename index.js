// add solution here
function theBeatlesPlay(arg1,arg2){
  var arg3 = []
  for(var i = 0; i<arg1.length; i++){
      arg3.push(arg1[i] + " plays " + arg2[i])
     
  }return arg3
}
function johnLennonFacts(arg){
  var i = 0
  var g=[]
  while(i<arg.length){
    g.push(arg[i]+ "!!!")
    i++
  }return g
}
function iLoveTheBeatles(int){
  var ea = []
  do{
    ea.push("I love the Beatles!")
    int++
  }while(int<15)
  return ea
}