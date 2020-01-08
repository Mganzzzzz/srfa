const {
    random_arr, log, asce_sort,
    desce_sort, assert_equal_arr, random_between
} = require('../utils')


const bin_arr_2_dec = (arr) => {
    const s = arr.map(n => String(n)).join('')
    return parseInt(s, 2)
}

const dec_2_bin_string = (n, len) => {
    let s = n.toString(2)
    if(len) {
        s = s.padStart(len, '0')
    }
    return s
}

//二进制相加
const bin_add = (a, b) => {
    const n = a.length
    var result = a.reduceRight((p, c, index, arr) => {
        let sum = c + b[index]
        const prev = p.find(item => item.id === index + 1)
        if(prev && prev.carry) {
            //处理进位
            sum += 1
        }
        const bit = {}
        if(sum === 0) {
            bit.value = 0
            bit.carry = false
        } else if(sum === 1) {
            bit.value = 1
            bit.carry = false
        } else if(sum === 2) {
            bit.value = 0
            bit.carry = true
        } else if(sum === 3) {
            bit.value = 1
            bit.carry = true
        }
        bit.id = index
        p.unshift(bit)
        return p
    }, [])

    const v = result.map(item => item.value)
    if(result[0] && result[0].carry) {
        v.unshift(1)
    }
    log('debug v', v)
    return v
    // return r
}

const test_bin_add = () => {
    const a = 130
    const b = 1
    dec_2_bin_string(a)
    dec_2_bin_string(b)
    let bin_a_string = dec_2_bin_string(a)
    let bin_b_string = dec_2_bin_string(b)
    const n = Math.max(bin_b_string.length, bin_a_string.length)
    const a_arr = dec_2_bin_string(a, n).split('').map(n => +n)
    const b_arr = dec_2_bin_string(b, n).split('').map(n => +n)
    const result = bin_add(a_arr, b_arr)
    const add_dec = bin_arr_2_dec(result)
    assert_equal_arr(add_dec, a + b)
}

if(require.main === module) {
    test_bin_add()
}
