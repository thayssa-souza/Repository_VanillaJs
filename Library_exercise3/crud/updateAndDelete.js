(() => {
    const updateStyle = document.createElement("script");
    updateStyle.setAttribute("src", "./styles/updateStyles.js");
    document.body.appendChild(updateStyle);
})();

window.updateOrDeleteBooks = async (status = "hide") => {
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

    const apiList = await getBooks();
    const storageList = apiList.length != 0 ? apiList : JSON.parse(localStorage.get);
    
    const divUpdateForms = document.createElement("div");
    divUpdateForms.setAttribute("class", "divUpdateForms"); 
    btnEditForms = document.createElement("button");
    btnEditForms.setAttribute("class", "btnEditForms");
    btnEditForms.textContent = "Atualizar";

    
    await editBooks();
    updateContainer.appendChild(divUpdateForms);

    await formUpdate();
    divUpdateForms.appendChild(btnEditForms);


    async function formUpdate(){
        const labelInputDiv = document.createElement("div");
        labelInputDiv.setAttribute("class", "labelInputDiv");

        const formsTitle = ["Titulo", "Autor", "Descrição", "Tiragem"];

        for (const iterator of formsTitle) {
            const labelForms = document.createElement("label");
            labelForms.setAttribute("class", "label");
            labelForms.setAttribute("for", iterator);
            labelForms.textContent = `${iterator}:`

            const inputForms = document.createElement("input");
            inputForms.setAttribute("class", "input");
            inputForms.setAttribute("id", iterator);
            inputForms.setAttribute("type", "text");

            divUpdateForms.appendChild(labelInputDiv);
            labelInputDiv.appendChild(labelForms);
            labelInputDiv.appendChild(inputForms);        
        }
    }


    async function editBooks(){
        const theadTitles = ["Uid", "Tiragem", "Titulo", "Autor", "Descrição", "Editar", "Deletar"];

        const tableBooks = document.createElement("table");
        const tableHeader = tableBooks.createTHead();
        const tableBody = tableBooks.createTBody();
        updateContainer.appendChild(tableBooks);

    for(let i = 0; i < theadTitles.length; i++){
        const tableThead = document.createElement("th");
        tableHeader.appendChild(tableThead);
        tableThead.textContent = theadTitles[i];
    }

    insertDataTable(storageList);
    createIcon("iconPencil");
    createIcon("iconTrash");
    function insertDataTable(storageList) {
        for(let i = 0; i < storageList.length; i++){
            const tableTr = tableBody.insertRow();
            tableTr.setAttribute("class", "tableTr");
    
            Object.values(storageList[i]).forEach((items) => {
                const headerTd = document.createElement("td");
                tableTr.appendChild(headerTd);
                headerTd.textContent = items;
            });
            tableTr.firstChild.classList.add("idBook");
            tableTr.lastChild.classList.add("Descricao");
            
            // tableTr.addEventListener("dblclick", editBooksEvent);
        }
    }

    async function editBooksEvent(event){
        const itemUpdate = this.parentNode.parentNode.querySelectorAll("td");
        uidUpdate = itemUpdate[0].textContent;

        // const tiragem = document.querySelector("#Tiragem");
        // tiragem.value = itemUpdate[1].textContent;
        // const titulo = document.querySelector("#Titulo");
        // titulo.value = itemUpdate[2].textContent;
        // const autor = document.querySelector("#Autor");
        // autor.value = itemUpdate[3].textContent;
        const descricao = document.querySelector("#Descricao");
        descricao.value = itemUpdate[4].textContent;   
    }

    btnEditForms.addEventListener("click", async function(event){
        event.preventDefault();

        const editBookUpd = {
            // tiragem: document.getElementById("Tiragem").value,
            // titulo: document.getElementById("Titulo").value,
            // autor: document.getElementById("Autor").value,
            descricao: document.getElementById("Descricao").value,
        }

        await updateBook(editBookUpd);
        alert("Livro atualizado com sucesso!");
        reloadPage();
    });

    async function deleteBookEvent(event){
        const itemDelete = this.parentNode.parentNode.querySelectorAll("td");
        console.log("this: " + this);
        await deleteBook(itemDelete[0].textContent);
        console.log("itemDelete: " + itemDelete[0].textContent);

        deleteTitle(event.target.parentNode.parentNode);
        setTimeout(function(){
            event.target.parentNode.parentNode.remove();
        }, 300);

        alert("Livro deletado com sucesso!");
    }
    
    async function createIcon(icons){
        const allTrTable = document.querySelectorAll(".tableTr");

        allTrTable.forEach((elements) => {
            const tdIcons = document.createElement("td");
            tdIcons.setAttribute("class", "tdIcons");
            const imgIcons = document.createElement("img");
            imgIcons.setAttribute("class", "imgIcons");

            if(icons == "iconTrash"){
                imgIcons.setAttribute("src", "./images/iconTrash.png");
                imgIcons.addEventListener("dblclick", deleteBookEvent);
            }
            else{
                imgIcons.setAttribute("src", "./images/iconPencil.png");
                imgIcons.addEventListener("dblclick", editBooksEvent);
            }

            tdIcons.appendChild(imgIcons);
            elements.appendChild(tdIcons);
        });
    }}
}

updateOrDeleteBooks();

async function reloadPage(){
    const main = document.querySelector("main");
    const section = document.querySelector("section.updateContainer");
    main.removeChild(section);
    await create("no hide");
}