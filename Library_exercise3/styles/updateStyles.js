(() => {
    const updateStyles = document.createElement("style");
    updateStyles.innerHTML += `
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

        .imgIcons{
            width:2vw;
            height: 3vh;
            border: solid red;
        }


    `;
    document.body.appendChild(updateStyles);
  })();