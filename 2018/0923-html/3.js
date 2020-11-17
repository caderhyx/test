var item = {
    info: '我的个天那', //文字 
    href: '', //链接 
    close: true, //显示关闭按钮 
    speed: 6, //延迟,单位秒,默认6 
    color: '#ffffff', //颜色,默认白色 
    old_ie_color: '#ffffff', //ie低版兼容色,不能与网页背景相同,默认黑色 
}
$('body').barrager(item);