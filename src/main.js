import browser from './browser'
import url from './url'
import resolution from './resolution'
import coordinate from './coordinate'
import element from './element'

function info() {
    console.log({
        version: info.version,
        browser: browser.version,
        url: url.version,
        resolution: resolution.version,
        coordinate: coordinate.version,
        element: element.version
    });
}

info.version = '1.0.0'
info.browser = browser
info.url = url
info.resolution = resolution
info.coordinate = coordinate
info.element = element

if (window.console && window.console.log) {
    console.log([
        "      __         __  __                      __        ",
        "     |__|.-----.|  ||  |.--.--..----..---.-.|__|.-----.",
        "     |  ||  -__||  ||  ||  |  ||   _||  _  ||  ||     |",
        "     |  ||_____||__||__||___  ||__|  |___._||__||__|__|",
        "    |___|               |_____|                        "
    ].join('\n'));
};

export default info