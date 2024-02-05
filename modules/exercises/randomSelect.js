function randomFromArray(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
}

module.export = {
  randomFromArray : randomFromArray
};
