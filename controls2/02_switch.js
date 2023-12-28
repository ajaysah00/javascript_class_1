

// 1 star - poor
// 2 star - emm, ok
// 3 star - average
// 4 star - cool
// 5 star - great
// 6 star - awsome
// 7 star - nailed it

// switch(expression){
//     case value1:
//         statment1;
//         statment2;
//         break;

//         case value2:
//             statment3;
//             statment4;
//             break
// }

let getStarFromUser = "5"
let starInNumber = parseInt(getStarFromUser)

switch (starInNumber) {
    case 1:
        console.log("poor");
        break;

    case 2:
        console.log("emm, ok");
        break;

    case 3:
        console.log("average");
        break;

    case 4:
        console.log("cool");
        break;
        
    case 5:
        console.log("great");
        break;
        
    case 6:
        console.log("awsome");
        break;
        
    case 7:
        console.log("nailed it");
        break;
        
        default:
            console.log("I don't known what about that rating is for");
        

    
}
