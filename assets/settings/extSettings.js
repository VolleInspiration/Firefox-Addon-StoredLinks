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
        let counter = 0;
        const text = this.result;

        var lines = text.split('\n');
        for (var line = 0; line < lines.length; line++) 
        {
            if(lines[line] === "")
                continue;
            if(lines[line].startsWith(","))
                continue;
            if(lines[line].endsWith(","))
                continue;
            if( ( lines[line].match(/,/g) ).length != 1 )
                continue;
            if(line != 0)
            {
                const arr = lines[line].split(",");
                if(arr[1].startsWith("https://"))
                {
                    counter += 1;
                    addToLocalStorage(lines[line]);
                }
            }
        }
        if(counter < 1)
            alert("File upload failed!\n\ne.g. you have an corrupt csv file.");
        else
            alert("Upload file done!\n\nYou have added new data to StoredLinks Addon.");
    };
    reader.readAsText(file);
};