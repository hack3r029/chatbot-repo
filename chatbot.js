<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Save the Date</title>
    <style>
        body {
            background-color: black;
            color: #00ff00;
            font-family: "Courier New", Courier, monospace;
            text-align: center;
            padding: 50px;
        }

        h1, h2 {
            text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00;
        }

        .glitch {
            font-size: 2rem;
            display: inline-block;
            position: relative;
        }

        .glitch::before,
        .glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            color: #00ff00;
            background: black;
            clip-path: polygon(0 0, 100% 0, 100% 25%, 0 25%);
            animation: glitch-anim 2s infinite;
        }

        .glitch::after {
            clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%);
            animation: glitch-anim 2s infinite reverse;
        }

        @keyframes glitch-anim {
            0% {
                transform: translate(0, 0);
            }
            25% {
                transform: translate(3px, -3px);
            }
            50% {
                transform: translate(-3px, 3px);
            }
            75% {
                transform: translate(2px, -2px);
            }
            100% {
                transform: translate(0, 0);
            }
        }

        audio {
            margin-top: 20px;
            outline: none;
            width: 80%;
        }

        .date {
            color: #ff0000;
            font-weight: bold;
        }

        #enableAudio {
            background-color: #00ff00;
            border: none;
            color: black;
            padding: 10px 20px;
            font-size: 1rem;
            margin-top: 20px;
            cursor: pointer;
            border-radius: 5px;
        }

        #enableAudio:hover {
            background-color: #009900;
        }
    </style>
</head>
<body>
    <h1 class="glitch" data-text="Save the Date">Save the Date</h1>
    <h2>01/12/2024</h2>
    <p>🎵 Música: *Party Favor* - Billie Eilish 🎵</p>
    <audio id="partyAudio" autoplay loop muted>
        <source src="https://raw.githubusercontent.com/Carloshenriquept/Party-favor-/main/party-favor.mp3" type="audio/mpeg">
        Seu navegador não suporta o elemento de áudio.
    </audio>
    <h3>Prepare-se para o dia <span class="date">01.12.2024</span></h3>
    <p>O controle está nas mãos da rainha... você está pronto?</p>
    <p>blosh-plaks-cajduha-pudkaiejd</p>
    <button id="enableAudio">Ativar Som</button>

    <script>
        const audio = document.getElementById('partyAudio');
        const button = document.getElementById('enableAudio');

        // Tentar ativar o som ao clicar no botão
        button.addEventListener('click', () => {
            audio.muted = false;
            audio.play();
            button.style.display = 'none'; // Esconde o botão após ativar o som
        });

        // Tentar ativar o som ao interagir com qualquer parte da página
        document.body.addEventListener('click', () => {
            audio.muted = false;
        }, { once: true });
    </script>
</body>
</html>
