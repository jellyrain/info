// 返回 协议
function protocol() {
    return location.protocol.slice(0, -1);
}
// 返回 域名
function hostname() {
    return location.hostname;
}
// 返回 端口
function port() {
    return location.port;
}
// 返回 请求路径
function pathname() {
    return location.pathname;
}
// 返回 请求参数对象
function query() {
    var object = {};
    var temp = location.search.slice(1).split('&');
    if (temp[0]) {
        for (var i = 0; i < temp.length; i++) {
            var q = temp[i].split('=');
            object[q[0]] = q[1];
        }
    };
    return object;
}
// 返回 请求哈希值
function hash() {
    return location.hash;
}
// 返回 全部
function urlAll() {
    return {
        protocol: protocol(),
        hostname: hostname(),
        port: port(),
        pathname: pathname(),
        query: query(),
        hash: hash(),
        href: location.href
    };
}

// 返回 详细url
function url() {
    return location.href;
}

url.protocol = protocol;
url.hostname = hostname;
url.port = port;
url.pathname = pathname;
url.query = query;
url.hash = hash;
url.all = urlAll;

url.version = '1.0.0'

export default url