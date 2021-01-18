function loadJSON(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.send(null);
    request.onload = () => {
        if(request.status == 200)
            var json = JSON.parse(request.responseText);
    }
}
