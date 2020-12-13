const buttonToConvert = document.querySelector("#btn");
const textInput = document.querySelector("#textarea");
const output = document.querySelector("#output");

let apiEndPoint = `https://api.funtranslations.com/translate/minion.json`;

const getTranslationURL = (input) => `${apiEndPoint}?text=${input}`;

const errorHandler = (error) => {
  console.log("error occured", error);
  alert("something wrong with api endpoint , may be try again later");
};

const clickHandler = async () => {
  let text = textInput.value;
  await fetch(getTranslationURL(text))
    .then((res) => res.json())
    .then((data) => (output.innerText = data.contents.translated))
    .catch(errorHandler);
};

buttonToConvert.addEventListener("click", clickHandler);
