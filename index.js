// Code your solution in this file!
 const returnFirstTwoDrivers = (arr) =>{
    const first = [...arr]
    return [first[0],first[1]]
 }
 const returnLastTwoDrivers = (arr)=>{
    const newArr = [...arr]
    return newArr.splice(-2,2)
 }

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const createFareMultiplier = (num)=>{
    return (fare)=> fare * num ;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, f) =>{
    return f(drivers)
}