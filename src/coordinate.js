// 返回 文档/页面 水平方向滚动的像素值 和 垂直方向已滚动的像素值 
function pageOffset() {
    return {
        x: window.pageXOffset || (document.documentElement || document.body.parentNode || document.body).scrollLeft,
        y: window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    };
}
// 返回 浏览器 窗口的内部宽度 和 窗口的视口的高度
function inner() {
    return {
        width: window.innerWidth || (document.documentElement || document.body.parentNode || document.body).clientWidth,
        height: window.innerHeight || (document.documentElement || document.body.parentNode || document.body).clientHeight
    };
}

// 返回 浏览器左边框到左边屏幕 和 浏览器的上边界到屏幕最顶端 和 浏览器窗口的外部高度 和 浏览器窗口的外部宽度
function coordinate() {
    return {
        width: window.outerWidth || 'IE8及以下不支持',
        height: window.outerHeight || 'IE8及以下不支持',
        top: screenTop || screenY,
        left: screenLeft || screenX
    };
}

coordinate.pageOffset = pageOffset;
coordinate.inner = inner;

coordinate.version = '1.0.0'

export default coordinate