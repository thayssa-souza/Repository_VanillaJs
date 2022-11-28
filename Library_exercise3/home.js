(() => {
    const homeStyle = document.createElement("script");
    homeStyle.setAttribute("src", "./styles/homeStyles.js");
    document.body.appendChild(homeStyle);
})();

function generateScriptMain(){
    const homeMain = document.createElement("main");
    const homeContainer = document.createElement("section");
    homeContainer.setAttribute("class", "homeContainer");
    const divCarousel = document.createElement("div");
    divCarousel.setAttribute("class", "divCarousel");

    const firstBookImg = document.createElement("img");
    firstBookImg.setAttribute("src", "./images/firstBook.png");
    firstBookImg.setAttribute("class", "carouselBooks");
    const secondBookImg = document.createElement("img");
    secondBookImg.setAttribute("src", "./images/secondBook.jpg");
    secondBookImg.setAttribute("class", "carouselBooks");
    const fourthBookImg = document.createElement("img");
    fourthBookImg.setAttribute("src", "./images/fourthBook.png");
    fourthBookImg.setAttribute("class", "carouselBooks");

    document.body.appendChild(homeMain);
    homeMain.appendChild(homeContainer);
    homeContainer.appendChild(divCarousel);
    divCarousel.appendChild(firstBookImg);
    divCarousel.appendChild(secondBookImg);
    divCarousel.appendChild(fourthBookImg);
}

generateScriptMain();

let interval = 0;
const maxImgs = document.querySelectorAll(".carouselBooks").length - 1;

function carouselAction() {
  const img = document.querySelectorAll(".carouselBooks");

  setInterval(function () {
    img[interval].style.display = "none";
    interval++;
    if (interval > maxImgs) {
      interval = 0;
    }
    img[interval].style.display = "block";
  }, 1500);
}

carouselAction();

