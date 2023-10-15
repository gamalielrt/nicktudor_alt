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

projectList.newProject('0',
                    '10/08/23',
                    'House on Martins Lane',
                    'martinslane_thumb.jpg',
                    'Following the erection of an insulated timber frame, I completed the carpentry for all other timber elements of this new build house. The larch cladding required 26,000 nails, each fixed through a pilot hole. <p><br><p>I designed and made the canopy and pergola that provides essential solar shade, using complex traditional joints in English grown green douglas fir to demonstrate the discrete level of craft in the building that is otherwise hidden, and to add some visual interest to an otherwise straightforward construction. <p><br><p>Other more common items were also completed; door linings, sills, internal stud walls and bathrooms. ',
                    'Architecture',
                    'full'
);

projectList.newProject('1',
                    '10/08/23',
                    'Adlard',
                    'adlard_thumb.jpg',
                    'A suspended double wardrobe. Designed for a compact bedroom, I used a curve to soften the projection into the room. <p><br><p> The Alpi Myrtle Burr veneer was reverse slip matched, creating a consistent, subtle and interesting texture across the piece. Bespoke knobs were turned in contrasting black walnut. Simple, economical shelves and and hanging rail occupy the interior, all constructed from sustainable poplar plywood. ',
                    'Interior',
                    'left'
);

projectList.newProject('2',
                    '10/08/23',
                    'Brightside Cabinets',
                    'brightsidecabinets_thumb.jpg',
                    'Sitting inside a refurbished Victorian terraced house, I wanted to reflect the historic character of the building and the modern interventions it had undergone. <p><br><p>I machined an ovolo moulding in oak to form the front of the cabinets. The doors, simple solid oak mortice and tenon frames, feature a discrete finger pull along their bottom edge, while magnets were hidden beneath oak plugs to replace the need for door catches. ',
                    'Interior',
                    'right'
);

projectList.newProject('3',
                    '10/08/23',
                    'French Curve',
                    'frenchcurve_thumb.jpg',
                    'Side table in black walnut.',
                    'Furniture',
                    'left'
);

projectList.newProject('4',
                    '10/08/23',
                    'House of Voltaire',
                    'houseofvoltaire_thumb.jpg',
                    'Project in collaboration with Josh Malby. We were asked to design, make and install a permanent home for House of Voltaire, a shop selling artworks, limited editions, homewares and clothings by artists and designers to support Studio Voltaire. <p><br><p>We developed the existing identity for the shop, producing a low oak plinth with torus panelling disguising loads of storage. An arch feature inspired by John Soane spans the longest wall of the shop, beneath which a blackened steel shelving system allows for framed artworks and editions to be placed in a salon style. <p><br><p>An oak shelving unit mirrors the central arch on the adjacent wall. ',
                    'Interior',
                    'full'
);

projectList.newProject('5',
                    '10/08/23',
                    'Brightside Wardrobe',
                    'brightsidewardrobe_thumb.jpg',
                    'The doors for this wardrobe are set inside a series of frames separating each wardrobe. Solid English oak runs along the edge between each pair of doors, forming a discrete handle. <p><br><p>Each door was carefully veneered individually with a book-matched pair of veneer leaves all from the same tree to achieve a match across the span of the wardrobe.',
                    'Furniture',
                    'right'
);

projectList.newProject('6',
                    '10/08/23',
                    'Mike Show',
                    'mikeshow_thumb.jpg',
                    'I worked with Mike and 3 others in the lead up to this ambitious exhibition bringing together many of the large scale installations from Mike’s career. <p><br><p>In the 3 months leading up to the install we worked in an old Argos warehouse in Orpington, Kent using cobbled together documentation and photographs from the past 3 decades to reconstruct and modify the works for the galleries at the Hayward. <p><br><p>We were joined by various gallery staff and an exhibition build team to complete the gallery install with a 1 month deadline. Beyond the impressive scale of the work, it’s the need for attention to Mike’s idiosyncratic approach to construction, detailing and hardware that prompts me to show this project.',
                    'Art',
                    'left'
);

projectList.newProject('7',
                    '10/08/23',
                    'Studio Voltaire',
                    'studiovoltaire_thumb.jpg',
                    'Project in collaboration with Josh Malby. We were asked by Studio Voltaire, London, to design a selection of furniture for they redevelopment project completed in 2021. Consisting primarily of large scale communal tables and the staff desks, I also designed and made their onsite Cafe. <p><br><p>Details like the lancet arch and ebonised oak wedge were a nod toward the historic fabric of the original building, while the birch ply and Forbo linoleum reflect the modernisation undergone through the building’s redevelopment. <p><br><p>The communal tables for the art studios were a particular favourite, using an oak wedge to lock all the parks together without the need for fixings, allowing the tables to be constructed and reconstructed as needed to make additional space in the communal areas.',
                    'Architecture',
                    'right'
);





function displayProjects() {

    if (deviceType == "computer" || window.innerWidth > 550) {
        console.log('device is computer');

        projectscontainer.style.width = '100%';
        projectscontainer.style.margin = 'auto';


    }



    var disTop = 100;

    var afterFull = false;

    for (let i=0; i<=7; i++ ) {
        
        document.getElementById("projectscontainer").innerHTML += '<div class = "project" id ="project'+ i +'" ><img class ="projectThumbImg" id = "projectThumbImg'+ i +'" src ="assets/projects/projectthumbnails/'+ projectList.projects[i].image +'" onClick = "projectClick('+ i +')"></div>';

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

                    //console.log('display Full')




                break;

                case('left') :
                    document.getElementById("projectThumbImg"+ i).style.width = Math.floor(Math.random() * (45 - 25) + 25)+ '%';
                    document.getElementById("projectThumbImg"+ i).style.marginLeft = Math.floor(Math.random() * 10) + 1 + '%';

                    //console.log('display Left', document.getElementById("projectThumbImg"+ i).style.width, 'px');







                break;

                case('right') :

                    document.getElementById("projectThumbImg"+ i).style.width = Math.floor(Math.random() * (45 - 25) + 25)+ '%';
                    document.getElementById("projectThumbImg"+ i).style.marginLeft = Math.floor(Math.random() * 9) + 50 + '%';


                    //console.log('display Right', document.getElementById("projectThumbImg"+ i).style.width, 'px');







                break;

                

            } 


            if (projectList.projects[i].position == 'full') {


                disTop = disTop+ window.innerWidth/2 //550;

                //console.log('after full','+500');

            } else if (projectList.projects[i].position == 'right' || projectList.projects[i].position == 'left') {

                disTop = disTop+ window.innerWidth/5 //300;

                //console.log('after small','+200');


            }
                


            switch (projectList.projects[i].position) {
                case('full') :

                    afterFull = true;

                    //console.log('afterFull =', afterFull)



                break;

                case('left') :

                    afterFull = false;

                    //console.log('afterFull =', afterFull)





                break;

                case('right') :



                    afterFull = false;

                    //console.log('afterFull =', afterFull)





                break;

                

            } 




        }

    }



}

displayProjects();

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

            document.getElementById("projectbrowser").innerHTML += '<div class = "projimageslide" id = "projimageslide'+ imageList.images[i].pindex +'" ><div class = "projimagecontainer"><img class = "projimage" src = "./assets/projects/projectimages/'+ imageList.images[i].name +'" onclick = "clickProjImage('+ imageList.images[i].pindex +')"></div></div>';
            
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







 





