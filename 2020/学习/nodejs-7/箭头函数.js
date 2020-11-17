var fun1 = function(s1, s2) {
    return s1 + s2;
}

var fun2 = (s1, s2) => {
    return s1 + s2;
}

console.log(fun1(1 + 2));
console.log(fun2(1 + 2));