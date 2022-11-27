(() => {
    const createStyle = document.createElement("script");
    createStyle.setAttribute("src", "./styles/createStyles.js");
    document.body.appendChild(createStyle);
})();

window.create = async (status = "hide") => {
    const createContainer = document.createElement("section");
    createContainer.setAttribute("class", "createContainer");
    if (status === "hide"){
        createContainer.classList.add(status);
    }
    else{
        createContainer.classList.remove("hide");
    }

    const main = document.querySelector("main");
    main.appendChild(createContainer);

    const createTitle = document.createElement("h2");
    createTitle.setAttribute("class", "createTitle");
    createTitle.innerText = "Cadastrar livros";

    createContainer.appendChild(createTitle);
    const formsTitle = ["Titulo", "Autor", "Descrição", "Tiragem"];

    (async () => {
        const divForms = document.createElement("div");
        divForms.setAttribute("class", "divForms");

        function createForms(){
            formsTitle.forEach((items) => {
                const divLabelInput = document.createElement("div");
                divLabelInput.setAttribute("class", "divLabelInput");
                const labelForms = document.createElement("label");
                labelForms.setAttribute("class", "label");
                labelForms.setAttribute("for", items);
                labelForms.textContent = `${items}:`

                const inputForms = document.createElement("input");
                inputForms.setAttribute("class", "input");
                inputForms.setAttribute("id", items);
                inputForms.setAttribute("type", "text");
                inputForms.setAttribute("name", items);
                inputForms.setAttribute("placeholder", `${items} do livro`);

                divForms.appendChild(divLabelInput);
                divLabelInput.appendChild(labelForms);
                divLabelInput.appendChild(inputForms);
            })
        }        
        createContainer.appendChild(divForms);
        createForms();

        const buttonForms = document.createElement("button");
        buttonForms.setAttribute("class", "buttonForms");
        buttonForms.textContent = "Cadastrar livros";
        divForms.appendChild(buttonForms);

        buttonForms.addEventListener("click", async function(event){
            event.preventDefault();

            const newBook = {
                tiragem: parseInt(document.getElementById("Tiragem").value),
                titulo: document.getElementById("Titulo").value,
                autor: document.getElementById("Autor").value,
                descricao: document.getElementById("Descrição").value,
            };

            console.log(newBook.tiragem);

            await createBooks(newBook);
            alert("Livro cadastrado com sucesso!");
            reloadPage();
        });
    })();
};

create();

async function reloadPage(){
    const main = document.querySelector("main");
    const section = document.querySelector("section.createContainer");
    main.removeChild(section);
    await create("no hide");
}
