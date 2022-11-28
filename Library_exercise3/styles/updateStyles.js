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
        }

        .updateContainer{
            height: 120vh;            
        }

        .updateTitle{
            font-size: 2rem;
            padding-top: 7vh;
            padding-bottom: 7vh;
            text-align: center;
        }

        .updateContainer table{
            width: 100%;
            height: 20vh;
            text-align: center;
            margin-bottom: 10vh;
        }

        .divUpdateForms{
            margin-top: 20vh;
            width: 100%;
            height: 40vh;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }

        .labelInputDiv{
            font-size: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }

        .updateContainer label{
            width: 8vw;
        }

        .updateContainer input{
            width: 30vw;
        }

        .updateContainer button{
            width: 7vw;
            height: 5vh;
            font-size: 1rem;
        }

        
    `;
    document.body.appendChild(updateStyles);
  })();