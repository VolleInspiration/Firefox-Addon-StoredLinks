function prepareForDownload()
{
  let itemLength = allStorage().length;
  let items = "Description,Link\n";

  for (var i = 1; i <= itemLength; i++)
  {
    items += localStorage.getItem(i.toString());
    if(i < itemLength)
      items += "\n"
  }
  return items;
}

function addListener()
{
  if(typeof browser === "undefined")
  {
    console.log("Brwoser is not defined. enter debug mode:\ntrying save data...\nitem: " + prepareForDownload());
  }
  else
  {
    document.getElementById("download").addEventListener('click', function()
    {
      let test = "download";
      items = prepareForDownload();
      browser.runtime.sendMessage({run:true,data:items,type:test});
    });

    
  }
}