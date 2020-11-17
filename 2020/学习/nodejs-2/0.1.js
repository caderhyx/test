function fun() {
    console.log(this.name);
};
//  这儿的this 指向问题 ，指向作用它的那个对象
var obj1 = {
    name: "hyw",
    fun: fun,
}

var obj2 = {
    name: "hyx",
    fun: fun,
}

obj1.fun();
obj2.fun()