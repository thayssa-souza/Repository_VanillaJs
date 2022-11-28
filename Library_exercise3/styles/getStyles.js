(() => {
    const getStyles = document.createElement("style");
    getStyles.innerHTML += `
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

        .getContainer{
            height: 70vh;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }

        .getTitle{
            font-size: 2rem;
        }

        .getContainer form{
            width: 40vw;
            height: 10vh;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        .getInput{
            width: 30vw;
            height: 7vh;
            border-radius: 10px;
            border: solid 5px #00b4d8;
        }
        .getInput::placeholder{
            font-size: 1rem;
            text-align: center;
        }

        .getContainer button{
            width: 7vw;
            height: 5vh;
            font-size: 1rem;
        }

        .getContainer table{
            width: 100%;
            height: 20vh;
            text-align: center;
        }
    `;
    document.body.appendChild(getStyles);
  })();