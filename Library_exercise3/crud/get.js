(() => {
    const getStyle = document.createElement("script");
    getStyle.setAttribute("src", "./styles/getStyles.js");
    document.body.appendChild(getStyle);
})();

window.get = async (status = "hide") => {
    const getContainer = document.createElement("section");
    getContainer.setAttribute("class", "getContainer");
    if (status === "hide"){
        getContainer.classList.add(status);
    }
    else{
        getContainer.classList.remove("hide");
    }

    const main = document.querySelector("main");
    main.appendChild(getContainer);

    const getTitle = document.createElement("h2");
    getTitle.setAttribute("class", "getTitle");
    getTitle.innerText = "Buscar livros";

    getContainer.appendChild(getTitle);
}

get();

// async function renderGetBooks() {
//     const main = document.querySelector("main");
//     const section = document.querySelector("section.getContainer");
//     main.removeChild(section);
//     await category("no hide");
// }

