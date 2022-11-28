window.hiddenSection = (event) => {
    event.preventDefault();
    const className = event.path[0].parentNode.classList;
    const homeContainer = document.querySelector(".homeContainer");
    const createContainer = document.querySelector(".createContainer");
    const getContainer = document.querySelector(".getContainer");
    const updateContainer = document.querySelector(".updateContainer");
    const deleteContainer = document.querySelector(".deleteContainer");

    if(className == "navHome listHeader"){
      homeContainer.classList.remove("hide");
      createContainer.classList.add("hide");
      getContainer.classList.add("hide");
      updateContainer.classList.add("hide");
      deleteContainer.classList.add("hide");
    } 
    else if(className == "navCreate listHeader"){
        createContainer.classList.remove("hide");
        homeContainer.classList.add("hide");
        getContainer.classList.add("hide");
        updateContainer.classList.add("hide");
        deleteContainer.classList.add("hide");
    } 
    else if(className == "navGet listHeader") {
        getContainer.classList.remove("hide");
        homeContainer.classList.add("hide");
        createContainer.classList.add("hide");
        updateContainer.classList.add("hide");
        deleteContainer.classList.add("hide");
    }
    else if(className == "navUpdate listHeader"){
        updateContainer.classList.remove("hide");
        homeContainer.classList.add("hide");
        createContainer.classList.add("hide");
        getContainer.classList.add("hide");
        deleteContainer.classList.add("hide");
    }
    else if(className == "navDelete listHeader"){
        deleteContainer.classList.remove("hide");
        homeContainer.classList.add("hide");
        createContainer.classList.add("hide");
        getContainer.classList.add("hide");
        updateContainer.classList.add("hide");
    }
};

window.deleteTitle = (tag) => {
    Object.assign(tag.style, {
      opacity: "0",
      transition: "0.5s",
    });
  }

// window.insertDataTable = (storageList) => {
//     for(let i = 0; i < storageList.length; i++){
//         const tableTr = tableBody.insertRow();

//         Object.values(storageList[i]).forEach((items) => {
//             const headerTd = document.createElement("td");
//             tableTr.appendChild(headerTd);
//             headerTd.textContent = items;
//         });
//         tableTr.firstChild.classList.add("idBook");
//     }
// }