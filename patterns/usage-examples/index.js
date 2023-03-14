import { EventEmitter } from "../common/index.js";

const input = document.createElement("input");
input.classList.add("input");

const subscribeButton = document.createElement("button");
subscribeButton.textContent = "Sub";

const unsubscribeButton = document.createElement("button");
unsubscribeButton.textContent = "Unsub";

const clickButton = document.createElement("button");
clickButton.textContent = "Click";

document.getElementById("root").append(input, subscribeButton, unsubscribeButton, clickButton);


const emitter = new EventEmitter();
let subscription;

clickButton.addEventListener("click", function (event) {
    emitter.emit("event: click", { data: input.value });
});

subscribeButton.addEventListener("click", () => {
    subscription = emitter.subscribe("event: click", ({ data }) => {
        console.log(data);
    });
});

unsubscribeButton.addEventListener("click", () => {
    subscription();
});
