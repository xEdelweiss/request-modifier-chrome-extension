console.info('background script loaded');

chrome.runtime.onConnect.addListener(function(port) {
    if(port.name == "request-modifier-channel"){
        port.onMessage.addListener(function(msg) {
            // do some stuff here
        });
    }
});

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log('onBeforeRequest', details);
        return {};
    },
    {urls: ["<all_urls>"]},
    ["requestBody"]
);

chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        console.log('onBeforeSendHeaders', details);
        return {};
    },
    {urls: ["<all_urls>"]},
    ["requestHeaders"]
);

chrome.webRequest.onSendHeaders.addListener(
    function(details) {
        console.log('onSendHeaders', details);
        return {};
    },
    {urls: ["<all_urls>"]},
    ["requestHeaders"]
);

chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
        console.log('onHeadersReceived', details);
        return {};
    },
    {urls: ["<all_urls>"]},
    ["responseHeaders"]
);

chrome.webRequest.onAuthRequired.addListener(
    function(details) {
        console.log('onAuthRequired', details);
        return {};
    },
    {urls: ["<all_urls>"]},
    ["responseHeaders"]
);

chrome.webRequest.onResponseStarted.addListener(
    function(details) {
        console.log('onResponseStarted', details);
        return {};
    },
    {urls: ["<all_urls>"]},
    ["responseHeaders"]
);

chrome.webRequest.onBeforeRedirect.addListener(
    function(details) {
        console.log('onBeforeRedirect', details);
        return {};
    },
    {urls: ["<all_urls>"]},
    ["responseHeaders"]
);

chrome.webRequest.onCompleted.addListener(
    function(details) {
        console.log('onCompleted', details);
        return {};
    },
    {urls: ["<all_urls>"]},
    ["responseHeaders"]
);

chrome.webRequest.onErrorOccurred.addListener(
    function(details) {
        console.log('onErrorOccurred', details);
        return {};
    },
    {urls: ["<all_urls>"]},
    []
);