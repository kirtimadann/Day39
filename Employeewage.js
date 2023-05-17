
const IS_FULL_TIME = 2;
const IS_Part_TIME = 1;
const EMP_RATE_PER_HOUR = 20;
const EMP_WORKING_DAY = 20;

var empHrs = 0;
var empWage = 0;
var totalempWage = 0;
var day = 0;
for ( day = 0; day < EMP_WORKING_DAY; day++) {

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
totalempWage = totalempWage + empWage;
console.log(empWage);
}

console.log("total wage" + totalempWage);