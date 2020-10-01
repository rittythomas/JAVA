unction splitIntoChunk(arr, chunk) {

    while(arr.length > 0) {

        let tempArray;
        tempArray = arr.splice(0, chunk);
        console.log(tempArray);
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let chunk = 2;
splitIntoChunk(array, chunk);
