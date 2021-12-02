// 返回 距离父元素偏移值 父元素左上角 --> 本元素 左上角
function distance(el) {
    return {
        top: el.offsetTop,
        left: el.offsetLeft
    };
}
// 返回 元素滚动条到元素左边的距离 和 元素滚动条到元素上边的距离
function scroll(el) {
    return {
        top: el.scrollTop,
        left: el.scrollLeft
    };
}

// 返回 id 和 class 和 可见宽高 和 滚动视图高度 和 滚动视图宽度
function element(el) {
    return {
        id: el.id,
        classList: el.className,
        clientWidth: el.clientWidth,
        clientHeight: el.clientHeight,
        scrollWidth: el.scrollWidth,
        scrollHeight: el.scrollHeight,
        offsetWidth: el.offsetWidth,
        offsetHeight: el.offsetHeight
    };
}

element.distance = distance;
element.scroll = scroll;

element.version = '1.0.0'

export default element