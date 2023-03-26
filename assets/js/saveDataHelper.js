//localStorage.clear();
//$('#tableContent').remove();

function showSavedItem(itemKey)
{
    console.log(localStorage.getItem(itemKey));
}

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

    for(var j = 1; j <= i; j++)
    {
        currentKeys.push(keys[j]);
        currentValues.push(localStorage.getItem(keys[j]));
        //console.log("KEYS: " + localStorage.getItem(keys[j]) + "___" + keys[j]);
    }
    
    for(var k = 1; k <= currentKeys.length; k++)
    {
        localStorage.setItem(k.toString(), currentValues[k-1]);
    }

    createTable();
}

//repositionLocalStorageKeys();