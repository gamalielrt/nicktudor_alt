//var infoDownArrow = document.getElementById("infodownarrow");

var moreInfoOpen = false;

function clickMoreInfo () {
    if (moreInfoOpen == false) {
        //infoDownArrow.style.transform = 'rotate(180deg)';
        moreInfoOpen = true;

        for (let i=0; i<amountOfInfoImages; i++ ) {
            document.getElementById("slideshowinfoimg"+i).style.height = '0%';
            
        }

        document.getElementById("moreinfop1").style.transform = 'translateY(0vh)';
        document.getElementById("moreinfop2").style.transform = 'translateY(0vh)';
        document.getElementById("moreinfop3").style.transform = 'translateY(0vh)';
        document.getElementById("moreinfop4").style.transform = 'translateY(0vh)';
        document.getElementById("moreinfop5").style.transform = 'translateY(0vh)';
        document.getElementById("moreinfop6").style.transform = 'translateY(0vh)';

        document.getElementById("moreinfop1").style.opacity = '100%';
        document.getElementById("moreinfop2").style.opacity = '100%';
        document.getElementById("moreinfop3").style.opacity = '100%';
        document.getElementById("moreinfop4").style.opacity = '100%';
        document.getElementById("moreinfop5").style.opacity = '100%';
        document.getElementById("moreinfop6").style.opacity = '100%';


        document.getElementById("moreinfop1").style.transition = 'transform 2s, opacity 2s';
        document.getElementById("moreinfop2").style.transition = 'transform 2.2s, opacity 2.2s';
        document.getElementById("moreinfop3").style.transition = 'transform 2.4s, opacity 2.4s';
        document.getElementById("moreinfop4").style.transition = 'transform 2.6s, opacity 2.6s';
        document.getElementById("moreinfop5").style.transition = 'transform 2.8s, opacity 2.8s';
        document.getElementById("moreinfop6").style.transition = 'transform 3s, opacity 3s';

        document.getElementById("moreinfotext").style.overflow = 'scroll';









    } else if (moreInfoOpen == true) {
        //infoDownArrow.style.transform = 'rotate(0deg)';
        moreInfoOpen = false;

        for (let i=0; i<amountOfInfoImages; i++ ) {
            document.getElementById("slideshowinfoimg"+i).style.height = '70%';
            
        }

        document.getElementById("moreinfop1").style.transform = 'translateY(100vh)';
        document.getElementById("moreinfop2").style.transform = 'translateY(100vh)';
        document.getElementById("moreinfop3").style.transform = 'translateY(100vh)';
        document.getElementById("moreinfop4").style.transform = 'translateY(100vh)';
        document.getElementById("moreinfop5").style.transform = 'translateY(100vh)';
        document.getElementById("moreinfop6").style.transform = 'translateY(100vh)';

        document.getElementById("moreinfop1").style.opacity = '0%';
        document.getElementById("moreinfop2").style.opacity = '0%';
        document.getElementById("moreinfop3").style.opacity = '0%';
        document.getElementById("moreinfop4").style.opacity = '0%';
        document.getElementById("moreinfop5").style.opacity = '0%';
        document.getElementById("moreinfop6").style.opacity = '0%';


        document.getElementById("moreinfop1").style.transition = 'transform 3s, opacity 2s';
        document.getElementById("moreinfop2").style.transition = 'transform 2.8s, opacity 1.8s';
        document.getElementById("moreinfop3").style.transition = 'transform 2.6s, opacity 1.6s';
        document.getElementById("moreinfop4").style.transition = 'transform 2.4s, opacity 1.4s';
        document.getElementById("moreinfop5").style.transition = 'transform 2.2s, opacity 1.2s';
        document.getElementById("moreinfop6").style.transition = 'transform 2s, opacity 1s';

        document.getElementById("moreinfotext").style.overflow = 'scroll hidden';






    }
}