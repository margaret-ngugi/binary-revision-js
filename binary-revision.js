//TOPIC 1-BINARY SEARCH

//1.searching for a target that exist

//Q.Given the following array, search for the following target
// let target = 67
// let arr2 = [1,4,67,70,73,93];
function binary(arr2,target){
    let left =0
    let right =arr2.length-1;
    while(left<=right){
        let middle = Math.floor((left+right)/2);
        if (arr2[middle]===target){
            return middle;
        }
        else if (arr2[middle]<target){
            left = middle+1
        
    }else{
            right=middle-1
        }
    }
    return null
      
}
let target = 67
let arr2 = [1,4,67,70,73,93];
 
 console.log(binary(arr2,target))

//2.searching for a target that does not exist

//Q2.Given the following array, search for the following target
// let target1 = 98 if not found return null
// let arr = [1,4,67,70,73,93];
function sortsArray(arr,target1){
    let left =0
    let right =arr.length-1;
    while(left<=right){
        let middle = Math.floor((left+right)/2);
        if (arr[middle]===target1){
            return middle;
        }
        else if (arr[middle]<target1){
            left = middle+1
        
    }else{
            right=middle-1
        }
    }
    return null
      
}
let target1 = 98
let arr = [1,4,67,70,73,93];
 
 console.log(sortsArray(arr,target1))

 //TOPIC 2-MERGE SORT

 //1.sorting an array in an ascending order.

 //Q1.//Given an unsorted array of numbers return the sorted array in ascending order
 function numArray(num){
    if(num.length<=1){
        return num;
    }
    let middle =Math.floor(num.length/2);
    let left = num.slice(0,middle);
    let right = num.slice(middle);
    return sortedArray(numArray(left),numArray(right));

}
function sortedArray(left,right){
    let emptyArray = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift());
        }
        else{
            emptyArray.push(right.shift())
        }
    }
        return [...emptyArray,...left,...right]
}
    
let num = [10,2,56,3,8,4,11]
console.log(numArray(num));

//2 Sorting an array in a descending order

//Q2.//Given an array of unsorted  numbers return the sorted array in descending order

function divideArray(num1){
    if(num1.length<=1){
        return num1;
    }
    let middle =Math.floor(num1.length/2);
    let left = num1.slice(0,middle);
    let right = num1.slice(middle);
    return sortedArray(divideArray(left),divideArray(right));

}
function sortedArray(left,right){
    let emptyArray = [];
    while(left.length && right.length){
        if(left[0]>right[0]){
            emptyArray.push(left.shift());
        }
        else{
            emptyArray.push(right.shift())
        }
    }
        return [...emptyArray,...left,...right]
}
    
let num1 = [10,2,56,3,8,4,11]
console.log(divideArray(num1));

//3.finding target in unsorted array
// // //Given the following array, search for the following target
// // //let target2 = 3
// // //let arr3 = [1,4,78,2,67,3];
function unsortedArr(arr3){
    if(arr3.length<=1){
        return arr3;
    }
    let middle =Math.floor(arr3.length/2);
    let left = arr3.slice(0,middle);
    let right = arr3.slice(middle);
    return sortedArray(unsortedArr(left),unsortedArr(right));

}
function sortedArray(left,right){
    let emptyArray = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift());
        }
        else{
            emptyArray.push(right.shift())
        }
    }
        return [...emptyArray,...left,...right]
}

let arr3 = [1,4,78,2,67,3];
console.log(unsortedArr(arr3));


function unsortedArr(newarr3,target2){
    let left =0
    let right =newarr3.length-1;
    while(left<=right){
        let middle = Math.floor((left+right)/2);
        if (newarr3[middle]===target2){
            return middle;
        }
        else if (newarr3[middle]<target2){
            left = middle+1
        
    }else{
            right=middle-1
        }
    }
    return null
      
}

let newarr3 = [1,2,3,4,67,78];
let target2 = 3
console.log(unsortedArr(newarr3,target2));


  

