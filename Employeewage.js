
const IS_FULL_TIME = 2;
const IS_Part_TIME = 1;
const EMP_RATE_PER_HOUR = 20;
const EMP_WORKING_DAY = 20;
const EMP_WORKING_HRS= 100;

var empHrs = 0;
var totalEmpHrs = 0;
var totalEmpDays = 0;

while (totalEmpHrs <= EMP_WORKING_HRS && totalEmpDays < EMP_WORKING_DAY){
    totalEmpDays++;
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

totalEmpHrs = empHrs + totalEmpHrs;
console.log("day "+totalEmpDays+ ": " +totalEmpHrs + " Hours");


}

var empwage = totalEmpHrs * EMP_RATE_PER_HOUR;
       console.log (empwage);