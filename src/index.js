﻿
new Promise(function (resolve, reject) {

    setTimeout(() => { resolve(Math.ceil(Math.random() * 10)) }, 3000)
}).then(
    result => alert(result));
﻿
const arr=['Chana','Miri','Shani','Ricky','Shira']

const makeAllCaps=(wordsArr)=>{
    return wordsArr.map((word)=>word.toUpperCase());
}

const sortWords=(wordsArr)=>{
    return wordsArr.sort();
}

 new Promise((resolve, reject) => { 
     if(arr.length==0||arr.every((word)=>typeof word === String))
        reject(new Error("Invalid wordsArr"));
    resolve(makeAllCaps(arr));
  
}).then((res)=>sortWords(res)).catch((err) => alert(err.message)).then((res)=>console.log(res));


