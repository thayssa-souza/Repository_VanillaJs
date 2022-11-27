(() => {
    const deleteStyles = document.createElement("style");
    deleteStyles.innerHTML += `
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


    `;
    document.body.appendChild(deleteStyles);
  })();