const url = "http://livros.letscode.dev.netuno.org:25390/services/_openapi";

const uidAluno = "24c71f32-f66d-48b6-80f1-d42b71e95e0c";

window.createBooks = async function (newBook){
    try{
        const promise = await fetch(`${url}/livro`, {
            method: "POST",
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                aluno: {
                    uid: uidAluno,
                },
                tiragem: newBook.tiragem,
                titulo: newBook.titulo,
                autor: newBook.autor,
                descricao: newBook.descricao,
            }),
        });
    if(!promise){
        alert("Erro na requisição... \n Tente novamente mais tarde.");
        return [];
    }
    return promise.json();
    }
    catch (error){
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
                group: {
                    uid: uidAluno,
                },
            }),
        });
        if(!promise){
            alert("Erro na requisição... \n Tente novamente mais tarde.");
            return [];
        }
        return promise.json();
    }
    catch (error){
        console.error(`Erro na requisição: ${error}`);
    }
};

window.updateBook = async function(editBook){
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
                tiragem: editBook.tiragem,
                titulo: editBook.titulo,
                autor: editBook.autor,
                descricao: editBook.descricao,
            }),
        });
        if(!promise){
            alert("Erro na requisição... \n Tente novamente mais tarde.");
            return [];
        }
        return promise.json();
    }
    catch (error){
        console.error(`Erro na requisição: ${error}`);
    }
};

window.deleteBook = async function(idBook){
    try{
        const promise = await fetch(`${url}/livro`, {
            mehod: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uid: `${idBook}`,
                aluno: {
                    uid: uidAluno,
                },
            }),
        });
        if(!promise){
            alert("Erro na requisição... \n Tente novamente mais tarde.");
            return [];
        }
        return promise.json();
    }
    catch (error){
        console.error(`Erro na requisição: ${error}`);
    }     
};