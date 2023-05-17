
const IS_FULL_TIME = 2;
const IS_Part_TIME = 1;
const EMP_RATE_PER_HOUR = 20;
var empHrs = 0;
var empWage = 0;
let empcheckrandom = Math.floor(Math.random()*3);

switch(empcheckrandom){
    case IS_FULL_TIME:
        empHrs = 8;
        break;

        case IS_Part_TIME:
            empHrs = 4;
            break;

            default:
                empHrs = 0;
        
}

empWage = empHrs * EMP_RATE_PER_HOUR;
console.log(empWage);