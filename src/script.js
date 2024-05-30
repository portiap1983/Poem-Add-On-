function displayPoem(response) {
      new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 75,
        cursor: ""
      });
    }

    function generatePoem(event) {
      event.preventDefault();

      let instructionsInput = document.querySelector("#user-instructions");
      let apiKey = "5a032ao3cfdb5cb2a245077a27fe06ft";
      let context = "You are a funny Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Please sign the bottom of the poem by `She Codes AI` inside a <strong> Element. make sure to follow the user instructions";
      let prompt = ` User Instructions: Generate a Poem about Soccer in English ${instructionsInput.value}`;
      let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

      let poemElement = document.querySelector ("#poem");
      poemElement.classList.remove ("hidden");
      poemElement.innerHTML= `Generating a Poem about ${instructionsInput.value}`

      console.log("Generating poem");
      console.log(`Prompt: ${prompt}`);
      console.log(`Context: ${context}`);

      axios.get(apiURL).then(displayPoem);
    }

    let poemFormElement = document.querySelector("#poem-generator");
    poemFormElement.addEventListener("submit", generatePoem);