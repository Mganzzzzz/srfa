const {
    random_arr, log, asce_sort,
    desce_sort, assert_equal_arr, random_between
} = require('../utils')

// 降序版本插入排序
const insert_sort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        const key = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] < key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}
/*
插入排序循环不变式
1. 初始化 i = 1 数组 arr[1] 仅有一个元素 所以已经排序好
2. 保持  在for循环进行之中的任意一次中  通过while循环对 arr[i -1] arr[i - 2]  arr[i -3 ] 向右移动一个位置
    直到找到 arr[i] 的正确位置 并将 arr[i] 插入该位置 arr[0, j] 由  arr[0, i]组成 且已经排好序
    则下次 循环开始   数组仍然保持排序状态
3. 循环终止 当i等于为排序数组的length  导致循环终止 在每次
    所以 result 就是 arr 数组    但是由于已经做了排序 所以 result 数组已经排序 算法成立
* */

//线性查找
const linear_find = (A, v) => {
    // 初始化 为开始查找  结果未知 返回null
    let r = null
    // 保持 每次循环 如果 v 不再 A 中 则循环完成后 v 依旧为null 不变式
    for(let i = 0; i < A.length; i++) {
        const key = A[i]
        // 循环结束 终止 找到目标 此时 v 为 下标 算法成立
        if(key === v) {
            r = i
            break
        }
    }
    return r
}

//
const bin_add = (a, b) => {
    const n = a.length
    const dec_a = parseInt(a.map(n => String(n)).join(''), 2)
    const dec_b = parseInt(b.map(n => String(n)).join(''), 2)
    // log('debug dec_a', dec_a, dec_b)
    const sum = dec_b + dec_a
    // log('debug n', n)
    let t = dec_2_bin_string(sum, n +1)
    return t
    // return r
}
// 升序版本插入排序
const insert_sort_asce = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        const key = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
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

const test_linear_find = () => {
    const arr = random_arr()
    const index = random_between(0, arr.length -1)
    const t = arr[index]
    const result1 = linear_find(arr, t)
    assert_equal_arr(result1, index)
    const t2 = null
    const result2 = linear_find(arr, t2)
    assert_equal_arr(result2, null)
}

const dec_2_bin_string = (n, len) => {
    let s = n.toString(2)
    if(len) {
        s = s.padStart(len, '0')
    }
    return s
}

const test_bin_add = () => {
    const a = 130
    const b = 1
    // dec_2_bin_string(a)
    // dec_2_bin_string(b)
    let bin_a_string = dec_2_bin_string(a)
    let bin_b_string = dec_2_bin_string(b)
    const n = Math.max(bin_b_string.length, bin_a_string.length)
    const a_arr = dec_2_bin_string(a, n).split('').map(n => +n)
    const b_arr = dec_2_bin_string(b, n).split('').map(n => +n)
    const result = bin_add(a_arr, b_arr)
    assert_equal_arr(result.length, n + 1)

}


if(require.main === module) {
    // test_insert_sort()
    // test_insert_sort_asce()
    test_linear_find()
    // test_bin_add()
}
