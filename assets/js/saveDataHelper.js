function addItem(item)
{
    //cast int to string
    let itemIDnum = allStorage().length + 1;
    let itemIDstr = itemIDnum.toString();
    //save item with ID key | Item: LinkInfo, Link
    localStorage.setItem(itemIDstr, item)
}

function allStorage()
{
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    return values;
}

function repositionLocalStorageKeys()
{
    var currentKeys = [];
    var currentValues = [];
    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
    
    for(var k = 1; k <= currentKeys.length; k++)
    {
        localStorage.setItem(k.toString(), currentValues[k-1]);
    }

    if(localStorage.length > 0 && $('#contentTable').length == 0)
    {
        createTable();
    }   
}