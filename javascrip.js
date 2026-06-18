// Aguarda o documento HTML carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona os elementos do HTML pelos IDs
    const btnAviso = document.getElementById("btnAviso");
    const btnCotacao = document.getElementById("btnCotacao");
    const resultadoCotacao = document.getElementById("resultadoCotacao");

    // Evento de clique para o primeiro botão (Aviso simples)
    if (btnAviso) {
        btnAviso.addEventListener("click", function() {
            alert("Bem-vindo ao portal! Em breve traremos notícias em tempo real sobre o campo.");
        });
    }

    // Evento de clique para o segundo botão (Mostrar/Esconder Cotação)
    if (btnCotacao && resultadoCotacao) {
        btnCotacao.addEventListener("click", function() {
            // Verifica se a cotação está escondida ou visível e alterna a classe CSS
            if (resultadoCotacao.classList.contains("escondido")) {
                resultadoCotacao.classList.remove("escondido");
                resultadoCotacao.classList.add("mostrar");
                btnCotacao.textContent = "Esconder Cotação";
            } else {
                resultadoCotacao.classList.remove("mostrar");
                resultadoCotacao.classList.add("escondido");
                btnCotacao.textContent = "Atualizar Cotação";
            }
        });
    }
});