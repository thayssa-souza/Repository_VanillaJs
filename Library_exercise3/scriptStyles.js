(() => {
    const style = document.createElement("style");
    style.innerHTML += `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
        }

        header{
            width: 100%;
            height: 20vh;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-evenly;
            background-color: #184e77;
        }

        .containerHeader{
            width: 80%;
        }

        .containerMenu{
            display: none;
            width: 50vw;
            height: 5vh;
        }

        .spanMenu{
            display: block;
            width: 50vw;
            height: 20vh;
        }

        .ulHeader{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        .listHeader{
            width: 15vw;
            text-align: center;
        }

        .listHeader a{
            text-decoration: none;
            font-size: 24px;
            color: #ffffff;
        }
        .listHeader a:hover{
            cursor: pointer;
            font-weight: bold;
        }

        .logo{
            height: 20vh;
        }

        @media(max-width: 700px) and (min-width: 360px){
            .containerHeader{
            }
            .ulHeader{ 
                width: 100%;
                position: fixed;
                left: -100%;
                top: 30vh;
                gap: 0;
                flex-direction: column;
                background-color: #184e77;
                text-align: center;
            }
            .listHeader a{
                font-size: 12px;
            }
            .containerMenu{
                display: block;
                border: solid red;
            }
        }
    `;
    document.body.appendChild(style);
  })();