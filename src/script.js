function generatePoem(event) {
  event.preventDefault();

  new Typewriter('#poem', {
    strings: "La tombe dit la rose",
    autoStart: true,
    delay: 75,
    cursor: ""
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);