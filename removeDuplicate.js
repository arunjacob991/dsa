// brute force

function removeDuplicates(array){
    const result = [];
    for(let i = 0; i < array.length; i++){
        let exists = false;
        for(let j = 0; j < result.length; j++){
            if(array[i] === result[j]){
                exists = true;
                break;
            }
        }
        if(!exists){
            result.push(array[i])
        }
    }
    return result
}
const arr = [1, 1, 2, 2, 3, 3, 4, 4];
// console.log(removeDuplicates(arr));

// hashmap

function removeDuplicatesHash(array){
    const result = [];
    const map = {};

    for(let i = 0; i < array.length; i++){
        if(map[array[i]]){
            continue;
        }else{
            result.push(array[i])
            map[array[i]] = true
        }
    }
    return result
}

const a = [1,1,2,3,3,4,4,5,5];

console.log(removeDuplicatesHash(a));

