function loadJSON(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.send(null);
    request.onload = () => {
        if(request.status == 200)
            var json = JSON.parse(request.responseText);
    }
}

function useMobileLayout() {
    var userAgentInfo = navigator.userAgent;
    var agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPod"
    ];
    var flag = false;
    for (var v = 0; v < agents.length; v++) {
        if (userAgentInfo.indexOf(agents[v]) > 0) {
            flag = true;
            break;
        }
    }
    return flag;
}