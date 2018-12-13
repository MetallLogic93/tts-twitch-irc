function readInput(){
    var text = findGetParameter("msg");

    var msg = new SpeechSynthesisUtterance(text, "de-DE");
    window.speechSynthesis.speak(msg);
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}