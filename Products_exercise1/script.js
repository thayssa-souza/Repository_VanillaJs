const textXML = `
<produtos>
    <produto>
        <titulo>Camiseta Esportiva</titulo>
        <descricao>Com tecnologia inovadora que, além de controlar o calor, ajuda a reduzir a transpiração.</descricao>
        <preco>35,50</preco>
    </produto>
    <produto>
        <titulo>Bermuda Jeans</titulo>
        <descricao>Bordada no estilo ROCK! 100% Algodão.</descricao>
        <preco>54,62</preco>
    </produto>
    <produto>
        <titulo>Calça Moletom</titulo>
        <descricao>Básica com modelagem reta, perfeita para o look confortável, com forro peludinho.</descricao>
        <preco>79,90</preco>
    </produto>
</produtos>
`

const parser = new DOMParser();
const parsedDocumentXML = parser.parseFromString(textXML, 'text/xml');

const divs = document.createElement('div');
const title = document.createElement('h1');
const description = document.createElement('p');
const price = document.createElement('span')

function setOnHtml(){
    for (let i = 0; i <= parsedDocumentXML.getElementsByTagName('produto').length; i++){

        title.textContent = parsedDocumentXML.getElementsByTagName('titulo')[i].textContent;
        divs.appendChild(title);

        description.textContent = parsedDocumentXML.getElementsByTagName('descricao')[i].textContent;
        divs.appendChild(description);

        price.textContent= parsedDocumentXML.getElementsByTagName('preco')[i].textContent;
        divs.appendChild(price);

        document.body.getElementsByTagName('div')[i].innerHTML = divs.innerHTML;
}}

setOnHtml();