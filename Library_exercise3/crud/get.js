window.get = async (status = "hide") => {
    const getStyle = document.createElement("script");
    getStyle.setAttribute("src", "../styles/getStyles.js");
    document.body.appendChild(getStyle);

    const getContainer = document.createElement("section");
    getContainer.setAttribute("class", "getContainer");
    if (status === "hide"){
        getContainer.classList.add(status);
    }
    else{
        getContainer.classList.remove("hide");
    }
}