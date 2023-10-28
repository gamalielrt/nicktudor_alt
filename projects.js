////////   PROJECTS


class Project {
    constructor(id, date, name, image, description, type, position) {
        this._id = id;
        this._date = date;
        this._name = name;
        this._image = image;
        this._description = description;
        this._type = type;
        this._position = position;

    }
    get id() {
        return this._id;
    }
    get date() {
        return this._date;
    }
    get name() {
        return this._name;
    }
    get image() {
        return this._image;
    }
    get description() {
        return this._description;
    }
    get type() {
        return this._type;
    }
    get position() {
        return this._position;
    }

}

class Projects {
    constructor() {
        this.projects = [];
    }

    newProject (id, date, name, image, description, type, position) {
        let a = new Project(id, date, name, image, description, type, position);
        this.projects.push(a);
        return a;
    }

    get numberOfProjects () {
        return this.projects.length;
    }
}

projectList = new Projects();



////   0

projectList.newProject('0',
                    '10/08/23',
                    'House on Martins Lane',
                    'martinslane_thumb.jpg',
                    'Following the erection of an insulated timber frame, I completed the carpentry for all other timber elements of this new build house. The larch cladding required 26,000 nails, each fixed through a pilot hole. <p><br><p>I designed and made the canopy and pergola that provides essential solar shade, using complex traditional joints in English grown green douglas fir to demonstrate the discrete level of craft in the building that is otherwise hidden, and to add some visual interest to an otherwise straightforward construction. <p><br><p>Other more common items were also completed; door linings, sills, internal stud walls and bathrooms. ',
                    'Architecture',
                    'full'
);

////   1

projectList.newProject('1',
                    '10/08/23',
                    'Stathol Bedframe',
                    'studiovoltaire_thumb.jpg',
                    "A bed frame I design that was inspired by the resting characters in Bruegel’s ‘The Harvesters’, and the careful storage of their crop atop staddle (or stathol) stones. This version is made from solid Black Poplar, with small areas of natural edge and lots of pip. The frame rest on four hand turned legs. It is designed to be flat-packed and assembled with just an allen key. <p><br><p> It can be made to any size and from a range of timbers.",
                    'Furniture',
                    'left'
);


////   2


projectList.newProject('2',
                    '10/08/23',
                    'Adlard',
                    'adlard_thumb.jpg',
                    'A suspended double wardrobe. Designed for a compact bedroom, I used a curve to soften the projection into the room. <p><br><p> The Alpi Myrtle Burr veneer was reverse slip matched, creating a consistent, subtle and interesting texture across the piece. Bespoke knobs were turned in contrasting black walnut. Simple, economical shelves and and hanging rail occupy the interior, all constructed from sustainable poplar plywood. ',
                    'Interior',
                    'right'
);

////   3


projectList.newProject('3',
                    '10/08/23',
                    'French Curve',
                    'frenchcurve_thumb.jpg',
                    'Side table in black walnut.',
                    'Furniture',
                    'left'
);

////   4


projectList.newProject('4',
                    '10/08/23',
                    'Brightside Cabinets',
                    'brightsidecabinets_thumb.jpg',
                    'Sitting inside a refurbished Victorian terraced house, I wanted to reflect the historic character of the building and the modern interventions it had undergone. <p><br><p>I machined an ovolo moulding in oak to form the front of the cabinets. The doors, simple solid oak mortice and tenon frames, feature a discrete finger pull along their bottom edge, while magnets were hidden beneath oak plugs to replace the need for door catches. ',
                    'Interior',
                    'right'
);

////   5


projectList.newProject('5',
                    '10/08/23',
                    'House of Voltaire',
                    'houseofvoltaire_thumb.jpg',
                    'Project in collaboration with Josh Malby. We were asked to design, make and install a permanent home for House of Voltaire, a shop selling artworks, limited editions, homewares and clothings by artists and designers to support Studio Voltaire. <p><br><p>We developed the existing identity for the shop, producing a low oak plinth with torus panelling disguising loads of storage. An arch feature inspired by John Soane spans the longest wall of the shop, beneath which a blackened steel shelving system allows for framed artworks and editions to be placed in a salon style. <p><br><p>An oak shelving unit mirrors the central arch on the adjacent wall. ',
                    'Interior',
                    'full'
);

////   6


