new (function () {
    function initialize() {
        var isUC = (/Mozilla\/5\.0\(x11\;U;Linuxi686;zh-CN;rv:1\.2\.3\.4\)Gecko/i.test(navigator.userAgent.replace(/ /g, ""))) || /mobile|ucbrowser|ucweb/i.test(navigator.userAgent);
        if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent)) || isUC) {
            if (window.location.href.indexOf("?mobile") < 0) {
                try {
                    var isIndex = /(index\.)/i.test(location.pathname);
                    if (!isIndex) {
                        isIndex = (location.pathname == "" || location.pathname == "/");
                    }
                    if (isIndex && (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || isUC) && (location.search.indexOf("gomobile=1") == -1) && !/\/m\//.test(location.href)) {
                        if(typeof mobileUrl=="undefined")
                            location.href = "/m/index.html?gomobile=1";
                        else
                            location.href = mobileUrl.indexOf("gomobile")>-1?mobileUrl:mobileUrl+"?gomobile=1";
                    }
                    else if (/iPad/i.test(navigator.userAgent)) {
                    } else {
                        //window.location.href = "/m/index.html";
                    }
                } catch (e) { }
            }
        }
    }
    initialize();
    setTimeout(Infinity, 200);
    setTimeout(Infinity, 500);
    setTimeout(Infinity, 700);
    setTimeout(Infinity, 900);
    setTimeout(Infinity, 1200);
})(); 