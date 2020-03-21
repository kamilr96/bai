randomnumber = (max, min, num) => {
    let randomArr = [];
    for (i=0; i<num; i++){
        random = Math.floor(Math.random() * (+max - +min)) + +min;
        randomArr.push(random)
    }
    return randomArr
}
console.log(randomnumber(20,5, 10))