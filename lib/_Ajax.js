function _Ajax(obj) {
    if (obj.url) {
        var data = "";
        for (var j in obj.data) {
            data += "&" + j + "=" + obj.data[j];
        }
        if (obj.dataType == "jsonp") {
            jsonCallBack = function(data) {
                obj.success(data);
            }
            var script = document.createElement("script");
            script.src = obj.url + "?callback=jsonCallBack";
            document.body.appendChild(script);
        } else {
            if (obj.err) {} else {
                obj.err = function() {};
            }
            if (obj.beforeSend) {} else {
                obj.beforeSend = function() {};
            }
            if (obj.async) {

            } else {
                obj.async = false;
            }
            switch (obj.cache) {
                case true:
                    obj.header['Cache-Control'] = "public";
                    break;
                case false:
                    obj.header['Cache-Control'] = "no-cache";
                    break;
                default:
                    obj.header['Cache-Control'] = "no-cache";
                    break;
            }

            if (typeof XMLHttpRequest != "undefined") {
                var xhr = new XMLHttpRequest();
            } else if (typeof ActiveXObject != "undefined") {
                if (typeof arguments.callee.activeXString != "string") {
                    var v = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"];
                    for (var i = 0; i < v.length; i++) {
                        try {
                            new ActiveXObject(v[i]);
                            arguments.callee.activeXString = v[i];
                            break;
                        } catch (e) {}
                    }
                }
            } else {
                console.log("browser error");
            }
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                        switch (obj.dataType) {
                            case 'text':
                                obj.success(xhr.responseText);
                                break;
                            case 'json':
                                obj.success(xhr.responseText);
                                break;
                            case 'xml':
                                obj.success(xhr.responseXML);
                                break;
                            default:
                                obj.success(xhr.responseText);
                                break;
                                break;
                        }
                    } else {
                        obj.err(xhr.status);
                    }
                } else {
                    obj.err(xhr.readyState);
                }
            }

            function header() {
                for (var j in obj.header) {
                    xhr.setRequestHeader(j, obj.header[j]);
                }
            }
            if (obj.method == "post") {
                xhr.open(obj.method, obj.url, obj.async); //open
                obj.header['Content-Type'] = "application/x-www-form-urlencoded";
                header();
                obj.beforeSend();
                xhr.send(data);

            } else if (obj.method == "get") {
                xhr.open(obj.method, obj.url + "?" + data, obj.async); //open
                header();
                obj.beforeSend();
                xhr.send(null);
            } else {
                xhr.open(obj.method, obj.url + "?" + data, obj.async); //open
                header();
                obj.beforeSend();
                xhr.send(null);
            }
        }
    }
}
