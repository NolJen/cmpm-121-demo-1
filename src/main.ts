import "./style.css";

const gameContainer: HTMLDivElement = document.querySelector("#app")!;

const gameName = "👾 Purple People! 👾";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
gameContainer.append(header);

//create button and emoji
const purpleEaterButton = document.createElement("button");
purpleEaterButton.innerHTML = "👾 Purple People Eater";
purpleEaterButton.type = "button";
purpleEaterButton.name = "funButton";
purpleEaterButton.title = "Click me for fun!";

gameContainer.append(purpleEaterButton);

// Create a div to report on the value of the counter
const purpleEaterCounterDiv = document.createElement("div");
let purpleEaterCounter: number = 0;
purpleEaterCounterDiv.innerHTML = `${purpleEaterCounter} purple people eaters`;
gameContainer.append(purpleEaterCounterDiv);

purpleEaterButton.addEventListener("click", () => {
  purpleEaterCounter++;
  updateDisplay();
});

// Purchasable upgrade buttons
interface Item {
  name: string;
  cost: number;
  rate: number;
  count?: number;
  description?: string;
}

const availableItems: Item[] = [
  {
    name: "🩳 short shorts",
    cost: 10,
    rate: 0.1,
    count: 0,
    description: "I like short shorts",
  },
  {
    name: "🎸 rock and roll band",
    cost: 100,
    rate: 2,
    count: 0,
    description: "Sing a bop-bop aboopa-lopa, loom bam-boom",
  },
  {
    name: "📺 TV show",
    cost: 1000,
    rate: 50,
    count: 0,
    description: "He was blowing it out, a-really knockin' em dead",
  },
  {
    name: "🎺 Horn",
    cost: 5000,
    rate: 100,
    count: 0,
    description: "Playin' rock and roll music through the horn in his head",
  },
  {
    name: "🕊️ Pigeon-toed",
    cost: 10000,
    rate: 200,
    count: 0,
    description: "Pigeon-toed, undergrowed, flyin' purple people eater",
  },
];

let growthRate: number = 0;
const upgradeButtons: HTMLButtonElement[] = [];
availableItems.forEach((item, index) => {
  const upgradeButton = document.createElement("button");
  upgradeButton.innerHTML = `${item.name} (${item.rate} units/sec)`;
  upgradeButton.type = "button";
  upgradeButton.disabled = true;
  upgradeButton.title = `Costs ${item.cost.toFixed(2)} purple people eaters - ${item.description}`;
  gameContainer.append(upgradeButton);
  upgradeButtons.push(upgradeButton);

  upgradeButton.addEventListener("click", () => {
    if (purpleEaterCounter >= item.cost) {
      purpleEaterCounter -= item.cost;
      growthRate += item.rate;
      availableItems[index].count!++;
      availableItems[index].cost *= 1.15;
      updateDisplay();
    }
  });
});

// Status displays
const growthRateDiv = document.createElement("div");
growthRateDiv.innerHTML = `Growth rate: ${growthRate.toFixed(2)} units/sec`;
gameContainer.append(growthRateDiv);

const upgradeCountsDiv = document.createElement("div");
upgradeCountsDiv.innerHTML = availableItems
  .map((item) => `${item.name}: ${item.count} purchased`)
  .join("<br>");
gameContainer.append(upgradeCountsDiv);

// Function to update the display
function updateDisplay() {
  updateCounterDisplay();
  updateGrowthRateDisplay();
  updateUpgradeCountsDisplay();
  updateUpgradeButtons();
}

function updateCounterDisplay() {
  purpleEaterCounterDiv.innerHTML = `${purpleEaterCounter.toFixed(2)} purple people eaters`;
}

function updateGrowthRateDisplay() {
  growthRateDiv.innerHTML = `Growth rate: ${growthRate.toFixed(2)} units/sec`;
}

function updateUpgradeCountsDisplay() {
  upgradeCountsDiv.innerHTML = availableItems
    .map((item) => `${item.name}: ${item.count} purchased`)
    .join("<br>");
}

function updateUpgradeButtons() {
  upgradeButtons.forEach((button, index) => {
    button.disabled = purpleEaterCounter < availableItems[index].cost;
    button.title = `Costs ${availableItems[index].cost.toFixed(2)} purple people eaters - ${availableItems[index].description}`;
  });
}

// Increase of 1 unit per second
let lastTimestamp: number | null = null;

function updateCounter(timestamp: number) {
  if (lastTimestamp !== null) {
    const elapsed = timestamp - lastTimestamp;
    purpleEaterCounter += (elapsed / 1000) * growthRate;
    updateDisplay();
  }
  lastTimestamp = timestamp;
  requestAnimationFrame(updateCounter);
}

requestAnimationFrame(updateCounter);
