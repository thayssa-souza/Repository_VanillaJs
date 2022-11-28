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
            padding-top: 6vh;
            text-align: center;
            padding-bottom: 6vh;
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
            height: 6vh;
            margin-bottom: 3vh;
            border-radius: 10px;
            border: solid 5px #00b4d8;
        }
        .input::placeholder{
            font-size: 1rem;
            text-align: center;
        }

        .buttonForms{
            margin-top: 2vh;
            width: 12vw;
            height: 8vh;
            font-size: 1rem;
        }
    `;
    document.body.appendChild(createStyles);
})();