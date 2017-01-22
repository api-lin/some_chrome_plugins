chrome.tabs.executeScript(tabId, {file: "jquery.js"}, function(){
 chrome.tabs.executeScript(tabId, {code: "var scriptOptions = {param1:'value1',param2:'value2'};"}, function(){
  chrome.tabs.executeScript(tabId, {file: "script.js"}, function(){
   //all injected
  });
 });
});
（jquery.js应放入扩展文件夹）。可将里面的易趣脚本选项scriptOptions中的变量script.js。 这是理所当然暨容易：
chrome.tabs.executeScript(tabId, {file: "jquery.js"}, function(){
 chrome.tabs.executeScript(tabId, {file: "script.js"}, function(){
  chrome.tabs.sendRequest(tabId, {scriptOptions: {param1:'value1',param2:'value2'}}, function(){
   //all injected
  });
 });
});