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

//step 2
// Create a div to report on the value of the counter
const counterDiv = document.createElement("div");
let counter: number = 0; //You should probably have some like like “let counter: number = 0;” in your program somewhere.
counterDiv.innerHTML = `${counter} purple people eaters`;
app.append(counterDiv);

// Add an event listener to the button to increment the counter
button.addEventListener("click", () => {
  counter++;
  counterDiv.innerHTML = `${counter} purple people eaters`;
});
// refrenced https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

//step 3
// Increment the counter every second using setInterval
//setInterval(() => {
//  counter++;
//  counterDiv.innerHTML = `${counter} purple people eaters`;
//}, 1000);
// refrenced https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval

// Create a purchasable upgrade button
const upgradeButton = document.createElement("button");
upgradeButton.innerHTML = "🩳 Buy Short Shorts";
upgradeButton.type = "button";
upgradeButton.disabled = true;
upgradeButton.title = "Costs 10 purple people eaters";
app.append(upgradeButton);

// Add an event listener to the upgrade button to increase the growth rate
let growthRate: number = 0;
upgradeButton.addEventListener("click", () => {
  if (counter >= 10) {
    counter -= 10;
    growthRate += 1;
    counterDiv.innerHTML = `${counter.toFixed(2)} purple people eaters`;
    upgradeButton.disabled = counter < 10;
  }
});


//step 4
// increase of 1 unit per second
let lastTimestamp: number | null = null;

function updateCounter(timestamp: number) {
  if (lastTimestamp !== null) {
    const elapsed = timestamp - lastTimestamp;
    counter += elapsed / 1000 * growthRate;
    counterDiv.innerHTML = `${counter.toFixed(2)} purple people eaters`;
    upgradeButton.disabled = counter < 10; 
  }
  lastTimestamp = timestamp;
  requestAnimationFrame(updateCounter);
}

requestAnimationFrame(updateCounter);
// sources https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
// https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
