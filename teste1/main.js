document.getElementById('notaForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nota1Input = document.getElementsByName('nota1')[0];
    var nota2Input = document.getElementsByName('nota2')[0];
    var nota3Input = document.getElementsByName('nota3')[0];
//   verificar se o elemento nota1 nota2 e nota3 exite
    if (nota1Input && nota2Input && nota3Input) {
      var nota1 = parseFloat(nota1Input.value);
      var nota2 = parseFloat(nota2Input.value);
      var nota3 = parseFloat(nota3Input.value);
  
      var media = (nota1 + nota2 + nota3) / 3;
  
      if (media >= 7) {
        alert("O aluno foi APROVADO com média " + media.toFixed(2));
      } else {
        var recuperacao = parseFloat(prompt("O aluno está em RECUPERAÇÃO. Digite a nota da prova de recuperação:"));
  
        var menorNota = Math.min(nota1, nota2, nota3);
        var novaMedia = (nota1 + nota2 + nota3 - menorNota + recuperacao) / 3;
  
        if (novaMedia >= 7) {
          alert("O aluno foi APROVADO com média " + novaMedia.toFixed(2));
        } else {
          alert("O aluno foi REPROVADO com média " + novaMedia.toFixed(2));
        }
      }
    }
  });
  