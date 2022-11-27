(() => {
    const updateStyle = document.createElement("script");
    updateStyle.setAttribute("src", "./styles/updateStyles.js");
    document.body.appendChild(updateStyle);
})();

window.updateBooks = async (status = "hide") => {
    const updateContainer = document.createElement("section");
    updateContainer.setAttribute("class", "updateContainer");
    if (status === "hide"){
        updateContainer.classList.add(status);
    }
    else{
        updateContainer.classList.remove("hide");
    }

    const main = document.querySelector("main");
    main.appendChild(updateContainer);

    const updateTitle = document.createElement("h2");
    updateTitle.setAttribute("class", "updateTitle");
    updateTitle.innerText = "Editar livros";

    updateContainer.appendChild(updateTitle);
}

updateBooks();