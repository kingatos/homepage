console.log("Hello everyone!")

let buttonWelcome = document.querySelector(".js-buttonWelcome");
let navigationHeader = document.querySelector(".js-headerTitle");
let importantWord = document.querySelector(".js-importantWord");
let buttonHavefun = document.querySelector(".js-buttonHavefun");
let disappearing = document.querySelector(".disappearing");



buttonWelcome.addEventListener("click", () => {
    navigationHeader.classList.toggle("disappearing");
    buttonWelcome.innerText = navigationHeader.classList.contains("disappearing") ? "Przywróć powitanie" : "Usuń powitanie";
});

buttonHavefun.addEventListener("click", () => {
    importantWord.classList.toggle("disappearing");
    buttonHavefun.innerText = importantWord.classList.contains("disappearing") ? "Przywróć Have Fun" : "Usuń Fave Fun!";

});