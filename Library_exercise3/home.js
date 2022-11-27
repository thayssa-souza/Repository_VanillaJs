(() => {
    const homeStyle = document.createElement("script");
    homeStyle.setAttribute("src", "./styles/homeStyles.js");
    document.body.appendChild(homeStyle);
})();

function generateScriptMain(){
    const homeMain = document.createElement("main");
    const homeContainer = document.createElement("section");
    homeContainer.setAttribute("class", "homeContainer");
    const homeTitle = document.createElement("h1");
    homeTitle.setAttribute("class", "homeTitle");
    homeTitle.innerText = "Olá";

    document.body.appendChild(homeMain);
    homeMain.appendChild(homeContainer);
    homeContainer.appendChild(homeTitle);
}

generateScriptMain();