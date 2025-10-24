const botao = document.getElementById("botao");
const titulo = document.getElementById("titulo");
const body = document.body;
const btnTrabalho = document.getElementById("btnTrabalho");
const btnFutebol = document.getElementById("btnFutebol");

// Adiciona o evento de clique
botao.addEventListener("click", () => {
    // Verifica se o modo atual é claro
    if (body.classList.contains("claro")) {
        // Troca para o modo escuro
        body.classList.replace("claro", "escuro");
        titulo.textContent = "Felipe Antunes Campos 🌙"; // Atualiza o título no modo escuro
        botao.textContent = "Ativar modo claro ☀️";
    } else {
        // Troca para o modo claro
        body.classList.replace("escuro", "claro");
        titulo.textContent = "Felipe Antunes Campos ☀️"; // Atualiza o título no modo claro
        botao.textContent = "Ativar modo escuro 🌙";
    }
});

btnTrabalho.addEventListener("click", () => {
    descricao.textContent = "Você está em local de trabalho, sentindo o estress.";
    imagem.src = "assets/img/trabalho.jpg";
});

btnFutebol.addEventListener("click", () => {
    descricao.textContent = "Você está vendo o melhor jogador da historia.";
    imagem.src = "assets/img/futebol.jpg";
});