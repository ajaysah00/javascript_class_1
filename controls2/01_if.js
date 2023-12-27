let temperature = 20;
if (temperature > 20){
    console.log("Today very hot ")
}
else{
    console.log("Today very cold")
}


let score = 110;
let life = 3;

console.log("Wel come to the PW Game");
if (score > 99){
    console.log("You got life");
    score = score - 100
    life = life + 1
}
else{
    console.log("you have'nt got life");
}
console.log(`your score is ${score} and my life is ${life}`)


// 1 star - poor
// 2 star - emm, ok
// 3 star - average
// 4 star - cool
// 5 star - great
// 6 star - awsome
// 7 star - nailed it


let getStarFromUser = "9"
let starInNumber = parseInt(getStarFromUser)

if (starInNumber == 1){
    console.log("poor");
} else if (starInNumber == 2){
    console.log("emm, ok")
} else if (starInNumber == 3){
    console.log("average")
} else if (starInNumber == 4){
    console.log("cool")
} else if (starInNumber == 5){
console.log("great")
} else if (starInNumber == 6){
    console.log("awsome")
} else if (starInNumber == 7){
    console.log("nailed it")
} else {
    console.log("I don't known that rating")
}