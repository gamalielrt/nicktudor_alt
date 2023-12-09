var pSubMenuOpen = false;



function clickProjects () {

    console.log(Math.floor(document.getElementById("projects").scrollTop))

    filter ('all');
    if (pSubMenuOpen == false) {
        pSubMenuOpen = true;
        document.getElementById("projectsBtnContainer").style.height = '34%';
        document.getElementById("menu").style.paddingTop = '8%';

        setTimeout(()=> {document.getElementById("architectureBtn").style.opacity = '100%';},0);
        setTimeout(()=> {document.getElementById("artBtn").style.opacity = '100%';},100);
        setTimeout(()=> {document.getElementById("furnitureBtn").style.opacity = '100%';},500);
        setTimeout(()=> {document.getElementById("interiorBtn").style.opacity = '100%';},800);

        document.getElementById("architectureBtn").style.pointerEvents = 'auto';
        document.getElementById("artBtn").style.pointerEvents = 'auto';
        document.getElementById("furnitureBtn").style.pointerEvents = 'auto';
        document.getElementById("interiorBtn").style.pointerEvents = 'auto';




    } else if (pSubMenuOpen == true && document.getElementById("projects").scrollTop == 0 && projectsSelected == true) {
        pSubMenuOpen = false;

        document.getElementById("projectsBtnContainer").style.height = '15%';
        document.getElementById("menu").style.paddingTop = '10%';

        setTimeout(()=> {document.getElementById("architectureBtn").style.opacity = '0%';},800);
        setTimeout(()=> {document.getElementById("artBtn").style.opacity = '0%';},500);
        setTimeout(()=> {document.getElementById("furnitureBtn").style.opacity = '0%';},100);
        setTimeout(()=> {document.getElementById("interiorBtn").style.opacity = '0%';},0);

        document.getElementById("architectureBtn").style.pointerEvents = 'none';
        document.getElementById("artBtn").style.pointerEvents = 'none';
        document.getElementById("furnitureBtn").style.pointerEvents = 'none';
        document.getElementById("interiorBtn").style.pointerEvents = 'none';




    }


}




/////////////    SUBMENU LINEHEIGHT

function subMenuLineHeight () {


    if (window.innerHeight <= 800) {

        console.log(window.innerHeight);

        document.getElementById("projectcatagorybtns").style.lineHeight = (Math.floor(window.innerHeight - 549)/250) + 1;

    }


}

subMenuLineHeight();