window.create = async (status = "hide") => {
    const createStyle = document.createElement("script");
    createStyle.setAttribute("src", "../styles/createStyles.js");
    document.body.appendChild(createStyle);

    const createContainer = document.createElement("section");
    createContainer.setAttribute("class", "createContainer");
    if (status === "hide"){
        createContainer.classList.add(status);
    }
    else{
        createContainer.classList.remove("hide");
    }
}

(async () => {
    
})