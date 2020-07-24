// // HERO

// let heroHeading = document.querySelector('.hero__');
// heroHeading.classList.add('hero__heading');
// heroHeading.innerText = "Waters of Nazareth x We Are your Friends x Phantom";




// ARTICLE

let mainContainer = document.createElement('article');
mainContainer.classList.add('main__container');
document.querySelector('main').appendChild(mainContainer);


// SUBHEADING
let subHeading = document.createElement('h2');
subHeading.innerText = 'Shows';
subHeading.classList.add('subHeading');
document.querySelector('main').appendChild(subHeading);

// SECTIONS

let sections = [];
let innnerboxes = [];


// for(let i = 0; i < 6; i++){
//     let container = document. createElement('section');
//     container.classList.add('container');
//     document.querySelector('main').appendChild(container);
//     sections.push(container);
// };

// sections[0].classList.add('container1');
// sections[1].classList.add('container2');
// sections[2].classList.add('container3');
// sections[3].classList.add('container4');
// sections[4].classList.add('container5');
// sections[5].classList.add('container6');

// FUNCTION 

const elemt = (element, className) =>{
    let elm = document.createElement(element);
    elm.classList.add(className);
    // document.querySelector(querySelector).appendChild(elm);
    return elm;
};

for (let i = 0; i < 6; i ++){
    let container = elemt('section', 'container');
    document.querySelector('main').appendChild(container);
    sections.push(elemt);
};

 
    

sections.forEach(section =>{
    let sect = document.querySelectorAll('.container');
    for(let i = 0; i < 3; i ++){
        let innerbox = elemt('div', 'container__inBox');
        innnerboxes.push(innerbox);
        sect[i].appendChild(innerbox);
    }
}) 
    

    
   




console.log(sections)
console.log(innnerboxes)









// let container1 = [];
// let container2 = [];
// let container3 = [];
// let container4 = [];
// let container5 = [];
// let container6 = [];

// // DIVS

// for (let i = 0; i < 3; i++){
//     elemt('div', 'container__text--1', '.container1');
//     container1.push(elemt);
// }

// for (let i = 0; i < 3; i++){
//     elemt('div', 'container__text--2', '.container2');
//     container2.push(elemt)
// }

// for (let i = 0; i < 3; i++){
//     elemt('div', 'container__text--3', '.container3');
//     container3.push(elemt)
// }

// for (let i = 0; i < 3; i++){
//     elemt('div', 'container__text--4', '.container4');
//     container4.push(elemt)
// }

// for (let i = 0; i < 3; i++){
//     elemt('div', 'container__text--5', '.container5');
//     container5.push(elemt)
// }

// for (let i = 0; i < 3; i++){
//     elemt('div', 'container__text--6', '.container6');
//     container6.push(elemt)
// }

// // TEXT

// //  CONTAINNER 1
// let titleDate1 = elemt('h2', 'container__title1-1', '.container1 > :nth-child(1)');
// let titleP1 = elemt('p', 'container__parag1-1', '.container1 > :nth-child(1)');

// let titleVenue1 = elemt('h2', 'container__title1-2', '.container1 > :nth-child(2)');
// let venueP1 = elemt('p', 'container__parag1-2', '.container1 > :nth-child(2)');

// let titleLocation1 = elemt('h2', 'container__title1-3', '.container1 > :nth-child(3)');
// let location1 = elemt('p', 'container__parag1-3', '.container1 > :nth-child(3)');

// let btn1 = elemt('button',  'btn', '.container1');

// // CONTAINER 2 
// let titleDate2 = elemt('h2', 'container__title2-1', '.container2 > :nth-child(1)');
// let titleP2 = elemt('p', 'container__parag2-1', '.container2 > :nth-child(1)');

// let titleVenue2 = elemt('h2', 'container__title2-2', '.container2 > :nth-child(2)');
// let venueP2 = elemt('p', 'container__parag2-2', '.container2 > :nth-child(2)');

// let titleLocation2 = elemt('h2', 'container__title2-3', '.container2 > :nth-child(3)');
// let location2 = elemt('p', 'container__parag2-3', '.container2 > :nth-child(3)');

// let btn2 = elemt('button',  'btn', '.container2')

// // CONTAINER 3 
// let titleDate3 = elemt('h2', 'container__title3-1', '.container3 > :nth-child(1)');
// let titleP3 = elemt('p', 'container__parag3-1', '.container3 > :nth-child(1)');

// let titleVenue3 = elemt('h2', 'container__title3-2', '.container3 > :nth-child(2)');
// let venueP3 = elemt('p', 'container__parag3-2', '.container3 > :nth-child(2)');

