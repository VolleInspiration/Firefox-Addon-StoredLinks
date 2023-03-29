function download(content, mimeType, filename)
{
    const a = document.createElement('a') // Create "a" element
    const blob = new Blob([content], {type: mimeType}) // Create a blob (file-like object)
    const url = URL.createObjectURL(blob) // Create an object URL from blob
    a.setAttribute('href', url) // Set "a" element link
    a.setAttribute('download', filename) // Set download filename
    a.click() // Start downloading
}

function prepareForDownload()
{
  let itemLength = allStorage().length;
  let items = "";

  for (var i = 1; i <= itemLength; i++)
  {
    items += localStorage.getItem(i.toString());
    if(i < itemLength)
      items += "\n"
  }
  console.log(items + "\nbegin download...");

  download(items, "text/csv", "StoredLinksData.csv");
}