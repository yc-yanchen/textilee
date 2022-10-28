// Use Javascript to add additional comments to the blog page
// Use eventListener to detect submission in form
// Use preventDefault to prevent refresh of the page
// Store user data in a variable along with time
// Use innerHTML to create Comment structure
// Use textContent to insert comment in comment structure

// Creating a variable to store our form DOM and checking with console log
const formEl = document.querySelector('form');
console.log(formEl);

// Adding an eventListener to the formEl for user submission
const commentSubmit = formEl.addEventListener('submit', function(event) {
    // preventing the webpage from refreshing
    event.preventDefault();
    // checking with console log for the event object created by the eventListener
    console.log(event);

    // checking if time could be retrieved
    // storing date in a variable
    const userDate = new Date;
    console.log(userDate)
    
})
// console.log(userForm);