// let titleLocation3 = elemt('h2', 'container__title3-3', '.container3 > :nth-child(3)');
// let location3 = elemt('p', 'container__parag3-3', '.container3 > :nth-child(3)');

// let btn3 = elemt('button',  'btn', '.container3')

// // CONTAINER 4
// let titleDate4 = elemt('h2', 'container__title4-1', '.container4 > :nth-child(1)');
// let titleP4 = elemt('p', 'container__parag4-1', '.container4 > :nth-child(1)');

// let titleVenue4 = elemt('h2', 'container__title4-2', '.container4 > :nth-child(2)');
// let venueP4 = elemt('p', 'container__parag4-2', '.container4 > :nth-child(2)');

// let titleLocation4 = elemt('h2', 'container__title4-3', '.container4 > :nth-child(3)');
// let location4 = elemt('p', 'container__parag4-3', '.container4 > :nth-child(3)');

// let btn4 = elemt('button',  'btn', '.container4')

// // CONTAINER 5
// let titleDate5 = elemt('h2', 'container__title5-1', '.container5 > :nth-child(1)');
// let titleP5 = elemt('p', 'container__parag5-1', '.container5 > :nth-child(1)');

// let titleVenue5 = elemt('h2', 'container__title5-2', '.container5 > :nth-child(2)');
// let venueP5 = elemt('p', 'container__parag5-2', '.container5 > :nth-child(2)');

// let titleLocation5 = elemt('h2', 'container__title5-3', '.container5 > :nth-child(3)');
// let location5 = elemt('p', 'container__parag5-3', '.container5 > :nth-child(3)');

// let btn5 = elemt('button',  'btn', '.container5')

// // CONTAINER 6
// let titleDate6 = elemt('h2', 'container__title6-1', '.container6 > :nth-child(1)');
// let titleP6 = elemt('p', 'container__parag6-1', '.container6 > :nth-child(1)');

// let titleVenue6 = elemt('h2', 'container__title6-2', '.container6 > :nth-child(2)');
// let venueP6 = elemt('p', 'container__parag6-2', '.container6 > :nth-child(2)');

// let titleLocation6 = elemt('h2', 'container__title6-3', '.container6 > :nth-child(3)');
// let location6 = elemt('p', 'container__parag6-3', '.container6 > :nth-child(3)');

// let btn6 = elemt('button',  'btn', '.container6')

// // INNER TEXT

// // DATE
// let titleDate00 = document.querySelectorAll('.container > :nth-child(1) h2');
// titleDate00.forEach( item => {
//     item.innerText = 'DATE';

//     titleP1.innerText= 'Mon Dec 17 2018';
//     titleP2.innerText= 'Tue Jul 18 2019';
//     titleP3.innerText= 'Fri Jul 22 2019';
//     titleP4.innerText= 'Sat Aug 12 2019';
//     titleP5.innerText= 'Fri Sep 05 2019';
//     titleP6.innerText= 'Wed Aug 11 2019';
// });

// // VENUe
// let venue00 = document.querySelectorAll('.container > :nth-child(2) h2');
// venue00.forEach( item => {
//     item.innerText = 'VENUE';

//     venueP1.innerText = 'Ronald Lane';
//     venueP2.innerText = 'Pier 3 East';
//     venueP3.innerText = 'View Loungue';
//     venueP4.innerText = 'Hyatt Agency';
//     venueP5.innerText = 'Moscow Center';
//     venueP6.innerText = 'Pres Club';
// });

// // LOCATION
// let locationTitle00 = document.querySelectorAll('.container > :nth-child(3) h2');
// locationTitle00.forEach( item => {
//     item.innerText = 'LOCATION';
// });

// let locationText = document.querySelectorAll('.container > :nth-child(3) p');
// locationText.forEach( item => {
//     item.innerText = 'San Francisco, CA';
// });

// // BUTTON

// let btn00 = document.querySelectorAll('.btn');
//     btn00.forEach( item =>{
//         item.innerText = 'BUY TICKETS';
//     }) 




// console.log(btn00)
// console.log(container2)
// console.log(container3)
// console.log(container4)
// console.log(container5)
// console.log(container6)







// DIVS
// let divsArr =[];

// let innercontainer = [];

// sections.forEach( sectionElem => {
//     for(let i = 0; i < 3; i++){
//         let div = document.createElement('div');
//         div.classList.add('container__inner');
//         innercontainer.push(div);
//     }
// });

