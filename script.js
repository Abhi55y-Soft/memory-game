const gameContainer = document.querySelector("#game");
let tempElt1 = "";
let tempElt2 = "";
let click = -1;
let matched = 0;


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  if (click < 1){
    tempElt1 = event.target;
    tempElt1.style.backgroundColor = tempElt1.getAttribute("class");
    click = 1;
  }
  else if (event.target !== tempElt1){
    tempElt2 = event.target;
    tempElt2.style.backgroundColor = tempElt2.getAttribute("class");
    if(tempElt1.getAttribute("class") !== tempElt2.getAttribute("class")){
      setTimeout(()=> {
        tempElt1.style.backgroundColor = null;
        tempElt2.style.backgroundColor = null;
      },500)
    }
    else{
      matched += 2;
      if (matched === 10){
        window.alert("You have found all the pair of colors");
      }
    }
    click = 0;
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
