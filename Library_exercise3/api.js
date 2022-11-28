const url = "http://livros.letscode.dev.netuno.org:25390/services";

const uidAluno = "24c71f32-f66d-48b6-80f1-d42b71e95e0c";

window.createBooks = async function ({ tiragem, titulo, autor, descricao }){
    try{
        const promise = await fetch(`${url}/livro`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                aluno: {
                    uid: uidAluno,
                },
                tiragem: tiragem,
                titulo: titulo,
                autor: autor,
                descricao: descricao,
            }),
        });
        if(!promise){
            alert("Erro na requisição... \n Tente novamente mais tarde.");
            return [];
        }
        return promise.json();
    } catch (error){
        console.error(`Erro na requisição: ${error}`);
    }
};

window.getBooks = async function() {
    try{
        const promise = await fetch(`${url}/livro/lista`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: "",
                aluno: {
                    uid: uidAluno,
                },
            }),
        });
        const books = await promise.json();
        localStorage.setItem("books", JSON.stringify(books));
        return books;
    }
    catch (error){
        console.error(`Erro na requisição: ${error}`);
    }
};

window.getBooksByTitle = async function(titulo){
    try{
        const promise = await fetch(`${url}/livro/lista`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: titulo,
                aluno: {
                    uid: uidAluno
                },
            }),
        });
        const books = await promise.json();
        localStorage.setItem("books", JSON.stringify(books));
        return books;
    }
    catch (error){
        console.error(`Erro na requisição: ${error}`);
    }
}

window.updateBook = async function({ tiragem, titulo, autor, descricao} ){
    try{
        const promise = await fetch(`${url}/livro`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uid: editBook.uid,
                aluno: {
                    uid: uidAluno,
                },
                tiragem: tiragem,
                titulo: titulo,
                autor: autor,
                descricao: descricao,
            }),
        });
    }
    catch (error){
        console.error(`Erro na requisição: ${error}`);
    }
};

window.deleteBook = async function(idBook){
    console.log("idApi: " + idBook);
    try{
        const promise = await fetch(`${url}/livro`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                aluno: {
                    uid: uidAluno,
                },
                uid: idBook,
            }),
        });
    }
    catch (error){
        console.error(`Erro na requisição: ${error}`);
    } 
};