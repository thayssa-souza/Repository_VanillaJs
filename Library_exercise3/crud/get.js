// window.get = async (status = "hide") => {
//     const getStyle = document.createElement("script");
//     getStyle.setAttribute("src", "../styles/getStyles.js");
//     document.body.appendChild(getStyle);

//     const getContainer = document.createElement("section");
//     getContainer.setAttribute("class", "getContainer");
//     if (status === "hide"){
//         getContainer.classList.add(status);
//     }
//     else{
//         getContainer.classList.remove("hide");
//     }

//     const main = document.querySelector("main");
//     main.appendChild(getContainer);
// }

// (async () => {
//     const requestBooks = await getBooks();
//     const getBook = requestBooks.length != 0 ? requestBooks : JSON.parse(localStorage.books)

//     const getContainer = document.createElement("section");
//     getContainer.setAttribute("class", "getContainer");
//     if(status === "hide"){
//         getContainer.classList.add(status);
//     }
//     else{
//         getContainer.classList.remove("hide");
//     }

//     const getMain = document.createElement("main");
//     document.body.appendChild(getMain);
//     getMain.appendChild(getContainer);


//     function generateGetMain(){
//         const getTitle = document.createElement("h1");
//         getTitle.setAttribute("class", "getTitle");
//         getTitle.textContent = "Buscar livros";
//         getContainer.appendChild(getTitle);
    
//         const headerTable = ["Tiragem", "Titulo", "Autor", "Descrição"];
//     }

//     generateGetMain();
//     renderGetBooks();

// })();

// async function renderGetBooks() {
//     const main = document.querySelector("main");
//     const section = document.querySelector("section.getContainer");
//     main.removeChild(section);
//     await category("no hide");
// }

