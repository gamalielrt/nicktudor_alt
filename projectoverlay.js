var projectoverlay = document.getElementById("projectoverlay");
var projectbrowser = document.getElementById("projectbrowser");


function closePoverlay () {
    projectoverlay.style.display = 'none';
    projectbrowser.innerHTML = '';

    document.getElementById("illlayer").style.display = 'block';

    //clickinfoSlider ();
    //infoSliderDisplayed = true;
    //console.log(infoSliderDisplayed)
}