function mergeSort(arr){
    if(arr.length <=1){
        return arr;
    }
    if(arr.length==2){
        if(arr[0]>arr[1]){
            return [arr[1],arr[0]];
        }
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    let result = [];
    let i=0;
    let j=0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    while(i<left.length){
        result.push(left[i]);
        i++;
    }
    while(j<right.length){
        result.push(right[j]);
        j++;
    }
    return result;
}
console.log(mergeSort([1,7,3,2]));
console.log(mergeSort(['d','a','c','b']));
console.log(mergeSort([1,3,2,4,5,6,7,8,9,10]));
console.log(mergeSort([1,3,2,4,5,6,7,8,9,10,11]));
console.log(mergeSort([1,3,2,4,5,6,7,8,9,10,11,12]));
console.log(mergeSort([1,3,2,4,5,6,7,8,9,10,11,12,13]));

