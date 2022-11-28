(() => {
    const homeStyles = document.createElement("style");
    homeStyles.innerHTML += `
        .hide{
            display: none;
        }

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            font-family: 'Roboto', sans-serif;
        }

        .carouselBooks{
            width: 100%;
            height: 75vh;
        }

    `;
    document.body.appendChild(homeStyles);
    console.log("home");
  })();