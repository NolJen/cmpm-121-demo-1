import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My amazing game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

//step 1 create button and emoji
const button = document.createElement("button");
button.innerHTML = "👾 click me"
button.type = "button"
button.name = "funButton";
button.title = "Click me for fun!";

app.append(button);
//refrenced https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button