projectList.newProject('6',
                    '10/08/23',
                    'Brightside Wardrobe',
                    'brightsidewardrobe_thumb.jpg',
                    'The doors for this wardrobe are set inside a series of frames separating each wardrobe. Solid English oak runs along the edge between each pair of doors, forming a discrete handle. <p><br><p>Each door was carefully veneered individually with a book-matched pair of veneer leaves all from the same tree to achieve a match across the span of the wardrobe.',
                    'Furniture',
                    'right'
);

////   7


projectList.newProject('7',
                    '10/08/23',
                    'Mike Show',
                    'mikeshow_thumb.jpg',
                    'I worked with Mike and 3 others in the lead up to this ambitious exhibition bringing together many of the large scale installations from Mike’s career. <p><br><p>In the 3 months leading up to the install we worked in an old Argos warehouse in Orpington, Kent using cobbled together documentation and photographs from the past 3 decades to reconstruct and modify the works for the galleries at the Hayward. <p><br><p>We were joined by various gallery staff and an exhibition build team to complete the gallery install with a 1 month deadline. Beyond the impressive scale of the work, it’s the need for attention to Mike’s idiosyncratic approach to construction, detailing and hardware that prompts me to show this project.',
                    'Art',
                    'left'
);

////   8


projectList.newProject('8',
                    '10/08/23',
                    'Studio Voltaire',
                    'studiovoltaire_thumb.jpg',
                    'Project in collaboration with Josh Malby. We were asked by Studio Voltaire, London, to design a selection of furniture for they redevelopment project completed in 2021. Consisting primarily of large scale communal tables and the staff desks, I also designed and made their onsite Cafe. <p><br><p>Details like the lancet arch and ebonised oak wedge were a nod toward the historic fabric of the original building, while the birch ply and Forbo linoleum reflect the modernisation undergone through the building’s redevelopment. <p><br><p>The communal tables for the art studios were a particular favourite, using an oak wedge to lock all the parks together without the need for fixings, allowing the tables to be constructed and reconstructed as needed to make additional space in the communal areas.',
                    'Interior',
                    'right'
);

////   9


projectList.newProject('9',
                    '10/08/23',
                    'Floating Bedframe and Curved Headboard',
                    'studiovoltaire_thumb.jpg',
                    'A bespoke bed in pippy and brown English oak.',
                    'Furniture',
                    'full'
);

////   10


projectList.newProject('10',
                    '10/08/23',
                    'Mark Lecky',
                    'studiovoltaire_thumb.jpg',
                    '',
                    'Art',
                    'right'
);

////   11


projectList.newProject('11',
                    '10/08/23',
                    'Kelmore',
                    'studiovoltaire_thumb.jpg',
                    '',
                    'Furniture',
                    'left'
);

////   12


projectList.newProject('12',
                    '10/08/23',
                    'Baldock',
                    'studiovoltaire_thumb.jpg',
                    '',
                    'Art',
                    'right'
);

////   13

projectList.newProject('13',
                    '10/08/23',
                    'Mike Tate',
                    'studiovoltaire_thumb.jpg',
                    '',
                    'Art',
                    'right'
);






///////////////    DISPLAY PROJECTS


var initDisTop = 130;

var projectsDisTop = [];

var loadMoreClicked = false;



