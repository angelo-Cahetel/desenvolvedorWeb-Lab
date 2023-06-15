document.getElementById("prova-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    verificarProva();
});

function verificarProva() {
    var respostasCorretas = {
        "q1": "b",
        "q2": "a",
        "q3": "c",
        "q4": "a",
        "q5": "b",
        "q6": "a",
        "q7": "a",
        "q8": "b",
        "q9": "a",
        "q10": "b",
    };

    var score = 0;
    var perguntas = document.querySelectorAll("#prova-form input[type='radio']:checked");

    for (var i = 0; i < perguntas.length; i++) {
        var pergunta = perguntas[i];
        var nomePergunta = pergunta.name;
        var respostaCorreta = respostasCorretas[nomePergunta];

        if (pergunta.value === respostaCorreta) {
            score++;
        } else {
            var respostaErrada = document.querySelector("input[name='" + nomePergunta + "'][value='" + respostaCorreta + "']");
            respostaErrada.parentNode.style.color = "red";
        }
    }

    var scoreText = "Você acertou " + score + " perguntas.";
    var messageText = "";

    if (score === 0) {
        messageText = "Por favor, selecione pelo menos uma resposta para cada pergunta.";
    } else if (score >= 7) {
        messageText = "Parabéns, você foi APROVADO!";
    } else {
        messageText = "Dessa vez não deu. Você foi REPROVADO."
    }

    document.getElementById("score").textContent = scoreText;
    document.getElementById("message").textContent = messageText;
}
