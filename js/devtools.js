console.info('devtools script loaded');

chrome.devtools.panels.create(
    "Request Modifier",
    "../img/icon16.png",
    "../html/panel.html",
    function() {

    }
);