function displayProjects(projectsToDisplaystart, projectsToDisplay, disTopInput) {

    if (deviceType == "computer" || window.innerWidth > 550) {
        //console.log('device is computer');

        projectscontainer.style.width = '100%';
        projectscontainer.style.margin = 'auto';


    }

    //if (projectsToDisplaystart == 0) {

        var disTop = disTopInput;


    //}


    var afterFull = false;

    for (let i=projectsToDisplaystart; i<=projectsToDisplay-1; i++ ) {

        //console.log(disTop);

       ////////   Log Distance from top into an Array
       projectsDisTop[i] = disTop;


        
        
        document.getElementById("projectscontainer").innerHTML += '<div class = "project" id ="project'+ i +'" ><img class ="projectThumbImg lazy" id = "projectThumbImg'+ i +'" src ="assets/projects/projectimages/'+ i +'/'+ i + '_1.jpg" onClick = "projectClick('+ i +')"></div>';

        

        if (deviceType.includes("computer") || window.innerWidth > 550) {

            if (i>0) {

                if (projectList.projects[i].position == 'full' && afterFull == false) {

                    disTop = disTop+ window.innerWidth/10 //100;
    
    
                }
    



            }




            document.getElementById("projectscontainer").innerHTML += '<br><br><br><br><br><br>';

            document.getElementById("project"+ i ).style.top = disTop + 'px';


            //// Distance from image above


            








            switch (projectList.projects[i].position) {
                case('full') :

                    document.getElementById("projectThumbImg"+ i).style.width = '60%';
                    document.getElementById("projectThumbImg"+ i).style.marginLeft = Math.floor(Math.random() * 35) + 5 + '%';


                break;

                case('left') :

                    document.getElementById("projectThumbImg"+ i).onload = function(){
                        if (document.getElementById("projectThumbImg"+ i).height > document.getElementById("projectThumbImg"+ i).width) {

                            console.log("portrait");

                            document.getElementById("projectThumbImg"+ i).style.width = Math.floor(Math.random() * (20 - 20) + 20)+ '%';

                        } else {
                            document.getElementById("projectThumbImg"+ i).style.width = Math.floor(Math.random() * (45 - 30) + 30)+ '%';
    
                        }
                    } 
    
                    document.getElementById("projectThumbImg"+ i).style.marginLeft = Math.floor(Math.random() * 10) + 1 + '%';



                break;

                case('right') :

                document.getElementById("projectThumbImg"+ i).onload = function(){
                    if (document.getElementById("projectThumbImg"+ i).height > document.getElementById("projectThumbImg"+ i).width) {

                        //console.log("portrait");

                        document.getElementById("projectThumbImg"+ i).style.width = Math.floor(Math.random() * (20 - 20) + 20)+ '%';

                    } else {
                        document.getElementById("projectThumbImg"+ i).style.width = Math.floor(Math.random() * (45 - 25) + 25)+ '%';

                    }
                } 
                document.getElementById("projectThumbImg"+ i).style.marginLeft = Math.floor(Math.random() * (65 - 50) + 50 )+ '%';



                break;

                

            } 


            if (projectList.projects[i].position == 'full') {


                disTop = disTop+ window.innerWidth/2 //550;



            } else if (projectList.projects[i].position == 'right' || projectList.projects[i].position == 'left') {

                disTop = disTop+ window.innerWidth/4 //300;


            }


            //console.log(projectsDisTop);


            switch (projectList.projects[i].position) {
                case('full') :

                    afterFull = true;

                break;

                case('left') :

                    afterFull = false;

                break;

                case('right') :
                    afterFull = false;

                break;

                

            } 

            if (document.getElementById("projectThumbImg"+ i).height > document.getElementById("projectThumbImg"+ i).width) {
                console.log("portrait");
            }




        }

    }

    if (projectsToDisplay < projectList.numberOfProjects-1) {

        document.getElementById("projectscontainer").innerHTML += '<div id = "loadmore" onClick = "loadMore()">LOAD MORE</div>';
        document.getElementById("loadmore").style.top = disTop + 100 + 'px';

        initDisTop = disTop + 100;
    


    }

    //console.log(document.getElementById("project5").style.top)


    





}

displayProjects(0, 8, initDisTop);




//////////////  LOAD MORE


function loadMore () {

    //document.getElementById("projectscontainer").innerHTML = '';

    if (loadMoreClicked == false) {

        displayProjects(8,projectList.numberOfProjects, initDisTop);
        document.getElementById("loadmore").style.opacity = '0%';
        setTimeout( ()=> {document.getElementById("loadmore").style.display = 'none'},1000);

        loadMoreClicked = true;
    


    }





}





///////////////  DISPLAY IMAGES






var projIndexSel = 1;


