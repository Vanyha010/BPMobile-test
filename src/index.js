import langProvider from "./js/langProvider";

const test = document.createElement('h1');
test.textContent = langProvider();

document.body.append(test);