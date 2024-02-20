
function bubbleSort(array) {
    for(let i = 0; i < array.length; i++){
        for(let p = 0; p < array.length; p++ ){
            if(array[p] > array [p+1]){
                let temp = array[p];
                array[p] = array [p+1];
                array[p+1]=temp;
            }
        }
    }

    return array;
}


module.exports = bubbleSort;
