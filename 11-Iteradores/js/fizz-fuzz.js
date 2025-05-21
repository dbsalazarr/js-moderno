for (let i = 0; i <= 50; i++) {
    
    if (i % 15 == 0){
        console.log(i, "Fizz and Buzz")
    }else if(i % 5 == 0){
        console.log(i, "Buzz")
    }else if(i % 3 == 0){
        console.log(i, "Fizz")
    }else{
        console.log(i)
    }
    
}