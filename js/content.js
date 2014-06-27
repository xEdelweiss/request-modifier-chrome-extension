console.info('content script loaded');

var port = chrome.runtime.connect({name: "request-modifier-channel"});
// port.postMessage({myProperty: "value"});
port.onMessage.addListener(function(msg) {
    // do some stuff here
});