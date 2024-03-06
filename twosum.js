
    let b = [];
var twosum = function(array,logical){
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === logical) {
                b.push(i);
                b.push(j);
                console.log(b);
            }
        }
    }
    return null;
}

twosum([1,3,4,6,7],3)

