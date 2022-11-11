{
    const welcome = () => {
        console.log("Hello world!")
    };
    
    const buttonWelcome = document.querySelector(".js-buttonWelcome");
    const navigationHeader = document.querySelector(".js-headerTitle");
    const importantWord = document.querySelector(".js-importantWord");
    const buttonHavefun = document.querySelector(".js-buttonHavefun");
    const disappearing = document.querySelector(".disappearing");

    const toggleAndChangeTextHeader = () => {
        navigationHeader.classList.toggle("disappearing");
        buttonWelcome.innerText = navigationHeader.classList.contains("disappearing") ? "Przywróć powitanie" : "Usuń powitanie";
    };
    
    const toggleAndChangeTextImportantWord = () => {
        importantWord.classList.toggle("disappearing");
        buttonHavefun.innerText = importantWord.classList.contains("disappearing") ? "Przywróć Have Fun" : "Usuń Fave Fun!";
    };
    
    const init = () => {
        buttonWelcome.addEventListener("click", toggleAndChangeTextHeader);
        buttonHavefun.addEventListener("click", toggleAndChangeTextImportantWord);
        welcome();
    };

    init();
}

    