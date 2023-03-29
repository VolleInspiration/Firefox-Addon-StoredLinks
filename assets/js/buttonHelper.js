function watchInputChanged()
{
    if( $('#newLink').val() && $('#newLinkInfo').val() )
    {
        $("#submitBtn").removeClass("disabled");
    }
    else
    {
        $("#submitBtn").addClass("disabled");
    }
};

function IsURIvalid(uri)
{
    if( uri.startsWith("https://") )
        return true;
    else
        return false;
}

function delAll()
{
    localStorage.clear();
    $('table').remove();
    $('#download').remove();
    $('#PANIC').remove();
    $('#buttonToggleView').click();
}

$(document).ready(function()
{
    
    //de-activate button
    $('#newLink').on('input', function(){
        watchInputChanged();
    });
    $('#newLinkInfo').on('input', function(){
        watchInputChanged();
    });

    //check button clicked event
    $('#submitBtn').click(function () 
    {
        var itemArray = [$('#newLinkInfo').val(), $('#newLink').val()];
        if( !IsURIvalid( $('#newLink').val() ) )
        {
            itemArray[1] = "https://" + itemArray[1];
        }
        addItem(itemArray);
        
    });

    //loadStoredItems
    $('#buttonToggleView').click(function () 
    {
        if( $('#addLink').css('display') == 'none' && $('#table').css('display') == 'block' )
        {
            $('#addLink').css('display', 'block');
            $('#table').css('display', 'none');
            $('#buttonToggleView').html('Go to datatable');
        }
        else if( $('#addLink').css('display') == 'block' && $('#table').css('display') == 'none' )
        {
            
            $('#addLink').css('display', ' none');
            $('#table').css('display', 'block');
            $('#buttonToggleView').html('Add new link');   
            if( !$('#contentTable').length && localStorage.length > 0)
            { 
                //check if table exist
                createTable();
            }
        }
    });
    
});