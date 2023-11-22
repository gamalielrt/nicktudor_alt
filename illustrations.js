var illustration1 = document.getElementById('illustration1');
var illustration2 = document.getElementById('illustration2');

var spaceWidth1;
var spaceHeight1;

var spaceWidth2;
var spaceHeight2;

var endScreen = pagecontent.scrollTop + window.innerHeight;
var startScreen = pagecontent.scrollTop




function resetIllustration1 () {
    setTimeout(() => {
        initillustration1()
    }, Math.round((Math.random() * (8000-4000)) + 4000));
}



function initillustration1() {



    illustration1.innerHTML = '<img id = "ill1" class = "illustration" src = "./assets/illustrations/ill'+ Math.round((Math.random() * 9)) + '.png">';

    //Math.floor(Math.random() * (max - min) ) + min;

    illustration1.style.height = Math.round((Math.random() * (250 - 100)) + 100) + 'px';


    spaceHeight1 = document.body.offsetHeight - illustration1.style.height;
    spaceWidth1 = document.body.offsetWidth - illustration1.style.width;

    //illustration1.style.top = Math.floor(Math.random() * (endScreen - startScreen -100) + startScreen) + 'px';

    illustration1.style.top = Math.floor(Math.random() * document.body.offsetHeight) + 'px';

    

    illustration1.style.left = Math.round(Math.random() * spaceWidth1) + 'px';

    //closePoverlayconsole.log('show ill1');
    //console.log(startScreen, endScreen, illustration1.style.top, illustration1.style.left  );




    illustration1.style.opacity = "100%";

    setTimeout(() => {
        //console.log('hide ill1')

        illustration1.style.opacity = "0%";
        resetIllustration1()
    }, Math.round((Math.random() * (6000-4000)) + 4000));


}

function resetIllustration2 () {
    setTimeout(() => {
        initillustration2()
    }, Math.round((Math.random() * (5000-4000)) + 4000));
}




function initillustration2() {

    //console.log('show ill2')


    illustration2.innerHTML = '<img id = "ill2" class = "illustration" src = "./assets/illustrations/ill'+ Math.round((Math.random() * 9)) + '.png">'

    illustration2.style.height = Math.round((Math.random() * 200) + 90) + 'px';

    spaceHeight2 = document.body.offsetHeight - illustration2.style.height;
    spaceWidth2 = document.body.offsetWidth - illustration2.style.width;

    //illustration2.style.top = Math.floor(Math.random() * (endScreen - startScreen -100) + startScreen) + 'px';

    illustration2.style.top = Math.floor(Math.random() * document.body.offsetHeight) + 'px';



    illustration2.style.left = Math.round(Math.random() * spaceWidth2) + 'px';


    illustration2.style.opacity = "100%";

    setTimeout(() => {
        //console.log('hide ill2')

        illustration2.style.opacity = "0%";
        resetIllustration2()
    }, Math.round((Math.random() * 10000) + 3000));



}


initillustration1();
//setTimeout(initillustration2, 6000);


function getScroll() {

    endScreen = pagecontent.scrollTop + window.innerHeight;
    startScreen = pagecontent.scrollTop;


        

    //console.log(startScreen, endScreen  );

    
}


pagecontent.addEventListener("scroll", getScroll);


//const mainWindow = document.querySelector('main');
//mainWindow.addEventListener('wheel', wheelIllMove, {passive: false});
//var projects = document.getElementById("projects");


var displacement = 0

function wheelIllMove (e) {
    //console.log(e.deltaY);
    console.log(pagecontent.scrollTop, projects.offsetHeight);

    document.getElementById("illustration1").style.transform = "translateY("+ pagecontent.scrollTop/5 + "px)";
    document.getElementById("illustration2").style.transform = "translateY("+ pagecontent.scrollTop/5 + "px)";


    /*

        if (e.deltaY > 0 ) {



            document.getElementById("illustration1").style.transform = "translateY("+ pagecontent.scrollTop + "px)";
            document.getElementById("illustration2").style.transform = "translateY("+ displacement + "px)";


            displacement -= 2
        }
        
        if (e.deltaY < 0 ) {

            document.getElementById("illustration1").style.transform = "translateY("+ displacement + "px)";
            document.getElementById("illustration2").style.transform = "translateY("+ displacement + "px)";


            displacement += 2

        }

        */


}



