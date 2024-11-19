const responses = {
    "bonjour": "Salut ! 😊 Comment puis-je vous aider aujourd'hui ?",
    "comment ça va ?": "Je vais bien, merci de demander ! 😄 Et toi ?",
    "quel est ton nom ?": "Je suis Yoneez GPT, ton assistant virtuel. 💬",
    "aide": "Je peux répondre à des questions basiques. Demande-moi n'importe quoi !",
    "merci": "Avec plaisir ! 🙏",
    "au revoir": "À bientôt ! 😎 N'hésite pas à revenir me parler.",
    "quel âge as-tu ?": "Je n'ai pas d'âge, mais je suis toujours là pour t'aider ! 😄",
    "quelle heure est-il ?": "Désolé, je ne peux pas donner l'heure, mais tu peux vérifier sur ton appareil. ⏰",
    "quel est ton film préféré ?": "Je n'ai pas de préférences, mais beaucoup de gens aiment **Inception** ! 🎬",
    "quelle est ta couleur préférée ?": "Je n'ai pas de couleur préférée, mais beaucoup de gens adorent le bleu ! 💙",
    "comment faire un site web ?": "Pour créer un site web, tu peux utiliser HTML, CSS et JavaScript. Si tu veux de l'aide, je suis là ! 💻",
    "quel est ton livre préféré ?": "Je n'ai pas de préférence, mais **1984** de George Orwell est un classique ! 📚",
    "default": "Désolé, je ne comprends pas cette question. Essayez quelque chose d'autre. 🤔"
};

function appendMessage(message, sender) {
    const chatBox = document.getElementById("chatBox");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerHTML = `<p><strong>${sender === 'bot' ? 'Yoneez GPT' : 'Vous'}:</strong> ${message}</p>`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showTypingIndicator() {
    const chatBox = document.getElementById("chatBox");
    const typingIndicator = document.createElement("div");
    typingIndicator.classList.add("message", "bot", "typing");
    typingIndicator.innerHTML = "<p>Yoneez GPT réfléchit <span>...</span></p>";
    chatBox.appendChild(typingIndicator);
    setTimeout(() => {
        chatBox.removeChild(typingIndicator);
    }, 2000);
}

function sendMessage() {
    const userInput = document.getElementById("userInput");
    const userMessage = userInput.value.trim().toLowerCase();
    if (userMessage === "") return;
    appendMessage(userMessage, 'user');
    userInput.value = "";
    showTypingIndicator();
    setTimeout(() => {
        const botMessage = responses[userMessage] || responses["default"];
        appendMessage(botMessage, 'bot');
    }, 2500);
}

document.getElementById("sendBtn").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark");
});
