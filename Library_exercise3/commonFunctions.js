window.hiddenSection = (event) => {
    event.preventDefault();
    const className = event.path[0].parentNode.classList;
    const homeScript = document.querySelector(".scriptContainer");
    const createContainer = document.querySelector(".createContainer");
    const getContainer = document.querySelector(".getContainer");
    const updateContainer = document.querySelector(".updateContainer");
    const deleteContainer = document.querySelector(".deleteContainer");

    if (className == "scriptContainer"){
      homeScript.classList.remove("hide");
      createContainer.classList.add("hide");
      getContainer.classList.add("hide");
      updateContainer.classList.add("hide");
      deleteContainer.classList.add("hide");
    } 
    else if(className == "createContainer"){
        createContainer.classList.remove("hide");
        homeScript.classList.add("hide");
        getContainer.classList.add("hide");
        updateContainer.classList.add("hide");
        deleteContainer.classList.add("hide");
    } 
    else if(className == "getContainer") {
        getContainer.classList.remove("hide");
        homeScript.classList.add("hide");
        createContainer.classList.add("hide");
        updateContainer.classList.add("hide");
        deleteContainer.classList.add("hide");
    }
    else if(className == "updateContainer"){
        updateContainer.classList.remove("hide");
        homeScript.classList.add("hide");
        createContainer.classList.add("hide");
        getContainer.classList.add("hide");
        deleteContainer.classList.add("hide");
    }
    else if(className == "deleteContainer"){
        deleteContainer.classList.remove("hide");
        homeScript.classList.add("hide");
        createContainer.classList.add("hide");
        getContainer.classList.add("hide");
        updateContainer.classList.add("hide");
    }
  };