// let condition = true;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (condition) {
//             resolve(console.log("resolved promise")
//             )
//         }
//         reject(console.log("reject promise")
//         )
//     }, 2000)
// })

// promise
//     .then((result) =>
//         console.log(result)

//     )
//     .catch((error) =>
//         console.log(error))


// flaterrn array

// function flatterarray(arr){
// return arr.reduce((acc, curr) => {
// if(Array.isArray(curr)){
//     return acc.concat(flatterarray(curr))
// }
// else{
//    return acc.concat(curr)
// }
// }, [])


// }





// const input = [1, [2, [3, 4], 5], 6];
// console.log(flatterarray(input));



// reverse string

// function substring(string) {
//     let reverse = "";
//     for (let c of string) {
//         reverse = c + reverse;
//     }
//     return reverse;
// }

// var string = "hello";
// console.log(substring(string));

// check palindrom
function palindrom(str) {
    

    if (str.length <= 1) {
        return false;
    }

    let i = 0, j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) {
            return false;

        }
        i++;
        j--;
        {
            return true;
        }
    }


}

var str = "ajaxxajahjfiushgeiohj"
console.log(palindrom(str));
