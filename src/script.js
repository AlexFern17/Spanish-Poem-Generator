function displayPoem(response) {
  console.log("poem generated");
  new Typewriter(".poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "097041f091d320fa0aa8fbb43t7o1142";
  let prompt = `User instructions: Generate a poem in Spanish about ${instructionsInput.value}`;
  let context =
    "You are a poem expert who loves to write short poems. Your purpose is to generate a simple 4 line poem in basic HTML, and separate each line with a <br/>.  Be sure to follow the user instructions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
