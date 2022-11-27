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

        .createContainer{
            width: 100%;
            height: 95vh;
        }

        .createTitle{
            padding-top: 5vh;
            text-align: center;
        }

        .divForms{
            border: solid red;
        }
    `;
    document.body.appendChild(createStyles);
})();