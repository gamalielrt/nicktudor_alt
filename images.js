 ////////   IMAGES


 class Image {
    constructor( name, project) {
        this._name = name;
        this._project = project;

    }
    get name() {
        return this._name;
    }
    get project() {
        return this._project;
    }

}

class Images {
    constructor() {
        this.images = [];
    }

    newImage ( name, project) {
        let a = new Image(name, project);
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

        imageList.newImage('0_' + i +'.jpg', '0');
    
    
    }

    for ( let i=1; i<6; i++ ) {

        imageList.newImage('1_' + i +'.jpg', '1');
    
    
    }

    for ( let i=1; i<6; i++ ) {

        imageList.newImage('2_' + i +'.jpg', '2');
    
    
    }

    for ( let i=1; i<6; i++ ) {

        imageList.newImage('3_' + i +'.jpg', '3');
    
    
    }

    for ( let i=1; i<5; i++ ) {

        imageList.newImage('4_' + i +'.jpg', '4');
    
    
    }

    for ( let i=1; i<4; i++ ) {

        imageList.newImage('5_' + i +'.jpg', '5');
    
    
    }

    for ( let i=1; i<5; i++ ) {

        imageList.newImage('6_' + i +'.jpg', '6');
    
    
    }

    for ( let i=1; i<7; i++ ) {

        imageList.newImage('7_' + i +'.jpg', '7');
    
    
    }


}

initImages();

console.log(imageList)

