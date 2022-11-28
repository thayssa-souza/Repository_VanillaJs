(() => {
    const footerStyles = document.createElement("style");
    footerStyles.innerHTML += `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            font-family: 'Roboto', sans-serif;
        }

        .containerFooter{
            background-color: #184e77;
            width: 100%;
            height: 10vh;
            position: relative;
            z-index: 1;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }

        .figuresLogo{
            width: 4vw;
            height: 7vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .figuresLogo:hover{
            cursor: pointer;
            border: solid 2px #fff;
            border-radius: 100px;
        }

        .imgLogo{
            width: 2vw;
            height: 5vh;
        }

        @media(max-width: 700px) and (min-width: 360px){
            .figuresLogo{
                width: 12vw;
            }
            .imgLogo{
                width: 6vw;
            }
        }

    `;
    document.body.appendChild(footerStyles);
  })();