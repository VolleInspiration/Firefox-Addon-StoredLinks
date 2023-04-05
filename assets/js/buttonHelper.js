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



$(document).ready(function()
{
    //block user to input ',' in inputfield
    $("#newLink").bind('keypress', function(e)
    {
        var code = e.keycode || e.which;
        if(code == 44)
        {
            return false;
        }
    });
    $("#newLinkInfo").bind('keypress', function(e)
    {
        var code = e.keycode || e.which;
        if(code == 44)
        {
            return false;
        }
    });

    //de-activate button
    $('#newLink').on('input', function()
    {
        watchInputChanged();
    });
    $('#newLinkInfo').on('input', function()
    {
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

    addMainButtons(); 
});

function addMainButtons()
{
    //loadStoredItems
    $('#buttonToggleView').click(function () 
    {
        if( $('#addLink').css('display') == 'none' )// && $('#table').css('display') == 'block' )
        {
            $('#addLink').css('display', 'block');
            $('#table').css('display', 'none');
            $('#buttonToggleView').html('Go to datatable');
        }
        else if( $('#addLink').css('display') == 'block' )// && $('#table').css('display') == 'none' )
        {
            $('#addLink').css('display', ' none');
            $('#table').css('display', 'block');
            $('#buttonToggleView').html('Add new link');   
            if( !$('#contentTable').length && localStorage.length > 0)
            { 
                //check if table exist & prepare Listenerscript for download button
                createTable();
            }
        }
    });
}