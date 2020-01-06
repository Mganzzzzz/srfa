const assert = require('assert').strict
const log = console.log.bind(console)
module.exports = {
    random_arr(len = 10) {
        return Array(10).fill(1).map(item => Math.floor(Math.random() * 100))
    },
    log(...args) {
        return log(...args)
    },
    //降序
    desce_sort(arr) {
        const t = Array.prototype.slice.call(arr)
        return t.sort((a, b) => a < b)
    },
    // 升序
    asce_sort(arr) {
        const t = Array.prototype.slice.call(arr)
        return t.sort((a, b) => a > b)
    },
    assert(a, b, msg) {
        return assert.strictEqual(a, b, msg)
    },
    assert_equal_arr(a1, a2) {
        return assert.deepStrictEqual(a1, a2)
        const len_equal = a1.length === a2.length
        if(!len_equal) {
            return false
        }
        const item_equal = a1.every((a_item, a_index, a1) => {
            return a_item === a2[a_index]
        })
        return item_equal
    }
}

if(require.main === module) {
    const a1 = [2, 3,]
    const a2 = [2, 3, 4]
    a2.sort((a, b) => a < b)
    log('debug a2', a2)
    // const r = assert.deepStrictEqual(a1, a2)
}
