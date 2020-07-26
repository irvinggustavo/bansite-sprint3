
let = oldUserNames = ['Micheal Lyons', 'Gary Wong', 'Theodore Duncan'];
let = oldComments = 
["They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
"Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
"How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
];
let dates = ['12/18/2018', '12/12/2018', '11/15/2018']

let article = document.querySelector(".comments");

// HELPER FUCTION  AVATAR
const placeHolderAvatar = (parent) =>{

    let avatar = document.createElement('div');
    parent.appendChild(avatar);
    avatar.classList.add('comments__avatar');
    avatar.classList.add('avatar--tranform')
    avatar.style.backgroundColor ='#AFAFAF';
    avatar.style.borderRadius ='50%';

    return avatar
};

// HELPER FUCTION  DISPLAY DEFAULT

const displaydefault = (arr1, arr2, arr3 ) => {

    for(let i = 0; i < arr1.length; i++){

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
        defaultUserName.innerText = arr1[i];

        let oldDate = document.createElement('h3');
        oldDate.classList.add('comments__date');
        defaultinnerDiv.appendChild(oldDate);
        oldDate.innerText = arr3[i];

        let defaultP = document.createElement('p');
        defaultP.classList.add('comment');
        defaultinnercontainner.appendChild(defaultP);
        defaultP.innerText = arr2[i];

    }
}

displaydefault(oldUserNames, oldComments, dates);


// INPUT SECTION

const form = document.getElementById('comments__form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let userN = event.target.username.value;
    let comment = event.target.comments.value;

console.log(userN);
console.log(comment);

    let container = document.createElement('div');
    container.classList.add('comments__default');
    article.appendChild(container);

            // PLACEHOLDER ....   
    placeHolderAvatar(container);

    let innercontainner = document.createElement('div');
    innercontainner.classList.add('comments__smallCont');
    container.appendChild(innercontainner);

        
    let innerDiv = document.createElement('div');
    innerDiv.classList.add('comments__innerB');
    innercontainner.appendChild(innerDiv);

    let name = document.createElement('h3');
    name.classList.add('comments__userN')
    innerDiv.appendChild(name);
    name.innerText = userN;
    oldUserNames.push(name);

    let Date = document.createElement('h3');
    Date.classList.add('comments__date');
    innerDiv.appendChild(Date);

    let userComment = document.createElement('p');
    userComment.classList.add('comment')
    userComment.innerText = comment;
    innercontainner.appendChild(userComment);
    oldComments.push(userComment);

    form.reset()
} );

