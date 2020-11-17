Array.prototype._spile = function(index, howmany, ...items) {
    const removeArr = this.slice(index, index + howmany);
    const rightArr = this.slice(index + howmany);

    if (index < 0) {
        index = Math.abs(index);
        if (index < this.length) {
            index = this.length - index;
        } else {
            index = 0
        }
    }

    if (!howmany) {
        howmany = this.length - index;
    }

    let begin = index;
    items.concat(rightArr).forEach(e => {
        this[begin] = e;
        begin++;
    })
    this.length = begin;
    // 这里设置改变后的数组长度

    return removeArr
}

let arr = [1, 2, 3, 4, 4];
console.log(arr)
console.log(arr._spile(4, 1, 5, 6, 7))
console.log(arr)