 ////////   IMAGES


 class Image {
    constructor( name, project, pindex) {
        this._name = name;
        this._project = project;
        this._pindex = pindex;

    }
    get name() {
        return this._name;
    }
    get project() {
        return this._project;
    }
    get pindex() {
        return this._pindex;
    }


}

class Images {
    constructor() {
        this.images = [];
    }

    newImage ( name, project, pindex) {
        let a = new Image(name, project, pindex);
        this.images.push(a);
        return a;
    }

    get numberOfImages () {
        return this.images.length;
    }
}

imageList = new Images();


//imageList.newImage('0',
//                    '0_1.jpg',
//                    '0'
//);





function initImages () {



    ////// LOOP TO INIT IMAGES

    for ( let i=0; i<projectList.numberOfProjects; i++) {

        for ( let ii=0; ii<projectList.projects[i].numofimages; ii++ ) {

            let x = ii+1;
    
            imageList.newImage(i+'_' + x +'.jpg', i, ii);
        
        
        }
    


    }

        ////// UNUSED CODE TO INIT IMAGES


    /*

    //0
    
    for ( let i=0; i<5; i++ ) {

        let x = i+1;

        imageList.newImage('0_' + x +'.jpg', '0', i);
    
    
    }

    //1

    for ( let i=0; i<7; i++ ) {

        let x = i+1;


        imageList.newImage('1_' + x +'.jpg', '1', i);
    
    
    }

    //2

    for ( let i=0; i<5; i++ ) {

        let x = i+1;


        imageList.newImage('2_' + x +'.jpg', '2', i);
    
    
    }

    //3

    for ( let i=0; i<5; i++ ) {

        let x = i+1;


        imageList.newImage('3_' + x +'.jpg', '3', i);
    
    
    }

    //4

    for ( let i=0; i<5; i++ ) {

        let x = i+1;


        imageList.newImage('4_' + x +'.jpg', '4', i);
    
    
    }

    //5

    for ( let i=0; i<4; i++ ) {

        let x = i+1;


        imageList.newImage('5_' + x +'.jpg', '5', i);
    
    
    }

    //6

    for ( let i=0; i<3; i++ ) {

        let x = i+1;


        imageList.newImage('6_' + x +'.jpg', '6', i);
    
    
    }

    //7

    for ( let i=0; i<6; i++ ) {

        let x = i+1;


        imageList.newImage('7_' + x +'.jpg', '7', i);
    
    
    }

    //8

    for ( let i=0; i<7; i++ ) {

        let x = i+1;


        imageList.newImage('8_' + x +'.jpg', '8', i);
    
    
    }

    //9

    for ( let i=0; i<3; i++ ) {

        let x = i+1;


        imageList.newImage('9_' + x +'.jpg', '9', i);
    
    
    }

    //10

    for ( let i=0; i<2; i++ ) {

        let x = i+1;


        imageList.newImage('10_' + x +'.jpg', '10', i);
    
    
    }

    //11

    for ( let i=0; i<2; i++ ) {

        let x = i+1;


        imageList.newImage('11_' + x +'.jpg', '11', i);
    
    
    }

    //12

    for ( let i=0; i<9; i++ ) {

        let x = i+1;


        imageList.newImage('12_' + x +'.jpg', '12', i);
    
    
    }

    //13

    for ( let i=0; i<8; i++ ) {

        let x = i+1;


        imageList.newImage('13_' + x +'.jpg', '13', i);
    
    
    }

    

*/






}

initImages();

//console.log(imageList)

