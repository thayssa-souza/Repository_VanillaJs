window.delete = async (status = "hide") => {
    const deleteStyle = document.createElement("script");
    deleteStyle.setAttribute("src", "../styles/deleteStyles.js");
    document.body.appendChild(deleteStyle);

    const deleteContainer = document.createElement("section");
    deleteContainer.setAttribute("class", "deleteContainer");
    if (status === "hide"){
        deleteContainer.classList.add(status);
    }
    else{
        deleteContainer.classList.remove("hide");
    }
}