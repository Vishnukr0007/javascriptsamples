
// switch

// syntax
// switch(condition){
//     case1: 
//     stmt
//     break;
//     case 2:
//         stmt
//         break;
//         case3:
//         stmt
//         break;

//         default:
//             stmt
//             break
// }

var prompt = require('prompt-sync')();


// let day=1
// let day = prompt("enter day ")
var days = prompt('enter day ');
switch(days){
    case 1:
        console.log("sunday");

    break
    case 2:
        console.log("tuesday");
        break;
        case 3:
            console.log("wednesday");
            break;
            case 4:
                console.log("thursday");
                break;
                case 5:
                console.log("friday");
                break;
case 6:
    console.log("saturday");
    break;
    case 7:
        console.log("monday");
        default:
            console.log("invalid day");
            break;
            
}