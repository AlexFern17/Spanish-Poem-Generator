function generatePoem(event) {
  event.preventDefault();

  new Typewriter(".poem", {
    strings: ["123"],
    autoStart: true,
    delay: 1,
    cursor: "|",
  });
}

let poemElement = document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit", generatePoem);
