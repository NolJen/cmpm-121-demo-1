import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My amazing game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

//step 1 create button and emoji
const button = document.createElement("button");
button.innerHTML = "👾 click me";
button.type = "button";
button.name = "funButton";
button.title = "Click me for fun!";

app.append(button);
//refrenced https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

// Create a div to report on the value of the counter
const counterDiv = document.createElement("div");
let counter: number = 0; //You should probably have some like like “let counter: number = 0;” in your program somewhere.
counterDiv.innerHTML = `${counter} purple people eaters;`
app.append(counterDiv);

// Add an event listener to the button to increment the counter
button.addEventListener("click", () => {
  counter++;
  counterDiv.innerHTML = `${counter} purple people eaters;`
});
// refrenced https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals