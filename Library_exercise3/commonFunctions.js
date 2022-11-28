window.hiddenSection = (event) => {
    event.preventDefault();
    const className = event.path[0].parentNode.classList;
    const homeContainer = document.querySelector(".homeContainer");
    const createContainer = document.querySelector(".createContainer");
    const getContainer = document.querySelector(".getContainer");
    const updateContainer = document.querySelector(".updateContainer");

    if(className == "navHome listHeader"){
      homeContainer.classList.remove("hide");
      createContainer.classList.add("hide");
      getContainer.classList.add("hide");
      updateContainer.classList.add("hide");
    } 
    else if(className == "navCreate listHeader"){
        createContainer.classList.remove("hide");
        homeContainer.classList.add("hide");
        getContainer.classList.add("hide");
        updateContainer.classList.add("hide");
    } 
    else if(className == "navGet listHeader") {
        getContainer.classList.remove("hide");
        homeContainer.classList.add("hide");
        createContainer.classList.add("hide");
        updateContainer.classList.add("hide");
    }
    else if(className == "navUpdate listHeader"){
        updateContainer.classList.remove("hide");
        homeContainer.classList.add("hide");
        createContainer.classList.add("hide");
        getContainer.classList.add("hide");
    }
};

window.deleteTitle = (tag) => {
    Object.assign(tag.style, {
      opacity: "0",
      transition: "0.5s",
    });
}