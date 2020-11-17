// 使用localStorage缓存数据，并定时更新：

let obj = { a: 1, b: 2, c: 3 };
// 保存数据
localStorage.setItem('newobj', JSON.stringify(obj))

// 读取数据
localStorage.getItem('newobj')

// 删除数据
localStorage.removeItem('a')

// 获取时间戳
// let myData = new Date('1970/01/01 0:0:0');
// let a = myData.getTime();
let nowTime = new Date().getTime();
const oneYear = 86400000;