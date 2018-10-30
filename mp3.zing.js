var mp3_API = " https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs";
var http = new XMLHttpRequest();
http.open("GET", mp3_API, true);
http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var js0nObject = JSON.parse(http.responseText);
        var content = '';
        for (var i = 0; i < js0nObject.length; i++) {
            var videoItem = '<ul>';
            videoItem += '<li>' + js0nObject[i].id + '</li>';
            videoItem += '<li> <img width="100" height="100" src="' + js0nObject[i].thumbnail + '"> </li>';
            videoItem += '<li>' + js0nObject[i].name + '</li>';
            videoItem += '<li>' + js0nObject[i].author + '</li>';
            videoItem += '<li>' + js0nObject[i].singer + '</li>';
            videoItem += '</ul>';
            content += videoItem;
        }
        document.getElementById('demo').innerHTML = content;
    }
};
http.send();
