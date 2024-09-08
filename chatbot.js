(function() {
    // Adiciona o contêiner do chatbot ao corpo da página
    var chatContainer = document.createElement('div');
    chatContainer.style.position = 'fixed';
    chatContainer.style.bottom = '20px';
    chatContainer.style.right = '20px';
    chatContainer.style.width = '300px';
    chatContainer.style.height = '400px';
    chatContainer.style.border = '1px solid #ddd';
    chatContainer.style.borderRadius = '10px';
    chatContainer.style.backgroundColor = '#fff';
    chatContainer.style.display = 'flex';
    chatContainer.style.flexDirection = 'column';
    chatContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    document.body.appendChild(chatContainer);

    // Adiciona a caixa de mensagens
    var chatBox = document.createElement('div');
    chatBox.style.flexGrow = '1';
    chatBox.style.padding = '10px';
    chatBox.style.overflowY = 'auto';
    chatContainer.appendChild(chatBox);

    // Adiciona o campo de entrada do usuário
    var inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.placeholder = 'Digite sua mensagem...';
    inputBox.style.width = '100%';
    inputBox.style.padding = '10px';
    inputBox.style.borderTop = '1px solid #ddd';
    chatContainer.appendChild(inputBox);

    // Função para adicionar mensagens
    function addMessage(text, className) {
        var message = document.createElement('div');
        message.textContent = text;
        message.style.margin = '5px 0';
        message.style.padding = '10px';
        message.style.borderRadius = '5px';
        message.style.backgroundColor = className === 'user' ? '#d1ffd7' : '#e1f0ff';
        message.style.alignSelf = className === 'user' ? 'flex-end' : 'flex-start';
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight; // Rola para o final
    }

    // Função para resposta do chatbot
    function botResponse(userMessage) {
        var response = 'Desculpe, não entendi. Pode repetir?';
        if (userMessage.toLowerCase().includes('olá')) {
            response = 'Olá! Como posso ajudar você hoje?';
        } else if (userMessage.toLowerCase().includes('ajuda')) {
            response = 'Claro, estou aqui para ajudar! O que você precisa?';
        } else if (userMessage.toLowerCase().includes('tchau')) {
            response = 'Até logo! Tenha um ótimo dia!';
        }
        setTimeout(function() {
            addMessage(response, 'bot');
        }, 500);
    }

    // Evento para enviar mensagem
    inputBox.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && inputBox.value.trim() !== '') {
            addMessage(inputBox.value, 'user');
            botResponse(inputBox.value);
            inputBox.value = '';
        }
    });

    // Mensagem de boas-vindas
    addMessage('Olá! Como posso ajudar você hoje?', 'bot');
})();
