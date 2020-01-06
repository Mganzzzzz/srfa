const {random_arr, log, asce_sort, desce_sort, assert_equal_arr, assert} = require('../utils')

// 降序版本插入排序
const insert_sort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        const arrElement = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] < arrElement) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = arrElement
    }
    return arr
}
/*
插入排序循环不变式
1. 初始化 i = 0 如果数组不是一个空数组 空数组没必要排序 可得 i < arr.length 一定成立
2. 循环保持 在for循环进行之中的任意一次中 只是对数组间的元素进行交换位置操作 则下次 i++ 之后 i的
    值永远不会大于等于 arr的长度
3. 循环终止 当i等于为排序数组的length  导致循环终止  result 数组中的元素 全部是由输入arr 数组中的元素组成
    所以 result 就是 arr 数组    但是由于已经做了排序 所以 result 数组已经排序 算法成立
* */


// 升序版本插入排序
const insert_sort_asce = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        const arrElement = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > arrElement) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = arrElement
    }
    return arr
}

const test_insert_sort = () => {
    const arr1 = random_arr()
    const sorted_arr = desce_sort(arr1)
    const insert_sort_arr = insert_sort(arr1)
    assert_equal_arr(insert_sort_arr, sorted_arr)
}

const test_insert_sort_asce = () => {
    const arr1 = random_arr()
    const sorted_arr = asce_sort(arr1)
    const insert_sort_arr = insert_sort_asce(arr1)
    assert_equal_arr(insert_sort_arr, sorted_arr)
}


if(require.main === module) {
    test_insert_sort()
    test_insert_sort_asce()
}
