var a = 1;
var obj = { a };
// {a:1}
var b = 2;
var obj = { a, b };
// {a:1,b:2}
var f = () => {};
var obj = { a, b, f };
// {a:1,b:2,f:function(){}}

var obj1 = {
    ff() {
        console.log(1);
    },
    //  =  ff:function(){ console.log(1)}
    //  =   ff:()=>{  console.log(1)}
}

obj1.ff();