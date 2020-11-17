var arr = ['a', 'b', 'c'];

for (var i = 0; i < arr.length; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(arr[i]);
        }, 2000);
        // console.log(arr[i]);
    })(i)
    // console.log(arr[i]);
}
// 因为文件的属性都是在回调函数中获取，所以在回调函数外部不能组装数据，循环结束后数据内容依然为空
// 因为回调函数在循环结束后才会运行