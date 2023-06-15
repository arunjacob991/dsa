

function palindrome(string){

    const len = string.length;

    for(i = 0; i < len / 2; i++){
        if(string[i] == string[len - 1 -i]){
            return "Palindrome"
        }else{
            return "Not palindrome"
        }
    }
}


const str = "malayal"

console.log(palindrome(str))