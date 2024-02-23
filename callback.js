// function add(a,b,callback){
//     let c = a+b
//     callback(c)
// }

// function result(c){
//     console.log(c);

// }

// add(2,4,result)


// const a =[2,34,55]
// const result = a.map((n)=>n*2)
// console.log(result);





// const redius = [1,2,3,4]
// const calculate = function(redius) {
//     const output = [];
//     for (let i = 0; i < redius.length; i++){
//         output.push(math.IP)
//     }
// }


const side = [1,2,4]

const area = function (side){
    return side * side

}

const perimiter = function(side){
    return 4 * side
}


const sides = function(side,logic){
    let output = [];
    for ( i=0; i<side.length; i++){
        output.push(logic(side[i]))
    }

    return output;
}

console.log(sides(side,area));
console.log(sides(side,perimiter));