
function bubbleSort(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - i - 1; j++){
            if(array[j + 1] < array[j]){
                [array[j + 1], array[j]] = [array[j], array[j + 1]]
            }
        }
    }
    return array
}



console.log(bubbleSort([3, 2, 4, 1, 5, 8, 11, 20, 15, 9, 13]))