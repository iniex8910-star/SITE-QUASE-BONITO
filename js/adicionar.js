const botoes = document.querySelectorAll(".botao-carrinho");

botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const card = botao.closest(".card");
        const quantidade = Number(card.querySelector("input").value);
        const imagem = card.querySelector(".imagem-produto").src;

        const carrinho = JSON.parse(localStorage.getItem("ebar-carrinho")) || [];

        const item = carrinho.find(function (i) {
            return i.id === botao.dataset.id;
        });

        if (item) {
            item.qtd = item.qtd + quantidade;
            item.imagem = imagem;
        } else {
            carrinho.push({
                id: botao.dataset.id,
                nome: botao.dataset.nome,
                preco: Number(botao.dataset.preco),
                qtd: quantidade,
                imagem: imagem
            });
        }

        localStorage.setItem("ebar-carrinho", JSON.stringify(carrinho));

        alert(botao.dataset.nome + " adicionado ao carrinho!");
    });
});