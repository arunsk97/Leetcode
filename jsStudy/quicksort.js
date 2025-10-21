function qucikSort(arr, low, high){
    if (low < high) {
        let pivInd = partition(arr, high, low);
        qucikSort(arr, low, pivInd - 1);
        qucikSort(arr, pivInd + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}