/*
Higher Order Functions Implementation
forEach, map, filter, reduce, every, some, find, findIndex
*/

// forEach
function customForEach(fn) {
    let arr = this;

    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i);
    }
}


Array.prototype.customForEach = customForEach;

[1, 2, 3].customForEach((item) => console.log(item));
// Output: 1 2 3


// map
function customMap(fn) {
    let newArr = [];
    let arr = this;

    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i))
    }

    return newArr;
}

Array.prototype.customMap = customMap;

[1, 2, 3].customMap(function (item) {
    return item * 10;
});
// Output: [10, 20, 30]


// filter
function customFilter(fn) {
    let newArr = [];
    let arr = this;

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

Array.prototype.customFilter = customFilter;

[1, 2, 3].customFilter(function (item) {
    return item > 1;
});
// Output: [2, 3]


// reduce
function customReduce(fn, init) {
    let sum = (init === undefined) ? undefined : init;
    let arr = this;

    for (let i = 0; i < arr.length; i++) {
        if (sum !== undefined) {
            sum = fn(sum, arr[i]);
        } else {
            sum = arr[i];
        }
    }
    return sum;
}

Array.prototype.customReduce = customReduce;

[1, 2, 3].customReduce(function (sum, elem) {
    return sum * elem;
}, 2);
// Output: 12


// every
function customEvery(fn) {
    let bool = true;
    let arr = this;

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            continue;
        } else {
            bool = false;
            break;
        }
    }
    return bool;
}

Array.prototype.customEvery = customEvery;

[1, 2, 3].customEvery(function (item) {
    return item > 1;
});
// Output: false


// some
function customSome(fn) {
    let bool = false;
    let arr = this;

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            bool = true;
            break;
        }
    }
    return bool;
}

Array.prototype.customSome = customSome;

[1, 2, 3].customSome(function (item) {
    return item > 1;
});
// Output: true


// find
function customeFind(fn) {
    let arr = this;
    let returnValue;

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            returnValue = arr[i];
            break;
        }
    }
    return returnValue;
}

Array.prototype.customeFind = customeFind;

[10, 20, 30].customeFind(function (item) {
    return item > 10;
});
// Output: 20


// findIndex
function customeFindIndex(fn) {
    let arr = this;
    let returnIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            returnIndex = i;
            break;
        }
    }
    return returnIndex;
}

Array.prototype.customeFindIndex = customeFindIndex;

[10, 20, 30].customeFindIndex(function (item) {
    return item > 10;
});
// Output: 1
