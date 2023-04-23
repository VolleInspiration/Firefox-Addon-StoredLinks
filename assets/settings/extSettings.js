function addToLocalStorage(line)
{
    let localStorageLength = localStorage.length;
    let key, value;
    
    key = localStorageLength + 1;
    value = line;
    
    localStorage.setItem(key, value);
    
};

document.getElementById('formFile').onchange = function() 
{
    var file = this.files[0];

    var reader = new FileReader();
    reader.onload = function(progressEvent) 
    {
        // Entire file
        const text = this.result;

        // By lines
        var lines = text.split('\n');
        for (var line = 0; line < lines.length; line++) 
        {
            if(line != 0)
            {
                addToLocalStorage(lines[line]);
            }
        }
    };
    reader.readAsText(file);
};