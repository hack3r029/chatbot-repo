<!DOCTYPE html>
<html lang="pt-BR">
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

        h1 {
            font-size: 3rem;
            text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00;
        }

        .date {
            color: #ff0000;
            font-weight: bold;
        }

        button {
            background-color: #00ff00;
            border: none;
            color: black;
            padding: 10px 20px;
            font-size: 1.2rem;
            margin-top: 20px;
            cursor: pointer;
            border-radius: 5px;
        }

        button:hover {
            background-color: #009900;
        }

        p {
            font-size: 1.2rem;
        }
    </style>
</head>
<body>

    <h1>Save the Date</h1>
    <h2>01/12/2024</h2>
    <p>🎉 Prepare-se para o evento! 🎉</p>
    <button id="showMessage">Clique para mais informações</button>
    <p id="message" style="display: none; color: yellow;">O evento vai começar no dia <span class="date">16/12/2024</span>.</p>

    <script>
        // Função para mostrar a mensagem quando o botão for clicado
        const button = document.getElementById('showMessage');
        const message = document.getElementById('message');

        button.addEventListener('click', function() {
            message.style.display = 'block'; // Mostra a mensagem
            button.style.display = 'none';   // Esconde o botão após o clique
        });
    </script>

</body>
</html>
