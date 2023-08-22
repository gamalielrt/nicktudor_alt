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

projectList.newProject('001',
                    '10/08/23',
                    'Martins Lane',
                    'martinslane_thumb.jpg',
                    'House on Martins Lane <p> Following the erection of an insulated timber frame, I completed the carpentry for all other timber elements of this new build house. The larch cladding required 26,000 nails, each fixed through a pilot hole. I designed and made the canopy and pergola that provides essential solar shade, using complex traditional joints in English grown green douglas fir to demonstrate the discrete level of craft in the building that is otherwise hidden, and to add some visual interest to an otherwise straightforward construction. Other more common items were also completed; door linings, sills, internal stud walls and bathrooms. ',
                    'Architecture',
                    'full'
);

projectList.newProject('002',
                    '10/08/23',
                    'Adlard',
                    'adlard_thumb.jpg',
                    'House on Martins Lane <p> Following the erection of an insulated timber frame, I completed the carpentry for all other timber elements of this new build house. The larch cladding required 26,000 nails, each fixed through a pilot hole. I designed and made the canopy and pergola that provides essential solar shade, using complex traditional joints in English grown green douglas fir to demonstrate the discrete level of craft in the building that is otherwise hidden, and to add some visual interest to an otherwise straightforward construction. Other more common items were also completed; door linings, sills, internal stud walls and bathrooms. ',
                    'Interior',
                    'left'
);

projectList.newProject('003',
                    '10/08/23',
                    'Brightside Cabinets',
                    'brightsidecabinets_thumb.jpg',
                    'House on Martins Lane <p> Following the erection of an insulated timber frame, I completed the carpentry for all other timber elements of this new build house. The larch cladding required 26,000 nails, each fixed through a pilot hole. I designed and made the canopy and pergola that provides essential solar shade, using complex traditional joints in English grown green douglas fir to demonstrate the discrete level of craft in the building that is otherwise hidden, and to add some visual interest to an otherwise straightforward construction. Other more common items were also completed; door linings, sills, internal stud walls and bathrooms. ',
                    'Interior',
                    'right'
);

projectList.newProject('004',
                    '10/08/23',
                    'French Curve',
                    'frenchcurve_thumb.jpg',
                    'House on Martins Lane <p> Following the erection of an insulated timber frame, I completed the carpentry for all other timber elements of this new build house. The larch cladding required 26,000 nails, each fixed through a pilot hole. I designed and made the canopy and pergola that provides essential solar shade, using complex traditional joints in English grown green douglas fir to demonstrate the discrete level of craft in the building that is otherwise hidden, and to add some visual interest to an otherwise straightforward construction. Other more common items were also completed; door linings, sills, internal stud walls and bathrooms. ',
                    'Furniture',
                    'left'
);

projectList.newProject('005',
                    '10/08/23',
                    'House of Voltaire',
                    'houseofvoltaire_thumb.jpg',
                    'House on Martins Lane <p> Following the erection of an insulated timber frame, I completed the carpentry for all other timber elements of this new build house. The larch cladding required 26,000 nails, each fixed through a pilot hole. I designed and made the canopy and pergola that provides essential solar shade, using complex traditional joints in English grown green douglas fir to demonstrate the discrete level of craft in the building that is otherwise hidden, and to add some visual interest to an otherwise straightforward construction. Other more common items were also completed; door linings, sills, internal stud walls and bathrooms. ',
                    'Interior',
                    'full'
);

projectList.newProject('006',
                    '10/08/23',
                    'Brightside Wardrobe',
                    'brightsidewardrobe_thumb.jpg',
                    'House on Martins Lane <p> Following the erection of an insulated timber frame, I completed the carpentry for all other timber elements of this new build house. The larch cladding required 26,000 nails, each fixed through a pilot hole. I designed and made the canopy and pergola that provides essential solar shade, using complex traditional joints in English grown green douglas fir to demonstrate the discrete level of craft in the building that is otherwise hidden, and to add some visual interest to an otherwise straightforward construction. Other more common items were also completed; door linings, sills, internal stud walls and bathrooms. ',
                    'Furniture',
                    'right'
);

projectList.newProject('007',
                    '10/08/23',
                    'Mike Show',
                    'mikeshow_thumb.jpg',
                    'House on Martins Lane <p> Following the erection of an insulated timber frame, I completed the carpentry for all other timber elements of this new build house. The larch cladding required 26,000 nails, each fixed through a pilot hole. I designed and made the canopy and pergola that provides essential solar shade, using complex traditional joints in English grown green douglas fir to demonstrate the discrete level of craft in the building that is otherwise hidden, and to add some visual interest to an otherwise straightforward construction. Other more common items were also completed; door linings, sills, internal stud walls and bathrooms. ',
                    'Art',
                    'left'
);

projectList.newProject('008',
                    '10/08/23',
                    'Studio Voltaire',
                    'studiovoltaire_thumb.jpg',
                    'House on Martins Lane <p> Following the erection of an insulated timber frame, I completed the carpentry for all other timber elements of this new build house. The larch cladding required 26,000 nails, each fixed through a pilot hole. I designed and made the canopy and pergola that provides essential solar shade, using complex traditional joints in English grown green douglas fir to demonstrate the discrete level of craft in the building that is otherwise hidden, and to add some visual interest to an otherwise straightforward construction. Other more common items were also completed; door linings, sills, internal stud walls and bathrooms. ',
                    'Architecture',
                    'right'
);


function displayProjects() {

    if (deviceType == "computer" || window.innerWidth > 550) {
        console.log('device is computer');

        projectscontainer.style.width = '92%';
        projectscontainer.style.margin = 'auto';


    }





    for (let i=0; i<=7; i++ ) {
        
        document.getElementById("projectscontainer").innerHTML += '<div class = "project" id ="project'+ i +'" ><img class ="projectThumbImg" id = "projectThumbImg'+ i +'" src ="assets/projects/projectthumbnails/'+ projectList.projects[i].image +'" ></div>';

        if (deviceType.includes("computer") || window.innerWidth > 550) {

            document.getElementById("projectscontainer").innerHTML += '<br>';


            switch (projectList.projects[i].position) {
                case('full') :

                    document.getElementById("projectThumbImg"+ i).style.width = '80%';
                    document.getElementById("projectThumbImg"+ i).style.marginLeft = Math.floor(Math.random() * 15) + 5 + '%';



                break;

                case('left') :
                    document.getElementById("projectThumbImg"+ i).style.width = '50%';
                    document.getElementById("projectThumbImg"+ i).style.marginLeft = Math.floor(Math.random() * 10) + 1 + '%';



                break;

                case('right') :

                    document.getElementById("projectThumbImg"+ i).style.width = '50%';
                    document.getElementById("projectThumbImg"+ i).style.marginLeft = Math.floor(Math.random() * 30) + 20 + '%';



                break;

            } 
        }

    }


}

displayProjects();





