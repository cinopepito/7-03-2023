function phrases(myAdj,myNoun,myVerb,adj){
let result = '';
result+= 'The' + ' ' + myAdj + ' ' + myNoun + ' ' + myVerb + ' ' + adj;
return result;
}
console.log(phrases('big','dog','run','fast'));
console.log(phrases('tall','rabbit','play','slow'));