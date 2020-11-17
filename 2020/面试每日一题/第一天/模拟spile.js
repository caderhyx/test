let arr = [1, 2, 3, 6, 4, 5]
Array.prototype._spile = function(index, howmany, ...items) {
    // 移除的值
    const removearr = this.slice(index, index + howmany);
    // 保留右侧的值
    const rightarr = this.slice(index + howmany);
    // 考虑从后删除、
    if (index < 0) {
        index = Math.abs(index);
        if (index < this.length) {
            index = this.length - index;
        } else {
            index = 0
        }
    }
    // 没有第二个参数
    if (!howmany) {
        howmany = this.length - index;
    }
    // 整合
    // forEach(e,i function({}))   e 表示元素  i 表示索引
    let start = index;
    items.concat(rightarr).forEach(e => {
        this[start] = e;
        start++
    });
    // 修改length  如果这儿没有设置this.length  它的length仍将会是原来的删除前的长度
    this.length = start
    return removearr

}
console.log(arr, '删除前');
// console.log(arr.splice(2, 1), '删除的值')
console.log(arr._spile(2, 1))
console.log(arr, '删除后');
// 调用它是怎么调用 ， 然后就是 ...items   之前的值


// 你是不是没保存就执行了
// 结果就是3 spile 不是应该 还有其他了么，
// 哪里不对啊
// splice是返回删除的值，修改原数组
// 奥，概念以为是直接就删除显示新数组了。。
// 这是错的。。你没修改length
// 这就对了
// 你在那个代码上打印的是什么了，就是昨天咱们写的那个
// 就是这个，我之前的代码是在最后修改了length
// 因为在你修改和添加数后，arr的length还是之前的，需要给它修改长度。