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
            height: 80vh;
        }

        .createTitle{
            padding-top: 8vh;
            text-align: center;
            padding-bottom: 8vh;
            font-size: 2rem;
        }

        .divForms{
            height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }

        .divLabelInput{
            width: 30vw;
            height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .label{
            font-size: 1.2rem;
        }

        .input{
            width: 30vw;
            height: 5vh;
            margin-top: -5vh;
            margin-bottom: 3vh;
            border-radius: 10px;
        }
        .input::placeholder{
            font-size: 1rem;
            text-align: center;
        }
    `;
    document.body.appendChild(createStyles);
})();