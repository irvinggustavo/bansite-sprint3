
//  HELPER FUNCTIONs 

const elemt = (element, className) =>{
    let elm = document.createElement(element);
    elm.classList.add(className);
    return elm;
};

const addContent = (dates, querySelector) =>{
    let datesParag = document.querySelectorAll(querySelector);
    for(let i = 0; i < datesParag.length; i++){
        datesParag[i].innerText = dates[i];
        console.log(datesParag)
    }
}

let sections = [];
let innnerboxes = [];
let titles = [];
let paragraphs = [];
let btns = [];

// ARTICLE

let mainContainer = elemt('article', 'mainContainer');
document.querySelector('main').appendChild(mainContainer);

// SUBHEADING
let subHeading = document.createElement('h1');
subHeading.innerText = 'Shows';
subHeading.classList.add('subHeading');
mainContainer.appendChild(subHeading);

// CONTAINERS

for (let i = 0; i < 6; i ++){
    let container = elemt('section', 'container');
    mainContainer.appendChild(container);
    sections.push(container);
    console.log(container);
};

// INNER CONTAINERS
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

//  TITLES AND TEXT


innnerboxes.forEach(box =>{
    let title = elemt('h2', 'title');
    titles.push(title);
    box.appendChild(title);

    let p = elemt('p', 'paragraph');
    paragraphs.push(p);
    box.appendChild(p);   
});

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
   
//  INNER TEXT

let dates =['Mon Dec 17 2018', 'Tue Jul 18 2019', 'Fri Jul 22 2019', 
'Sat Aug 12 2019','Fri Sep 05 2019', 'Wed Aug 11 2019'];

let venues =['Ronald Lane', 'Pier 3 East', 'View Loungue', 'Hyatt Agency', 'Moscow Center', 'Pres Club']

addContent(dates, '.container > :nth-child(1) p');
addContent(venues, '.container > :nth-child(2) p');

let place = document.querySelectorAll('.container > :nth-child(3) p');
 place.forEach( i => {
    i.innerText = 'San Francisco, CA';
});

let dateStyle = document.querySelectorAll('.container > :nth-child(1) p');
dateStyle.forEach( i => {
    i.classList.add('container__date'); 
});



