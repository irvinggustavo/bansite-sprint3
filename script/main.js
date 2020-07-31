
//  API URL & API KEY

const springAPI = 'https://project-1-api.herokuapp.com/'
const APIkey = "f1c2f231-38ad-4535-b891-a0a834c0b188"


// create a father container for comments
let article = document.querySelector(".comments");

// create an Avatar
const placeHolderAvatar = (parent) =>{

    let avatar = document.createElement('div');
    parent.appendChild(avatar);
    avatar.classList.add('comments__avatar');
    avatar.classList.add('avatar--tranform')
    avatar.style.backgroundColor ='#AFAFAF';
    avatar.style.borderRadius ='50%';

    return avatar
};

/* Retrieve  data from the API (comments, name, timestamp) 
& create elements to display the data using a for loop and DOM manipulation. 
Use the reverse method  to change the position of the comments
in the page (newest at the top).
 */

axios
    .get(`${springAPI}comments/?api_key=${APIkey}`)
    .then(commentsResult => {

       let reverse = commentsResult.data.reverse()

        for (let i = 0; i < reverse.length; i++){
           

            let defaultContainer = document.createElement('div');
            defaultContainer.classList.add('comments__default');
            article.appendChild(defaultContainer);

            placeHolderAvatar(defaultContainer);

            let defaultinnercontainner = document.createElement('div');
            defaultinnercontainner.classList.add('comments__smallCont');
            defaultContainer.appendChild(defaultinnercontainner);

            let defaultinnerDiv = document.createElement('div');
            defaultinnerDiv.classList.add('comments__innerB');
            defaultinnercontainner.appendChild(defaultinnerDiv);

            let defaultUserName = document.createElement('h3');
            defaultUserName.classList.add('comments__userN');
            defaultinnerDiv.appendChild(defaultUserName);
            defaultUserName.innerText =commentsResult.data[i].name;

            let oldDate = document.createElement('h3');
            oldDate.classList.add('comments__date');
            defaultinnerDiv.appendChild(oldDate);
            oldDate.innerText = commentsResult.data[i].timestamp;


            let defaultP = document.createElement('p');
            defaultP.classList.add('comment');
            defaultinnercontainner.appendChild(defaultP);
            defaultP.innerText = commentsResult.data[i].comment;
        }
    // displays a message in the console and  the web page in case of an error
    }).catch(err =>{
        console.log('Oops, we F@$$%#% up!', err)
        let error = document.createElement('h1');
        error.classList.add('error');
        article.appendChild(error);
        error.innerText = "we are very sorry for the inconvenience, new Developer, WE F!$%#@% UP!!!!!"
    });
    


/* INPUT SECTION
Targets the HTML form using a query selector and an eventlistener 
to stop the page reload and save the user's DATA.
Create and Obj  to make a POST request to API.
Reset the form after sumit.
Reload the page to trigger  the the the GET request from API comments
and update the page.
*/

const form = document.getElementById('comments__form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let userN = event.target.username.value;
    let comment = event.target.comments.value;
   

    let newComment = {
        name: userN,
        comment: comment
    }

     let  request = axios.
                 post(`${springAPI}comments/?api_key=${APIkey}`,newComment )

    console.dir(request)

    form.reset()
    location.reload();
} );

