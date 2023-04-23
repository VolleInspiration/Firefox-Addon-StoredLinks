//call to background.js
document.getElementById("openSettingsWindow").addEventListener("click", function()
{
    if(typeof browser === "undefined")
    {
        console.log("Brwoser is not defined.");
    }
    else
    {
        let type = "clickOnSettings";
        data = "";
        browser.runtime.sendMessage({run:true, data:data, type:type});
    }
});