function projectClick (projectIndex) {
 
     document.getElementById("projectoverlay").style.display = 'block';
     document.getElementById("illlayer").style.display = 'none';

     document.getElementById("infoslidertitle").innerHTML = projectList.projects[projectIndex].name;
     document.getElementById("infosliderdescription").innerHTML = '<p><br><p> '+ projectList.projects[projectIndex].description;


     document.getElementById("projectbrowser").innerHTML = '';


     console.log(imageList.images[projectIndex].project)

     for (let i = 0; i<imageList.numberOfImages; i++) {

        projIndexSel = 1

        if (imageList.images[i].project == projectIndex) {

            //displaying all images associated to that project

            document.getElementById("projectbrowser").innerHTML += '<div class = "projimageslide" id = "projimageslide'+ imageList.images[i].pindex +'" ><div class = "projimagecontainer"><img class = "projimage" src = "./assets/projects/projectimages/'+projectIndex+'/'+ imageList.images[i].name +'" onclick = "clickProjImage('+ imageList.images[i].pindex +')"></div></div>';
            
            //console.log(document.getElementById("projectbrowser").innerHTML);


            if (imageList.images[i].pindex == 1) {
                document.getElementById("projimageslide"+ imageList.images[i].pindex).style.opacity = '100%';

            } else {

            document.getElementById("projimageslide"+ imageList.images[i].pindex).style.opacity = '0%';

            }

        }


     }

     console.log(document.getElementById("projectoverlay"))
     
 }


 function clickProjImage (pindex) {
    
    console.log(pindex,projIndexSel);

    if (projIndexSel < pindex) {

        document.getElementById("projimageslide"+ projIndexSel).style.opacity = '0%';
        projIndexSel++;
        document.getElementById("projimageslide"+ projIndexSel).style.opacity = '100%';

    } else if ( projIndexSel == pindex){

        document.getElementById("projimageslide"+ projIndexSel).style.opacity = '0%';
        projIndexSel = 1;
        document.getElementById("projimageslide"+ projIndexSel).style.opacity = '100%';


    }

}


var infoSlider = document.getElementById("infoslider");
var infoSliderDisplayed = false;



function clickinfoSlider () {
    if (infoSliderDisplayed == false) {

        console.log("infoSlider display")

        infoSlider.style.left = "0px";

        infoSliderDisplayed = true;

        //document.getElementsByClassName("projimageslide").style.width = '80%'

        //var elements = document.getElementsByClassName("projimageslide");
        //for (var i = 0; i < elements.length; i++) {
        //    elements[i].style.width = 'calc(100% - 360px)';
        //}

        document.getElementById("projectbrowserwrapper").style.left = '360px';
        document.getElementById("projectbrowserwrapper").style.width = 'calc(100% - 360px)';


    } else if (infoSliderDisplayed == true) {

        console.log("infoSlider no display")


        infoSlider.style.left = "-400px";

        infoSliderDisplayed = false;

        //var elements = document.getElementsByClassName("projimageslide");
        //for (var i = 0; i < elements.length; i++) {
        //    elements[i].style.width = '100%';
        //}

        document.getElementById("projectbrowserwrapper").style.left = '0px';
        document.getElementById("projectbrowserwrapper").style.width = '100%';







    }
}



/////////////////   FILTER




function filter (catagory) {

    loadMore ();




    gsap.to(document.getElementById("projects"), {scrollTop:0, duration: 1, ease: "power4"});

    clickMenu ();

    document.getElementById("hamburgericon").classList.toggle("open");

    var filtDisTop = 130;

    if (catagory == 'all') {
        console.log('all',projectsDisTop[0] )
        for (let i=0; i < projectList.numberOfProjects; i++) {



            document.getElementById("project" + i).style.transition = 'opacity 1s, top 1s cubic-bezier(0.0, 0.5, 0.5 ,1.0)';
            document.getElementById("project" + i).style.opacity = '100%';

            if( projectList.projects[i].position == 'full' && i !== 0) {
                document.getElementById("project" + i).style.top = projectsDisTop[i] + window.innerWidth/10 +'px';

            }

            else {
                document.getElementById("project" + i).style.top = projectsDisTop[i] + 'px';


            }

            console.log(projectsDisTop);
            //console.log(projectList.projects[5].position)
            console.log(document.getElementById("project5").style.top, window.innerWidth);
        }

        //window.innerWidth/10



    } else {


    for (let i=0; i < projectList.numberOfProjects; i++) {


        if (catagory !== projectList.projects[i].type) {

            document.getElementById("project" + i).style.opacity = '0%';

            document.getElementById("project" + i).style.top = filtDisTop - window.innerHeight + 'px';//projectsDisTop[i] +'px';

        } else {


            
            document.getElementById("project" + i).style.transition = 'opacity 1s, top 1s cubic-bezier(0.0, 0.5, 0.5 ,1.0)';
            document.getElementById("project" + i).style.opacity = '100%';
            document.getElementById("project" + i).style.top = filtDisTop +'px';


            //filtDisTop += window.innerWidth/2.3;

            if (projectList.projects[i].position == 'full') {


                filtDisTop = filtDisTop+ window.innerWidth/2 //550;



            } else if (projectList.projects[i].position == 'right' || projectList.projects[i].position == 'left') {

                filtDisTop = filtDisTop+ window.innerWidth/3 //300;


            }



        }
    }


        console.log(filtDisTop);

    }



}

//filter('Art');










 





