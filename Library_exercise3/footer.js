(() => {
    const footerStyle = document.createElement("script");
    footerStyle.setAttribute("src", "./styles/footerStyles.js");
    document.body.appendChild(footerStyle);
})();

const socialsMidias = [
    {
        src: "./images/instagramLogo.png"
    },{
        src: "./images/facebookLogo.png"
    },{
        src: "./images/telegramLogo.png"
    }
]

function generateFooter(){
    const footer = document.createElement("footer");
    const containerFooter = document.createElement("section");
    containerFooter.setAttribute("class", "containerFooter");

    socialsMidias.forEach((items) => {
        const figureLogo = document.createElement("figure");
        figureLogo.setAttribute("class", "figuresLogo");
        const imgLogo = document.createElement("img");
        imgLogo.setAttribute("class", "imgLogo");
        imgLogo.setAttribute("src", `${items.src}`);

        containerFooter.appendChild(figureLogo);
        figureLogo.appendChild(imgLogo);
    });

    document.body.appendChild(footer);
    footer.appendChild(containerFooter);
}

generateFooter();