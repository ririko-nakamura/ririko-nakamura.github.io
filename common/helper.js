function loadTextFileAjaxSync(filePath, mimeType)
{
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",filePath,false);
    if (mimeType != null) {
        if (xmlhttp.overrideMimeType) { 
            xmlhttp.overrideMimeType(mimeType);
        }
    }
    xmlhttp.send();
    if (xmlhttp.status==200 && xmlhttp.readyState == 4 )
    {
        return xmlhttp.responseText;
    }
    else {
        // TODO Throw exception
        return null;
    }
}

function loadJSON(url) {
    /*
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.send(null);
    request.onload = () => {
        if(request.status == 200)
            var json = JSON.parse(request.responseText);
            return json;
    }
    */
    var json = loadTextFileAjaxSync(url, "application/json");
    return JSON.parse(json);
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

function createChildP(parent, text) {
    const newNode = document.createElement("p");
    newNode.innerText = text;
    parent.appendChild(newNode);
    return newNode;
}

//const httpRoot = "http://localhost:8080"
const httpRoot = "http://www.ririko.io"