// while (innercontainer.length > 0){
//     let elemt = innercontainer.splice(0,3);
//     divsArr.push(elemt);
// };

// document.querySelector('.container1').appendChild(divsArr[0][0]);
// document.querySelector('.container1').appendChild(divsArr[0][1]);
// document.querySelector('.container1').appendChild(divsArr[0][2]);

// document.querySelector('.container2').appendChild(divsArr[1][0]);
// document.querySelector('.container2').appendChild(divsArr[1][1]);
// document.querySelector('.container2').appendChild(divsArr[1][2]);

// document.querySelector('.container3').appendChild(divsArr[2][0]);
// document.querySelector('.container3').appendChild(divsArr[2][1]);
// document.querySelector('.container3').appendChild(divsArr[2][2]);

// document.querySelector('.container4').appendChild(divsArr[3][0]);
// document.querySelector('.container4').appendChild(divsArr[3][1]);
// document.querySelector('.container4').appendChild(divsArr[3][2]);

// document.querySelector('.container5').appendChild(divsArr[4][0]);
// document.querySelector('.container5').appendChild(divsArr[4][1]);
// document.querySelector('.container5').appendChild(divsArr[4][2]);

// document.querySelector('.container6').appendChild(divsArr[5][0]);
// document.querySelector('.container6').appendChild(divsArr[5][1]);
// document.querySelector('.container6').appendChild(divsArr[5][2]);

// TEXT

// let textContainer = document.querySelector('.container');

// let text1 = divsArr.map( container =>{
//     let title = document.createElement('h2');
//     title.classList.add('container__title');
//     return title;
// });

// text1.forEach( elem => {
//     textContainer.appendChild(elem);
// });


// console.log(textContainer)
// console.log(innercontainer)
// console.log(divsArr)
// console.log(sections)
// console.log(text1)




















// // ARTICLE
//     let mainContainer = document.createElement('article');
//     mainContainer.classList.add('main__container');
//     document.querySelector('main').appendChild(mainContainer);

// // section
//     let container = document.createElement('section');
//     container.classList.add('main__innerbox');
//     document.querySelector('.main__container').appendChild(container);

// // inside divs
//     let divs = document.createElement('div');
//     divs.classList.add('innerb__inner'); 
//     document.querySelector('.main__innerbox').appendChild(divs);
   
    
// // text
//     let title = document.createElement('h3');
//     title.innerText = 'DATE';
//     title.classList.add('innerb__title');
//     document.querySelector('.innerb__inner').appendChild(title);

//     let p = document.createElement('p');
//     p.innerText = 'im here';
//     p.classList.add('paragraph');
//     document.querySelector('.innerb__inner').appendChild(p);

// // div clonnes
//     let divs2 = divs.cloneNode(true);
//     document.querySelector('.main__innerbox').appendChild(divs2);
//     divs2.classList.add('innerbox--mod2');
//     let venue = document.querySelector('.innerbox--mod2 h3');
//     venue.innerText = 'VENUE';
    
//     let divs3 = divs.cloneNode(true);
//     document.querySelector('.main__innerbox').appendChild(divs3);
//     divs3.classList.add('innerbox--mod3');
//     let local = document.querySelector('.innerbox--mod3 h3');
//     local.innerText = 'LOCATION';

// //  button  

//     let btn = document.createElement('button');
//     btn.classList.add('button--buy');
//     btn.innerText = 'BUY TICKETS';
//     document.querySelector('.main__innerbox').appendChild(btn);

// // clonnes containers

//     let container2 = container.cloneNode(true);
//     document.querySelector('.main__container').appendChild(container2);
//     container2.classList.add('main__inner2');

//     let container3 = container.cloneNode(true);
//     document.querySelector('.main__container').appendChild(container3);
//     container3.classList.add('main__inner3');

//     let container4 = container.cloneNode(true);
//     document.querySelector('.main__container').appendChild(container4);
//     container4.classList.add('main__inner4');

//     let container5 = container.cloneNode(true);
//     document.querySelector('.main__container').appendChild(container5);
//     container5.classList.add('main__inner5');

//     let container6 = container.cloneNode(true);
//     document.querySelector('.main__container').appendChild(container6);
//     container6.classList.add('main__inner6');


//     // variables

//     let locationParag =  document.querySelectorAll('.innerbox--mod3 .paragraph');
//     console.log(locationParag);

//     locationParag.forEach( p =>{
//         p.innerText = 'San Francisco, CA'
//     });




    
// console.log(container2)
// console.log(container3)
// console.log(container4)
// console.log(container5)
// console.log(container6)

// console.log(textBox2)
