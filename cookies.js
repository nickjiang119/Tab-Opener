// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

function setCookie(cname, cvalue, time) {
    var d = new Date();
    d.setTime(d.getTime() + time);
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function storeValues()
{
    setCookie('address1', document.getElementById('address1').value, 2592000000);
    setCookie('address2', document.getElementById('address2').value, 2592000000);
    setCookie('address3', document.getElementById('address3').value, 2592000000);
    setCookie('address4', document.getElementById('address4').value, 2592000000);
    setCookie('address5', document.getElementById('address5').value, 2592000000);
    return true;
}