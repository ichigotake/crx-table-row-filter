(function () {
    var topLevelIdentifier = "tableRowFiltering";

    chrome.contextMenus.create({
        type: "normal",
        title: "Filter table rows",
        contexts: ["page"],
        onclick: function (info, tab) {
            chrome.tabs.sendRequest(tab.id, {name: topLevelIdentifier});
        }
    });
})();

