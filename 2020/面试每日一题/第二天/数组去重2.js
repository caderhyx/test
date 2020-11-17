var arr = [1, 1, 1, 1, 2, 3, 4, 9, 4, ];

function arr1(a) {

    var a = a.sort();
    var array = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== a[i + 1]) {
            array.push(a[i])
        }
    }
    return array
}

console.log(arr1(arr))