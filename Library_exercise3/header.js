(() => {
    const headerStyle = document.createElement("script");
    headerStyle.setAttribute("src", "./styles/headerStyles.js");
    document.body.appendChild(headerStyle);
})();

const navHeader = [
    {
        nome: "Home",
        classList: "navHome"
    },{
        nome: "Cadastrar",
        classList: "navCreate"
    },{
        nome: "Buscar",
        classList: "navGet"
    },{
        nome: "Alterar/Deletar cadastro",
        classList: "navUpdate"
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
        listHeader.setAttribute("class", item.classList + " listHeader");
        linksHeader.setAttribute("class", "link");

        linksHeader.addEventListener("click", hiddenSection);
        linksHeader.innerText = item.nome;

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