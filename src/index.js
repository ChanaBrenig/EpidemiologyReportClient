

new Promise(function (resolve, reject) {

    setTimeout(() => { resolve(Math.ceil(Math.random() * 10)) }, 3000)
}).then(
    result => alert(result));


