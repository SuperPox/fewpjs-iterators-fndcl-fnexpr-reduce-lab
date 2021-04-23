const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// console.log(couponLocations.reduce(couponCounter, 0)); // also logs 15!

const totalBatteries = batteryBatches.reduce(function(all, batches)
{
    return all + batches
})