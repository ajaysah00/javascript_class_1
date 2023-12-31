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





// login system 
// const email = ""

// if email is present ask for password otherwise ask for email
/*
if (email == "rakesh@google.com"){
    console.log("please enter your password");
} else {
    console.log("please enter your email");
}
*/

// if (email != "") {
//     console.log("please enter your password");
// } else {
//     console.log("please enter your email");
// }

console.log(Boolean(email));


// truthy falsy 

// falsy value 

/*false 
0    (-0 and BigInt on)
""
null
undefined
NaN
*/



// If user provides email, password, then allow to login, else ask for it

const email = ""
const password = ""

if (email){
    if (password){
        console.log("Welcome to the app");
    } else{
        console.log("please enter your password");
    }
} else {
    console.log("please enter your email");
}


// Logical operation 
// && -> and ; || => OR

if (email and password) {
    console.log("well come to the app");
} else{
    console.log("please enter your email and password");
}


// allow user to signin with google or github

const googleLoginToken = ""
const githubLoginToken = ""

if (googleLoginToken || githubLoginToken) {
    console.log("welcome to the app");
}else {
    console.log("please login view your account");
}