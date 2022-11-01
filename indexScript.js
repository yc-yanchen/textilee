// Mobile gallery
// When webpage reaches 1150px, media query will remove the left and right image in the gallery section of index
// Two arrows will take place of the removed images
// User clicks on either arrow to change the center image

// Creating namespace
const app = {};

// Creating the objects which the script will interact with
app.arrowL = document.querySelector('.leftArrow');
app.arrowR = document.querySelector('.rightArrow');
app.imgElL = document.querySelector('#imgL');
app.imgElM = document.querySelector('#imgM');
app.imgElR = document.querySelector('#imgR');

// Creating an array to store the image source which will be swapped when the user clicks on the arrow
app.imgSource = [
    {source: './textileeAssets/galleryImageOne.jpg',
    alt: 'Rolls of yellow, blue, and beige yarn balls surrounding a blue roll of yarn.'},
    {source: './textileeAssets/galleryImageTwo.jpg',
    alt: 'A pair of scissors and a roll of string laid out on a soft light brown fabric overlayed by measuring tape.'},
    {source: './textileeAssets/galleryImageThree.jpg',
    alt: 'Large wooden shelf in a workshop containing rolls of different types of fabrics of different colors and designs.'}
    
]

// A counter will be needed to keep track of where the user is as they click through

app.counter = 1;
app.imgIndex = 0;
app.imgIndexL = 0;
app.imgIndexR = 0;


// Create a function which changes the image through an index
app.imgChange = function() {
    app.sideImg();
    app.imgElL.src = app.imgSource[app.imgIndexL].source;
    app.imgElM.src = app.imgSource[app.imgIndex].source;
    app.imgElR.src = app.imgSource[app.imgIndexR].source;
}
// Creating a function to attach to the right arrow which adds one to app.counter, then calculates the absolute value of the counter divided by the length of the image array.
app.forward = function() {
    app.counter++;
    app.imgIndex = Math.abs(app.counter % app.imgSource.length);
}

// Attach an event listener to the right arrow
app.arrowR.addEventListener('click', function() {
    app.forward();
    app.imgChange();
    // console.log(`counter ${app.counter}`);
    // console.log(`imgIndex ${app.imgIndex}`);
})

// Repeat for the left arrow
app.backward = function() {
    app.counter--;
    app.imgIndex = Math.abs(app.counter % app.imgSource.length);
    
}

// Attach an event listenener to the left arrow
app.arrowL.addEventListener('click', function() {
    app.backward();
    app.imgChange();
    // console.log(`counter ${app.counter}`);
    // console.log(`imgIndex ${app.imgIndex}`);
})

// Function to handle the changing of the side images when they are not visible so that if they become visible again, images will not be shown twice.
app.sideImg = function() {
    app.imgIndexR = Math.abs((app.counter - 1) % app.imgSource.length);
    app.imgIndexL = Math.abs((app.counter + 1) % app.imgSource.length);
}
    