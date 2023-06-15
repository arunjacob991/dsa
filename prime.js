console.log("prime")

const isPrime = (n) => {

    let div = 2

    while(n/2 > div){
        if(n % div == 0){
            return false
        }else{
            div++
        }
        return true
    }

}

console.log(isPrime(7));