const promise1 = Promise.resolve("Promise 1 resolved");

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    } , 2000);
});

promise1.then((res) => console.log(res));
promise2.then((res) => console.log(res));



// amra jodi chai sob gula Promise ek sathe call hobe & ekti matro output dibe tahole:
Promise.all([promise1, promise2]).then((res) => {
    console.log(res);
});



// Promise.race() - je result ta age resolve hobe sei result tai sudhu print korbe baki gula r print korbe na:
Promise.race([promise1, promise2]).then((res) => {
    console.log(res);
});