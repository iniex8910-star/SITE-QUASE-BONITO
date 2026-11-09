const lista = document.getElementById("lista-itens");
const total = document.getElementById("total");
const carrinhoVazio = document.getElementById("carrinho-vazio");
const botaoFinalizar = document.getElementById("finalizar");

function formatar(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

const carrinho = JSON.parse(localStorage.getItem("ebar-carrinho")) || [];

carrinhoVazio.hidden = carrinho.length > 0;

botaoFinalizar.hidden = carrinho.length === 0;

let totalGeral = 0;

carrinho.forEach(function (item) {
    const subtotal = item.preco * item.qtd;
    totalGeral = totalGeral + subtotal;

    lista.innerHTML += `
        <li class="item-carrinho">
            <img class="imagem-item" src="${item.imagem}" alt="${item.nome}">
            <div class="info-item">
                <h3>${item.nome}</h3>
                <p>Quantidade: ${item.qtd}</p>
                <p>Preço: ${formatar(item.preco)}</p>
                <p class="subtotal">Subtotal: ${formatar(subtotal)}</p>
            </div>
        </li>`;
});

if (carrinho.length > 0) {
    total.textContent = "Total: " + formatar(totalGeral);
}

botaoFinalizar.addEventListener("click", function () {
    localStorage.removeItem("ebar-carrinho");
});