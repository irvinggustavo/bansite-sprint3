//  API URL & API KEY

const springAPI = "https://project-1-api.herokuapp.com/";
const APIkey = "f1c2f231-38ad-4535-b891-a0a834c0b188";

/* create a father container for comments */
let article = document.querySelector(".comments");

/* create an Avatar */
const placeHolderAvatar = (parent) => {
  let avatar = document.createElement("div");
  parent.appendChild(avatar);
  avatar.classList.add("comments__avatar");
  avatar.classList.add("avatar--tranform");
  return avatar;
};

/* Displays a ERROR message on th epage */
const errorDiv = () => {
  let errorMsg = document.createElement("div");
  article.appendChild(errorMsg);
  document.querySelectorAll(".comments__default").forEach((item) => {
    errorMsg.appendChild(item);
  });
  errorMsg.innerText =
    "we are very sorry for the inconvenience, new Developer, we F%#$%&!!!!!";
};

/* Retrieve  data from the API (comments, name, timestamp) 
& create elements to display the data using a for loop and DOM manipulation. ∏
Use the reverse method  to change the position of the comments
in the page (newest at the top).
 */
function displayComment() {
  axios
    .get(`${springAPI}comments/?api_key=${APIkey}`)
    .then((commentsResult) => {
      let reverse = commentsResult.data.reverse();

      for (let i = 0; i < reverse.length; i++) {
        let defaultContainer = document.createElement("div");
        defaultContainer.classList.add("comments__default");
        article.appendChild(defaultContainer);

        placeHolderAvatar(defaultContainer);

        let defaultinnercontainner = document.createElement("div");
        defaultinnercontainner.classList.add("comments__smallCont");
        defaultContainer.appendChild(defaultinnercontainner);

        let defaultinnerDiv = document.createElement("div");
        defaultinnerDiv.classList.add("comments__innerB");
        defaultinnercontainner.appendChild(defaultinnerDiv);

        let defaultUserName = document.createElement("h3");
        defaultUserName.classList.add("comments__userN");
        defaultinnerDiv.appendChild(defaultUserName);
        defaultUserName.innerText = commentsResult.data[i].name;

        let oldDate = document.createElement("h3");
        oldDate.classList.add("comments__date");
        defaultinnerDiv.appendChild(oldDate);
        oldDate.innerText = commentsResult.data[i].timestamp;

        let defaultP = document.createElement("p");
        defaultP.classList.add("comment");
        defaultinnercontainner.appendChild(defaultP);
        defaultP.innerText = commentsResult.data[i].comment;
      }
    });
  }

displayComment();

/* INPUT SECTION
Targets the HTML form using a query selector and an eventlistener 
to stop the page reload and save the user's DATA.
Create and Obj  to make a POST request to API.
Reset the form after sumit.
Update the comments section usin HTTP methods  POst & GET.
*/

const form = document.getElementById("comments__form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userN = event.target.username.value;
  let comment = event.target.comments.value;

  let newComment = {
    name: userN,
    comment: comment,
  };

  axios
    .post(`${springAPI}comments/?api_key=${APIkey}`, newComment)
    .then((result) => {
      result;

      let megaContainer = document.createElement("div");
      article.appendChild(megaContainer);
      document.querySelectorAll(".comments__default").forEach((item) => {
        megaContainer.appendChild(item);
      });
      megaContainer.innerText = "";
    })
    .catch((err) => {
      console.log("Oops, we F@$$%#% up!", err);
      errorDiv();
    });

  axios
    .get(`${springAPI}comments/?api_key=${APIkey}`)
    .then(result => {
      result;
      displayComment();
    })

    .catch((err) => {
      console.log("Oops, we F@$$%#% up!", err);
      errorDiv();
    });

  form.reset();
});
