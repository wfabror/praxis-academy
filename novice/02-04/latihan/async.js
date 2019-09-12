async function f() {
    return 1;
}


console.log(f());

async function g() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'), 1000)
    })
    let result = await promise;

    console.log(result);

}

g();
//