document.addEventListener("DOMContentLoaded", () => {
    const carrinhoItens = document.getElementById('carrinhoItens');
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length === 0) {
        carrinhoItens.innerHTML = "<p>O carrinho está vazio.</p>";
    } else {
        carrinho.forEach((livro, index) => {
            const item = document.createElement('div');
            item.className = 'carrinho-item';
            item.innerHTML = `
                <img src="${livro.img}" alt="Capa do livro ${livro.titulo}" width="300">
                <div>
                    <h3>${livro.titulo}</h3>
                    <p>Autor: ${livro.autor}</p>
                    <p>Preço: R$ ${livro.preco}</p>
                    <button class="btn-buy" data-index="${index}">Comprar</button>
                    <button class=" remover" data-index="${index}">Remover</button>
                </div>
            `;
            carrinhoItens.appendChild(item);
        });

        
        document.querySelectorAll('.remover').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.dataset.index;
                carrinho.splice(index, 1);
                localStorage.setItem('carrinho', JSON.stringify(carrinho));
                location.reload();
            });
        });

        // Comprar item
        document.querySelectorAll('.btn-buy').forEach(button => {
            button.addEventListener('click', () => {
                const buyModal = document.getElementById('buyModal');
                if (buyModal) buyModal.style.display = 'block';
            });
        });
    }

    // Eventos do modal de compra
    const buyModal = document.getElementById('buyModal');
    const closeModal = document.getElementById('closeModal');
    const purchaseForm = document.getElementById('purchaseForm');

    closeModal?.addEventListener('click', () => {
        buyModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === buyModal) {
            buyModal.style.display = 'none';
        }
    });

    purchaseForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Compra realizada com sucesso!');
        buyModal.style.display = 'none';
    });

    // Limpar carrinho
    const limparBtn = document.getElementById('limparCarrinho');
    limparBtn?.addEventListener('click', () => {
        localStorage.removeItem('carrinho');
        location.reload();
    });
});
