(() => {
    const createStyles = document.createElement("style");
    createStyles.innerHTML += `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            font-family: 'Roboto', sans-serif;
        }


    `;
    document.body.appendChild(createStyles);
  })();