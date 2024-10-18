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
  updateDisplay();
});
// refrenced https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

//step 3
// Purchasable upgrade buttons
const upgrades = [
  { name: "🩳 short shorts (0.1 units/sec)", cost: 10, rate: 0.1, count: 0 },
  {
    name: "🎸 rock and roll band (2.0 units/sec)",
    cost: 100,
    rate: 2.0,
    count: 0,
  },
  { name: "📺 TV show (50 units/sec)", cost: 1000, rate: 50, count: 0 },
];

let growthRate: number = 0;
const upgradeButtons: HTMLButtonElement[] = [];
upgrades.forEach((upgrade, index) => {
  const upgradeButton = document.createElement("button");
  upgradeButton.innerHTML = upgrade.name;
  upgradeButton.type = "button";
  upgradeButton.disabled = true;
  upgradeButton.title = `Costs ${upgrade.cost.toFixed(2)} purple people eaters`;
  app.append(upgradeButton);
  upgradeButtons.push(upgradeButton);

  upgradeButton.addEventListener("click", () => {
    if (counter >= upgrade.cost) {
      counter -= upgrade.cost;
      growthRate += upgrade.rate;
      upgrades[index].count++;
      upgrades[index].cost *= 1.15; // increase by a factor of 1.15 after each purchase
      updateDisplay();
    }
  });
});

//step 4
// Status displays
const growthRateDiv = document.createElement("div");
growthRateDiv.innerHTML = `Growth rate: ${growthRate.toFixed(2)} units/sec`;
app.append(growthRateDiv);

const upgradeCountsDiv = document.createElement("div");
upgradeCountsDiv.innerHTML = upgrades
  .map((upgrade) => `${upgrade.name}: ${upgrade.count} purchased`)
  .join("<br>");
app.append(upgradeCountsDiv);

// Function to update the display
function updateDisplay() {
  counterDiv.innerHTML = `${counter.toFixed(2)} purple people eaters`;
  growthRateDiv.innerHTML = `Growth rate: ${growthRate.toFixed(2)} units/sec`;
  upgradeCountsDiv.innerHTML = upgrades
    .map((upgrade) => `${upgrade.name}: ${upgrade.count} purchased`)
    .join("<br>");

  upgradeButtons.forEach((button, index) => {
    button.disabled = counter < upgrades[index].cost;
    button.title = `Costs ${upgrades[index].cost.toFixed(2)} purple people eaters`; // Step 8 (i did this a while back)
  });
}

// increase of 1 unit per second
let lastTimestamp: number | null = null;

function updateCounter(timestamp: number) {
  if (lastTimestamp !== null) {
    const elapsed = timestamp - lastTimestamp;
    counter += (elapsed / 1000) * growthRate;
    updateDisplay();
  }
  lastTimestamp = timestamp;
  requestAnimationFrame(updateCounter);
}

requestAnimationFrame(updateCounter);
// sources https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
// https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
// another soure: https://en.wikipedia.org/wiki/Exponential_growth
