







var moreInfoOpen = false;

function clickMoreInfo () {
    if (moreInfoOpen == false) {
        moreInfoOpen = true;

        canSwipe = false;

        document.getElementById("header").style.transform = 'translateY(-120px)';
        document.getElementById("infoXdiv").style.opacity = '100%';

        document.getElementById("moreinfotext").scrollTop = '0';

        document.getElementById("infoslideshowclicker").style.pointerEvents = 'none';
        document.getElementById("infooverlaybackground").style.pointerEvents = 'auto';





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

        canSwipe = true;


        document.getElementById("header").style.transform = 'translateY(0px)';
        document.getElementById("infoXdiv").style.opacity = '0%';
        document.getElementById("infoslideshowclicker").style.pointerEvents = 'all';
        document.getElementById("infooverlaybackground").style.pointerEvents = 'none';





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



                        ///////////////////   INFO PAGE SLIDESHOW

                        const amountOfInfoImages = 3


                        function displayInfoSlideshow () {
            
            
                            for (let i=0; i<amountOfInfoImages; i++ ) {
                                document.getElementById("infoslideshowwrap").innerHTML += '<div class = "slideshowinfoimg" id = "slideshowinfoimg'+ i +'" ></div>';
                                document.getElementById("slideshowinfoimg"+i).style.background = 'url("assets/info/info_'+i+'.jpg") no-repeat center';
                                
                                document.getElementById("slideshowinfoimg"+i).style.backgroundSize = 'cover';
                                
            
            
                                if (i>0) {
                                    document.getElementById("slideshowImg"+i).style.opacity = '0%';
            
                                }
            
                            }
            
                        }
            
                        displayInfoSlideshow();
            
                        function changeInfoSlideshowImg (imgInfoID) {
            
                            for (let i=0; i<amountOfInfoImages; i++ ) {
            
            
            
                                if (i == imgInfoID) {
            
                                    document.getElementById("slideshowinfoimg"+i).style.opacity = '100%'
                                    
                                } else {
                                    document.getElementById("slideshowinfoimg"+i).style.opacity = '0%'
            
                                }
            
                            }
            
                        }
            
                        var currentInfoSlide = 1;
            
                        function runInfoSlideshow () {
                            changeInfoSlideshowImg(currentInfoSlide);
            
                            if (currentInfoSlide < amountOfInfoImages-1) {
                                currentInfoSlide++;
                            } else if (currentInfoSlide = amountOfInfoImages-1) {
                                currentInfoSlide = 0;
            
                            }
                        }
            
                        setInterval(runInfoSlideshow, 3000);
            
            
            
            
            //////////////   INFO SCROLL TO MAP

            var transAmount = 0;
            var transSpeed = (window.innerWidth/100)*1.5;
            var mapEnabled = false;

            function infoScroll(event) {

                var y = event.deltaY;
                var currentSize = event.target.style.width;
                if (y > 60 && mapEnabled == false) {

                    if(moreInfoOpen == true) {
                        if (Math.round(document.getElementById("moreinfotext").scrollTop) == Math.round(document.getElementById("moreinfotext").scrollHeight)-document.getElementById("moreinfotext").offsetHeight) {

                        }

                    } else if (moreInfoOpen == false) {
                        document.getElementById("infocontent").style.transform = 'translate(-100%)';
                        document.getElementById("infomap").style.transform = 'translate(-100%)';
                        document.getElementById("infomaptext").style.transform = 'translate(-100%)';

                        mapEnabled = true;


                    }


            


                    //transAmount -= transSpeed;
                } else if (y < 0 && mapEnabled == true){
                    document.getElementById("infocontent").style.transform = 'translate(0%)';
                    document.getElementById("infomap").style.transform = 'translate(100%)';
                    document.getElementById("infomaptext").style.transform = 'translate(100%)';

                    //transAmount += transSpeed;

                    setTimeout(() => mapEnabled = false, 1500);


                }
            }
