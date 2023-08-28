const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function remplacerCaracteres(phrase) {
  const reglesRemplacement = {
    A: "#",
    l: "!", // X: "Y" X est remplacé par Y
    E: "€",
    e: "3",
    a: "@",
    u: "^",
  };

  const caracteres = phrase.split("");

  const nouvellePhrase = caracteres
    .map((caractere) => {
      return reglesRemplacement[caractere] || caractere;
    })
    .join("");

  return nouvellePhrase.replace(/\s+/g, "");
}

rl.question("Entrez une phrase : ", (phrase) => {
  phrase = phrase.trim();

  if (phrase !== "") {
    const phraseModifiee = remplacerCaracteres(phrase);
    console.log("Phrase modifiée :", phraseModifiee);
  } else {
    console.log("Vous n'avez pas écrit de phrase.");
  }

  rl.close();
});
