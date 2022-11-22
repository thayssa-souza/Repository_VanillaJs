(() => {
    const styles = document.createElement("script");
    styles.setAttribute("src", "scriptStyle.js");
    document.body.appendChild(styles);
  })();

(() => {
    window.page = [];
    for (const pages of ["create", "delete", "read", "update"]) {
        const script = document.createElement("script");
        script.setAttribute("src", `./crud/${pages}.js`);
        document.body.appendChild(script);
    }

})();

const navHeader = [
    {
        nome: "Cadastrar",
        id: "post"
    },{
        nome: "Buscar",
        id: "read"
    },{
        nome: "Alterar cadastro",
        id: "update"
    },{
        nome: "Deletar",
        id: "delete"
    }
]

function generateHeader(){
    const header = document.createElement("header");
    const containerHeader = document.createElement("section");
    const logo = document.createElement("img");
    const divMenu = document.createElement("div");
    const spanMenu = document.createElement("span");
    const nav = document.createElement("nav");
    const ulHeader = document.createElement("ul");

    navHeader.forEach(item => {
        const listHeader = document.createElement("li");
        const linksHeader = document.createElement("a");
        const spanMenu = document.createElement("span");
        spanMenu.setAttribute("class", "spanMenu");
        spanMenu.innerText = item.nome;
        listHeader.setAttribute("class", "listHeader");
        linksHeader.setAttribute("class", "link");
        linksHeader.innerText = item.nome;
        linksHeader.setAttribute("href", item.id);
        ulHeader.appendChild(listHeader);
        listHeader.appendChild(linksHeader);
        divMenu.appendChild(spanMenu);
    })

    function setAttributeHeader(){
        containerHeader.setAttribute("class", "containerHeader");
        divMenu.setAttribute("class", "containerMenu");
        logo.setAttribute("class", "logo");
        logo.setAttribute("src", "./Images/logo.png");
        ulHeader.setAttribute("class", "ulHeader");
    }

    function generateMenu(){
        divMenu.addEventListener("click", () => {
            divMenu.classList.toggle("active");
            ulHeader.classList.toggle("active");
        })
        document.querySelectorAll(".link").forEach(e => e.addEventListener("click", () => {
            divMenu.classList.remove("active");
            ulHeader.classList.remove("active");
        }))
    }

    generateMenu();
    setAttributeHeader();

    document.body.appendChild(header);
    header.appendChild(containerHeader);
    header.appendChild(logo);
    containerHeader.appendChild(nav);
    nav.appendChild(ulHeader);
    nav.appendChild(divMenu);
}

generateHeader();