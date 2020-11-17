var array = [1, 1, 1, 2, 3, 2, 3, 4, 5];

function arr(a) {
    for (var i = 0; i < a.length; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) {
                a.spilce(j, 1);
                j--
            }
        }
    }
    return a
}
console.log(arr(array))