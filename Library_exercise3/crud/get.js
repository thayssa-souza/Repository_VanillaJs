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

    const apiList = await getBooks();
    const storageList = apiList.length != 0 ? apiList : JSON.parse(localStorage.get);

    function getFormBooks(){
        window.getForm = document.createElement("form");
        getForm.setAttribute("action", "");
        getForm.setAttribute("method", "POST");
        getForm.setAttribute("class", "getForm");

        const getInput = document.createElement("input");
        getInput.setAttribute("type", "text");
        getInput.setAttribute("placeholder", "Digite o nome do livro");
        getInput.setAttribute("name", "filter");
        getInput.setAttribute("id", "getFilter")
        getInput.setAttribute("class", "getInput");

        getContainer.appendChild(getForm);
        getForm.appendChild(getInput);
    }

    getContainer.appendChild(getTitle);
    getFormBooks();
    const getBtn = document.createElement("button");
    getBtn.textContent = "Buscar";
    getForm.appendChild(getBtn);

    getBtn.addEventListener("click", async function(event){
        event.preventDefault();
        
        await showBooks(input);
    })


    const theadTitles = ["Uid", "Tiragem", "Titulo", "Autor", "Descrição"];

    const tableBooks = document.createElement("table");
    const tableHeader = tableBooks.createTHead();
    const tableBody = tableBooks.createTBody();
    getContainer.appendChild(tableBooks);

    for(let i = 0; i < theadTitles.length; i++){
        const tableThead = document.createElement("th");
        tableHeader.appendChild(tableThead);
        tableThead.textContent = theadTitles[i];
    }

    insertDataTable(storageList);

    function insertDataTable(storageList){
        for(let i = 0; i < storageList.length; i++){
            const tableTr = tableBody.insertRow();

            Object.values(storageList[i]).forEach((items) => {
                const headerTd = document.createElement("td");
                tableTr.appendChild(headerTd);
                headerTd.textContent = items;
            });
            tableTr.firstChild.classList.add("idBook");
        }
    }

    window.showBooks = async function(input){
        const result = await getBooksByTitle(input.value);
        if(result.length){
            insertDataTable(result);
        }
        else{
            insertDataTable(storageList);
        }
    }
}

get();