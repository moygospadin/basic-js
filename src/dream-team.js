module.exports =  function createDreamTeam(arr) {

  let result="";
  if (!Array.isArray(arr) ) return false; else{


 for(let i=0;i<arr.length;i++) if (typeof(arr[i])=="string") {result+=arr[i][arr[i].search(/[a-z]/i)];}

return result.toUpperCase().split("").sort().join("");
}
 
};