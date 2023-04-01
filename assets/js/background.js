function downloadCsvFile(data)
{
    var blob = new Blob([data], {type: "text/csv;charset=utf-8"})
    browser.downloads.download({
        url:URL.createObjectURL(blob),
        filename: "StoredLinks.csv",
        saveAs: false
    });
}

browser.runtime.onMessage.addListener(function(message, sender){
    downloadCsvFile(message.data);  
});
