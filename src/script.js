function generatePoem(event) {
  event.preventDefault();

  new Typewriter(".poem", {
    strings: ["123"],
    autoStart: true,
    delay: 1,
    cursor: "|",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
if (poemFormElement) {
  poemFormElement.addEventListener("submit", () => {
    console.log("working");
  });
}
