; (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = global || self, global.info = factory());
}(this, function () {
    'use strict';

    var version = '1.0.0';
    function info() {
        return { version: version };
    }

    // 获取 用户代理头
    function userAgent() {
        return navigator.userAgent;
    }

    // 判断 内核
    function isWebKit() {
        return userAgent().indexOf('AppleWebKit') > -1;
    }
    function isTrident() {
        return userAgent().indexOf('Trident') > -1 || userAgent().indexOf('NET CLR') > -1;
    }
    function isGecko() {
        return userAgent().indexOf('Gecko/') > -1;
    }
    function isPresto() {
        return userAgent().indexOf('Presto') > -1;
    }
    function isKHTML() {
        return userAgent().indexOf('KHTML/') > -1;
    }

    // 判断 浏览器
    // 判断 谷歌浏览器
    function isChrome() {
        return (userAgent().indexOf('Chrome') > -1 && userAgent().indexOf('Safari') > -1 && userAgent().indexOf('Edge') === -1 && userAgent().indexOf('Edg') === -1) || userAgent().indexOf('CriOS') > -1;
    }
    // 判断 苹果系统默认浏览器
    function isSafari() {
        return userAgent().indexOf('Safari') > -1 && userAgent().indexOf('Chrome') === -1;
    }
    // 判断 火狐浏览器
    function isFirefox() {
        return userAgent().indexOf('Firefox') > -1 || userAgent().indexOf('FxiOS') > -1;
    }
    // 判断 Opera浏览器
    function isOpera() {
        return userAgent().indexOf('Opera') > -1 || userAgent().indexOf('OPR') > -1;
    }
    // 判断 Edge浏览器
    function isEdge() {
        return userAgent().indexOf('Edge') > -1 || userAgent().indexOf('Edg') > -1;
    }
    // 判断 IE浏览器
    function isIE() {
        return userAgent().indexOf('MSIE') > -1 || userAgent().indexOf('Trident') > -1;
    }

    // 判断 系统
    // 判断 Windows
    function isWindows() {
        return userAgent().indexOf('Windows') > -1;
    }
    // 判断 Linux
    function isLinux() {
        return userAgent().indexOf('Linux') > -1 || userAgent().indexOf('X11') > -1;
    }
    // 判断Mac OS
    function isMacOS() {
        return userAgent().indexOf('Macintosh') > -1;
    }

    // 返回 引擎名称
    function engine() {
        if (isWebKit()) return 'WebKit/Blink';
        if (isPresto()) return 'Presto';
        if (isTrident()) return 'Trident';
        if (isGecko()) return 'Gecko';
    }
    // 返回 系统名称
    function system() {
        if (isWindows()) return 'Windows';
        if (isLinux()) return 'Linux';
        if (isMacOS()) return 'Mac OS';
    }
    // 返回 浏览器名称
    function browserName() {
        if (isChrome()) return 'Chrome';
        if (isSafari()) return 'Safari';
        if (isFirefox()) return 'Firefox';
        if (isOpera()) return 'Opera';
        if (isEdge()) return 'Edge';
        if (isIE()) return 'IE';
    }
    // 返回 浏览器版本
    function browserVersion() {
        if (isChrome()) return userAgent().replace(/^.*Chrome\/([\d.]+).*$/, '$1').replace(/^.*CriOS\/([\d.]+).*$/, '$1');
        if (isSafari()) return userAgent().replace(/^.*Version\/([\d.]+).*$/, '$1');
        if (isFirefox()) return userAgent().replace(/^.*Firefox\/([\d.]+).*$/, '$1').replace(/^.*FxiOS\/([\d.]+).*$/, '$1');
        if (isOpera()) return userAgent().replace(/^.*Opera\/([\d.]+).*$/, '$1').replace(/^.*OPR\/([\d.]+).*$/, '$1');
        if (isEdge()) return userAgent().replace(/^.*Edge\/([\d.]+).*$/, '$1').replace(/^.*Edg\/([\d.]+).*$/, '$1');
        if (isIE()) return userAgent().replace(/^.*MSIE ([\d.]+).*$/, '$1').replace(/^.*rv:([\d.]+).*$/, '$1');
    }

    // 返回 浏览器信息
    function browser() {
        return {
            engine: engine(),
            system: system(),
            browserName: browserName(),
            browserVersion: browserVersion(),
            connection: navigator.connection,
            isCookie: navigator.cookieEnabled,
            language: navigator.language || navigator.systemLanguage,
            onLine: navigator.onLine
        };
    }

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

    // 返回 当前显示器的分辨率
    function resolution() {
        return {
            width: screen.width,
            height: screen.height
        };
    }

    // TODO  坐标下方法
    // 返回 浏览器左边框到左边屏幕 和 浏览器的上边界到屏幕最顶端
    function coordinate() {
        return {
            top: screenTop || screenY,
            left: screenLeft || screenX,
        }
    }

    info.browser = info.prototype.browser = browser;
    browser.userAgent = userAgent;
    browser.isWebKit = isWebKit;
    browser.isTrident = isTrident;
    browser.isGecko = isGecko;
    browser.isPresto = isPresto;
    browser.isKHTML = isKHTML;

    browser.isChrome = isChrome;
    browser.isSafari = isSafari;
    browser.isFirefox = isFirefox;
    browser.isOpera = isOpera;
    browser.isEdge = isEdge;
    browser.isIE = isIE;

    browser.isWindows = isWindows;
    browser.isLinux = isLinux;
    browser.isMacOS = isMacOS;

    info.url = info.prototype.url = url;
    url.protocol = protocol;
    url.hostname = hostname;
    url.port = port;
    url.pathname = pathname;
    url.query = query;
    url.hash = hash;
    url.all = urlAll;

    info.resolution = info.prototype.resolution = resolution;

    info.coordinate = info.prototype.coordinate = coordinate;

    info.prototype.version = version;

    return info;
}));

if (window.console && window.console.log) {
    console.log([
        "      __         __  __                      __        ",
        "     |__|.-----.|  ||  |.--.--..----..---.-.|__|.-----.",
        "     |  ||  -__||  ||  ||  |  ||   _||  _  ||  ||     |",
        "     |  ||_____||__||__||___  ||__|  |___._||__||__|__|",
        "    |___|               |_____|                        "
    ].join('\n'));
};