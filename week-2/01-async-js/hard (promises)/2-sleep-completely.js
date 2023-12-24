/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

//making thread sleep using setTimeout()

// function sleep(milliseconds) {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//         resolve();
//         },milliseconds)
//     })
// }

//making thread sleep using busy wait loop

function sleep(milliseconds){
    return new Promise((resolve)=>{
        let startTime = Date.now();

        while(Date.now() - startTime < milliseconds){
            //Busy-wait loop
        }

        resolve();
    })
}
module.exports = sleep;
