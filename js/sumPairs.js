// exports.sumPairs = function(numList, sum) {
    
function sumPairs(numList, sum) {    
    let sumList = []
    for (let i = 0; i < numList.length; i++) {
        for (let j = i +1; j < numList.length; j++) {
            if (numList[i] + numList[j] === sum) {
                sumList.push([numList[i], numList[j]])
            }
        }
    }
    if (sumList.length === 0){
       return 'unable to find pairs' 
    }
    return sumList
};

console.log(sumPairs([1, 2, 3, 4, 5], 9))

console.log(sumPairs([1, 2, 3, 4, 5], 7))

console.log(sumPairs([3, 1, 5, 8, 2], 27))

//Code works but do not understand JS testing and how to set it up between the two files