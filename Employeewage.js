
let isFullTime = 1;
const EMP_RATE_PER_HOUR = 20;
var empHrs = 0;
var empWage = 0;
let empcheckrandom = Math.floor(Math.random()*2);
if(empcheckrandom == isFullTime){
    empHrs = 8;
}else{
    empHrs = 0;
}

empWage = empHrs * EMP_RATE_PER_HOUR;
console.log(empWage);