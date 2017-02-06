chrome.browserAction.onClicked.addListener(function(tab) {
    // chrome.tabs.executeScript({file: "jquery.min.js"}, function(){
        chrome.tabs.executeScript({
            // code: 'document.body.style.backgroundColor="lime"',
            file : 'run.js'
        });
    // });
});