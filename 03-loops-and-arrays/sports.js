var sports = ["Golf", "cricket", "tennis", "swimming"];
console.log("Printing using traditional for loop");
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
console.log("Printing using simplified for loop");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport == "cricket") {
        console.log(sport + " << My favourite!!");
    }
    else {
        console.log(sport);
    }
}
