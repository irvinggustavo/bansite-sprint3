
//  API URL & API KEY

const springAPI = 'https://project-1-api.herokuapp.com/'
const APIkey = "f1c2f231-38ad-4535-b891-a0a834c0b188"

/* HELPER FUNCTION
create  an element */
const elemt = (element, className) =>{
    let elm = document.createElement(element);
    elm.classList.add(className);
    return elm;
};

/* store value for future use */
let sections = [];
let innnerboxes = [];
let titles = [];
let paragraphs = [];
let btns = [];

/* ARTICLE
create a father container for comments */
let mainContainer = elemt('article', 'mainContainer');
document.querySelector('main').appendChild(mainContainer);

/* SUBHEADING */
let subHeading = document.createElement('h1');
subHeading.innerText = 'Shows';
subHeading.classList.add('subHeading');
mainContainer.appendChild(subHeading);


/* CONTAINERS
Run a for loop creating 6 containers and append them to main container(article) 
& push every contatiner to the sections array  for future use */
for (let i = 0; i < 6; i ++){
    let container = elemt('section', 'container');
    mainContainer.appendChild(container);
    sections.push(container);
};


/* INNER CONTAINERS 
Declare a forEach method on the sections array, iterating 3 times on every index,
 creating an element <div> & <btn> on every iteration & appending every one of them to
a container in groups.
*/
sections.forEach(section =>{
    for(let i = 0; i < 3; i ++){
        let innerbox = elemt('div', 'container__inBox');
        innnerboxes.push(innerbox);
        section.appendChild(innerbox);
    };
    let btn = elemt('button', 'section__btn');
    btns.push(btn);
    section.appendChild(btn);
    btn.innerText = 'BUY TICKETS'
}) 


/*  TITLES AND TEXT
 Declare a forEach method on the innnerboxes array, creating  elements <h2> & <p> on every
iteration & appending every one of them to an index (class = "container__inBox")*/
innnerboxes.forEach(box =>{
    let title = elemt('h2', 'title');
    titles.push(title);
    box.appendChild(title);

    let p = elemt('p', 'paragraph');
    paragraphs.push(p);
    box.appendChild(p);   
});

/* Hope you like this one Josh */
    let hidden = titles.slice(3)
    hidden.forEach(i =>{
    i.classList.add('hidden');
    })



/* Using a <querysellectorall> take a node list and save on variable to declare 
a forEach method on it, adding static text to and Index on every iteration. */
let dateTitles = document.querySelectorAll('.container > :nth-child(1) h2');
dateTitles.forEach( title =>{
title.innerText = 'DATE';
});

let venuesTitles = document.querySelectorAll('.container > :nth-child(2) h2');
venuesTitles.forEach( title =>{
title.innerText = 'VENUE';
});
    
let locationTitles = document.querySelectorAll('.container > :nth-child(3) h2');
locationTitles.forEach( title =>{
title.innerText = 'LOCATION';
});


/* INNER TEXT
 Using a <querysellectorall> take a node list and save on variable  for future use*/
let datesTi = document.querySelectorAll ('.container > :nth-child(1) p');
let venues  = document.querySelectorAll ('.container > :nth-child(2) p');
let locations = document.querySelectorAll ('.container > :nth-child(3) p')

/* Make a GET request promise to the API retrieving data from "showdates" section.
Run a loop using the arrays above adding dynamic data from the API Object to every index. */
axios
    .get(`${springAPI}showdates/?api_key=${APIkey}`)
    .then (showsResults =>{
    
        for (let i = 0; i < datesTi.length; i++){
            datesTi[i].innerText = showsResults.data[i].date
        }

        for (let i = 0; i < venues.length; i++){
            venues[i].innerText = showsResults.data[i].place      
        }

        for (let i = 0; i < locations.length; i++){
            locations[i].innerText = showsResults.data[i].location
        }
    })
     /* displays a message in the console and  the web page in case of an error */
    .catch(err =>{
        console.log('Oops, we F@$$%#% up!', err)
        let error = document.createElement('h1');
        error.classList.add('error');
        mainContainer.appendChild(error);
        error.innerText = "we are very sorry for the inconvenience, new Developer!!!!!"
    })



