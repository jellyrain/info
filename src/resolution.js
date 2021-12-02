// 返回 当前显示器的分辨率
function resolution() {
    return {
        width: screen.width,
        height: screen.height
    };
}

resolution.version = '1.0.0'

export default resolution