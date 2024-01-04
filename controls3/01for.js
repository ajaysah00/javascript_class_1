
// for (let index = 0; index <0; index++) {
//     const element = array[index];
    
// }


// for ([intialExpression/declaration]; [condition]; [changer]){
//     // body 
// }

let userScore = 10;
const minValue = 0;
for(userScore; userScore >= minValue; userScore = userScore - 1) {
    // if score hits 5, don't print anything after that then use break
    // if (userScore == 5){
    //     break;
    // }
    // remove privious demand, if score hits 5, skip printing 5 but rest value should be printd 
    if (userScore == 5 ){
             continue;
         }
    console.log(`userScore is ${userScore}`);
}