(() => {
    const headerStyle = document.createElement("script");
    headerStyle.setAttribute("src", "./styles/headerStyles.js");
    document.body.appendChild(headerStyle);
})();

const navHeader = [
    {
        nome: "Cadastrar",
    },{
        nome: "Buscar",
    },{
        nome: "Alterar cadastro",
    },{
        nome: "Deletar",
    }
]

function generateHeader(){
    const header = document.createElement("header");
    const containerHeader = document.createElement("section");
    containerHeader.setAttribute("class", "containerHeader");

    const logo = document.createElement("img");
    logo.setAttribute("class", "logo");
    logo.setAttribute("src", "./images/logo.png");

    const divMenu = document.createElement("div");
    divMenu.setAttribute("class", "containerMenu");

    const nav = document.createElement("nav");
    const ulHeader = document.createElement("ul");
    ulHeader.setAttribute("class", "ulHeader");

    navHeader.forEach(item => {
        const listHeader = document.createElement("li");
        const linksHeader = document.createElement("a");
        listHeader.setAttribute("class", "listHeader");
        linksHeader.setAttribute("class", "link");
        linksHeader.innerText = item.nome;
        linksHeader.setAttribute("href", item.id);
        ulHeader.appendChild(listHeader);
        listHeader.appendChild(linksHeader);
    })

    document.body.appendChild(header);
    header.appendChild(containerHeader);
    header.appendChild(logo);
    containerHeader.appendChild(nav);
    nav.appendChild(ulHeader);
    nav.appendChild(divMenu);
}

generateHeader();