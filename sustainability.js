var susOverlayOpen = false;
var sustainoverlaygif = document.getElementById("sustainoverlaygif");



function displaySusOverlay () {
    if (susOverlayOpen == false) {
        susOverlayOpen = true;
        canSwipe = false;


        document.getElementById("sustainabilityimagewrap").style.transform = 'translateY('+ -window.innerHeight +'px)';
        document.getElementById("header").style.transform = 'translateY(-120px)';

        document.getElementById("susXdiv").style.opacity = '100%';

        document.getElementById("sustext").style.overflow = 'scroll';


        setTimeout(() => {
            document.getElementById("sustainoverlaygif").style.opacity = '100%';

          }, "1000");


        document.getElementById("sustext").style.pointerEvents = 'auto';
        document.getElementById("sustext").scrollTop = '0';

        document.getElementById("susoverlaybackground").style.pointerEvents = 'auto';




        document.getElementById("sustextheader").style.transform = 'translateY(0vh)';
        document.getElementById("sustextp1").style.transform = 'translateY(0vh)';
        document.getElementById("sustextp2").style.transform = 'translateY(0vh)';
        document.getElementById("sustextp3").style.transform = 'translateY(0vh)';
        document.getElementById("sustextp4").style.transform = 'translateY(0vh)';

        document.getElementById("sustextheader").style.opacity = '100%';
        document.getElementById("sustextp1").style.opacity = '100%';
        document.getElementById("sustextp2").style.opacity = '100%';
        document.getElementById("sustextp3").style.opacity = '100%';
        document.getElementById("sustextp4").style.opacity = '100%';


        document.getElementById("sustextheader").style.transition = 'transform 2s, opacity 2s';
        document.getElementById("sustextp1").style.transition = 'transform 2.2s, opacity 2.2s';
        document.getElementById("sustextp2").style.transition = 'transform 2.4s, opacity 2.4s';
        document.getElementById("sustextp3").style.transition = 'transform 2.6s, opacity 2.6s';
        document.getElementById("sustextp4").style.transition = 'transform 2.8s, opacity 2.8s';






    } else {
        susOverlayOpen = false;
        canSwipe = true;


        document.getElementById("sustainabilityimagewrap").style.transform = 'translateY(0px)';
        document.getElementById("header").style.transform = 'translateY(0px)';

        document.getElementById("sustainoverlaygif").style.opacity = '0%';

        document.getElementById("susXdiv").style.opacity = '0%';

        document.getElementById("sustext").style.overflow = 'hidden';


        document.getElementById("sustext").style.pointerEvents = 'none';
        document.getElementById("susoverlaybackground").style.pointerEvents = 'none';




        document.getElementById("sustextheader").style.transform = 'translateY(100vh)';
        document.getElementById("sustextp1").style.transform = 'translateY(100vh)';
        document.getElementById("sustextp2").style.transform = 'translateY(100vh)';
        document.getElementById("sustextp3").style.transform = 'translateY(100vh)';
        document.getElementById("sustextp4").style.transform = 'translateY(100vh)';

        document.getElementById("sustextheader").style.opacity = '0%';
        document.getElementById("sustextp1").style.opacity = '0%';
        document.getElementById("sustextp2").style.opacity = '0%';
        document.getElementById("sustextp3").style.opacity = '0%';
        document.getElementById("sustextp4").style.opacity = '0%';


        document.getElementById("sustextheader").style.transition = 'transform 3s, opacity 2s';
        document.getElementById("sustextp1").style.transition = 'transform 2.8s, opacity 1.8s';
        document.getElementById("sustextp2").style.transition = 'transform 2.6s, opacity 1.6s';
        document.getElementById("sustextp3").style.transition = 'transform 2.4s, opacity 1.4s';
        document.getElementById("sustextp4").style.transition = 'transform 2.2s, opacity 1.2s';





    }




}