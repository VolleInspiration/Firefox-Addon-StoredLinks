function createTable()
{
    var content = '<table id="contentTable" class="table table-hover table-dark" style="max-width: 324px">'+
    '<thead><tr><th scope="col">Link</th><th scope="col">Description</th><th scope="col">Delete</th></tr></thead>';
    
    let storedItemsLength = allStorage().length;
    let link;
    let text;
    
    for(var i = 1; i <= storedItemsLength; i++)
    {
        let itemStr = i.toString();
        var storagedLongItem = localStorage.getItem(itemStr);
        const arr = storagedLongItem.split(",");
        
        link = arr[1];
        text = arr[0];

        content +='<tr id="' + i + '"><td><a class="hide-link" href="' + link + '" data-bs-toggle="tooltip" data-bs-placement="right" title="' + link + '">' + link + '</a></td>' + 
        '<td><div class="hide-text" data-bs-toggle="tooltip" data-bs-placement="top" title="' + text + '">' + text + '</div></td>'+
        '<td><button id="BTN_' + i + '" type="button" class="btn btn-danger">X</button></td></tr>';
    }
    content += '</table>';

    $('#table').append(content);

    //delete btn
    $("button").click(function()
    {
        let ID = this.id;
        if( ID.startsWith("BTN_") )
        {
            let IDsplit = ID.split("_");
            localStorage.removeItem(IDsplit[1].toString());
            $('#' + IDsplit[1] ).remove();
            localStorage.removeItem(IDsplit[0].toString());
            
            repositionLocalStorageKeys();
            if(localStorage.length == 0)
            {
                $('table').remove();
            }
        }
    });

    var setButton = '<input id="download" type="button" class="btn btn-outline-primary btn-sm" data-toggle="button" aria-pressed="false" autocomplete="off" value="Download link-list" onclick="prepareForDownload();" />';
    var setpanic = '<input id="PANIC" type="button" class="btn btn-outline-danger btn-sm" data-toggle="button" aria-pressed="false" autocomplete="off" value="delete all" onclick="delAll();" />';
    //$('#table').append(setButton);
    $('#table').append(setpanic);

    //popper tooltip e.g. data-bs-toggle="tooltip" data-bs-placement="top" title="text"
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) 
    {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
}

