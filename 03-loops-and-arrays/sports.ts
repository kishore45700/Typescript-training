let sports: string[]=["Golf","cricket","tennis","swimming"];

console.log("Printing using traditional for loop");
for(let i=0;i<sports.length;i++){
    console.log(sports[i]);
}

console.log("Printing using simplified for loop");
for(let sport of sports){
    if(sport == "cricket"){
        console.log(sport + " << My favourite!!");
    }
    else{
        console.log(sport);
    }
}