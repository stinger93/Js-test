function stopWatch(){
    let startTime = Date.now()

    function getDelay(){
        let elapsedTime = Date.now() - startTime;
        alert(elapsedTime);
    }
    return  getDelay;
}

let timer = stopWatch()

//Что-нибудь за n-время.
for (let  i = 0; i < 100000; i++){
    let foo = Math.random()*10000
}

// вызов возвращаемой функции
timer()