console.log("firstNonRepeatingChar");

function firstNonRepeatChar(str){

    let charCount = {}

    for(let i = 0; i < str.length; i++){
        let char = str[i]
        if(charCount[char]){
            charCount[char]++
        }else{
            charCount[char] = 1
        }
    }

    for(let j in charCount){
        if(charCount[j] == 1){
            return j
        }
    }
}


console.log(firstNonRepeatChar("aba ab f cc z "));