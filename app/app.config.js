function rootUrl(url, nameVal) {
    var bases = Array.from(document.getElementsByTagName("base"));
    var baseElem = bases.filter(function (elem) { return (elem.getAttribute("name") == (nameVal || "root")) })[0];
    if (!baseElem) baseElem = bases.filter(function (elem) { return !elem.getAttribute("name") })[0];
    if (baseElem) {
        var ret = baseElem.getAttribute("href");
        if (ret.charAt(ret.length - 1) != "/") ret += "/";
        ret += url;
        return ret;
    }
    else return "/" + url;
}

function apiRootUrl(url) {
    return rootUrl(url, "api");
}

function errorHandler(err, obj) {
    console.error(err, obj);
    console.trace();
}

(function ($) {
    $.fn.serializeObject = function () {
        return $(this).serializeArray().reduce(function (obj, x) {
                    obj[x.name] = x.value;
                    return obj;
                }, {})
    }
})(jQuery)