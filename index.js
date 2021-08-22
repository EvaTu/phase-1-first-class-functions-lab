// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function(drivers){
        return drivers.slice(0,2)
    };
console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
};
console.log(returnLastTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
console.log(selectingDrivers)

const createFareMultiplier = function(num){
    return function(num){
        return num*num
    }
}

const fareDoubler = createFareMultiplier(5)
console.log(fareDoubler(5))

const fareTripler = createFareMultiplier(3)
console.log(fareDoubler(3))

const selectDifferentDrivers = function(drivers,returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers)
}