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