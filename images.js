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
    
    for ( let i=1; i<6; i++ ) {

        imageList.newImage('0_' + i +'.jpg', '0', i);
    
    
    }

    for ( let i=1; i<6; i++ ) {

        imageList.newImage('1_' + i +'.jpg', '1', i);
    
    
    }

    for ( let i=1; i<6; i++ ) {

        imageList.newImage('2_' + i +'.jpg', '2', i);
    
    
    }

    for ( let i=1; i<6; i++ ) {

        imageList.newImage('3_' + i +'.jpg', '3', i);
    
    
    }

    for ( let i=1; i<5; i++ ) {

        imageList.newImage('4_' + i +'.jpg', '4', i);
    
    
    }

    for ( let i=1; i<4; i++ ) {

        imageList.newImage('5_' + i +'.jpg', '5', i);
    
    
    }

    for ( let i=1; i<5; i++ ) {

        imageList.newImage('6_' + i +'.jpg', '6', i);
    
    
    }

    for ( let i=1; i<7; i++ ) {

        imageList.newImage('7_' + i +'.jpg', '7', i);
    
    
    }


}

initImages();

console.log(imageList)

