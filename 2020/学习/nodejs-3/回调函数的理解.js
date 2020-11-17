var fun = function(a) {
    var b = 1;
    a(b);
};

fun(function(d) {
    console.log(d)
})


//  fun（） 调用     函数 function（d）{}   传进fun中
//  function ( function (d){console.log(d)}){
//        }
//  然后 a(1)  调用a ===  function(1){   console.log(1)
// }
// 最后打印结果为1  相当于两个函数之间传递了个数据