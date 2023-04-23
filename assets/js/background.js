function downloadCsvFile(data)
{
    var blob = new Blob([data], {type: "text/csv;charset=utf-8"})
    browser.downloads.download({
        url:URL.createObjectURL(blob),
        filename: "StoredLinks.csv",
        saveAs: false
    });
}

function readFile(_path, _cb)
{
    fetch(_path, {mode:'same-origin'})   // <-- important

    .then(function(_res) 
    {
        return _res.blob();
    })

    .then(function(_blob) 
    {
        var reader = new FileReader();

        reader.addEventListener("loadend", function() 
        {
            _cb(this.result);
        });

        reader.readAsText(_blob); 
    });
};

function openWindow()
{
    let createData = {
        //type: "detached_panel",
        url: "settings.html",
      };
      let creating = browser.tabs.create(createData);
};

browser.runtime.onMessage.addListener(function(message, sender)
{
    if(message.type === "download")
    {
        downloadCsvFile(message.data);  
    }
    else if(message.type === "clickOnSettings")
    {
        openWindow();
    }
    
});
