(() => {
    const deleteStyle = document.createElement("script");
    deleteStyle.setAttribute("src", "./styles/deleteStyles.js");
    document.body.appendChild(deleteStyle);
})();

window.deleteBooks = async (status = "hide") => {
    const deleteContainer = document.createElement("section");
    deleteContainer.setAttribute("class", "deleteContainer");
    if (status === "hide"){
        deleteContainer.classList.add(status);
    }
    else{
        deleteContainer.classList.remove("hide");
    }

    const main = document.querySelector("main");
    main.appendChild(deleteContainer);

    const deleteTitle = document.createElement("h2");
    deleteTitle.setAttribute("class", "deleteTitle");
    deleteTitle.innerText = "Deletar livros";

    deleteContainer.appendChild(deleteTitle);
}

deleteBooks();