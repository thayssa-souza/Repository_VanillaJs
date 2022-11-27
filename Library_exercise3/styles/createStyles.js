(() => {
    const createStyles = document.createElement("style");
    createStyles.innerHTML += `
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

        .createContainer h1{
            border: solid blue;
        }


    `;
    document.body.appendChild(createStyles);
  })();