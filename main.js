function changeThemeMode(element) {
    const htmlEl = document.querySelector("html");
    const isOnDarkmode = htmlEl.classList.contains("dark-mode");

    if (isOnDarkmode){
        htmlEl.classList.remove("dark-mode");
        element.innerText = "Dark";
    }else {
        htmlEl.classList.add("dark-mode");
        element.innerText = "Light";
    }
}

function showText(element){
    const pEl = element.previousElementSibling;
    const heightIsAuto = pEl.classList.contains("open");
    
    if (heightIsAuto){
        pEl.classList.remove("open")
        element.innerText = "ver mais";
    }else {
        pEl.classList.add("open");
        element.innerText = "ver menos";
    }
}