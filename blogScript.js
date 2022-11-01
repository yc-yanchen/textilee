// Use Javascript to add additional comments to the blog page
// Use eventListener to detect submission in form
// Use preventDefault to prevent refresh of the page
// Store user data in a variable along with time
// Use innerHTML to create Comment structure
// Use textContent to insert comment in comment structure

// Storing the input elements into javascript variables
    const userNameEl = document.querySelector('#userName');
    const userEmailEl = document.querySelector('#userEmail');
    const userCommentsEl = document.querySelector('textarea');
    const commentContainerEl = document.querySelector('.commentContainer')

// Creating a variable to store our form DOM and checking with console log
const formEl = document.querySelector('form');
console.log(formEl);

// Adding an eventListener to the formEl for user submission
const commentSubmit = formEl.addEventListener('submit', function(event) {
    // preventing the webpage from refreshing
    event.preventDefault();
    // checking with console log for the event object created by the eventListener
    console.log(event);
    const inputName = userNameEl.value;
    const inputEmail = userEmailEl.value;
    const inputComments = userCommentsEl.value;


    // checking if time could be retrieved
    // storing date in a variable
    const userDate = new Date;
    const userMonth = userDate.getMonth();
    const userDay = userDate.getDate();
    const userYear = userDate.getFullYear();

    // Using array to convert month
    const monthArray = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const userPostInfo = `${monthArray[userMonth]} ${userDay}th, ${userYear} by ${inputName}`
    const userCommentPost = `${inputComments}`

    if (inputName && inputComments) {
        console.log('ok')
        // Creating h6 to hold date and username
        const h6El = document.createElement('h6');
        h6El.className ='tDate cDarkSlateBlue'
        h6El.textContent = userPostInfo;
        console.log(h6El)

        const pEl = document.createElement('p');
        pEl.className ='tBody cBlack'
        pEl.textContent = userCommentPost;
        console.log(pEl);

        // creating the html structure of the comment section
        const articleEl = document.createElement('article');
        articleEl.className = 'userComments'

        const userLetter = document.createElement('p')
        userLetter.textContent = inputName.charAt(0)

        const userImage = document.createElement('div')
        userImage.className = 'userImage'

        const blogTextContainerEl = document.createElement('div')
        blogTextContainerEl.className = 'blogTextcontainer'


        // putting all the elements together
        blogTextContainerEl.appendChild(h6El)
        blogTextContainerEl.appendChild(pEl)
        userImage.appendChild(userLetter)
        articleEl.appendChild(userImage)
        articleEl.appendChild(blogTextContainerEl)
        commentContainerEl.appendChild(articleEl)

        
        userNameEl.value = '';
        userEmailEl.value = '';
        userCommentsEl.value = '';
    }

})
