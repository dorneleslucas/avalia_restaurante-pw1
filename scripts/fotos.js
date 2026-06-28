// ==========================================
// 1. PEGAR O ID DO RESTAURANTE SALVO
// ==========================================

const idRestaurante = localStorage.getItem('restauranteFotos');
// Busca o ID que foi guardado quando clicou em "Ver fotos".

const galeria = document.querySelector('#galeria-fotos');
// Pega a div onde as fotos vão aparecer (já existe no HTML).

// ==========================================
// 2. DEFINIR AS FOTOS DE CADA RESTAURANTE
// ==========================================

// Objeto que associa cada ID a um array de URLs de imagens
const fotosPorRestaurante = {
    'sabor-da-casa': [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80'
    ],
    'cantina-da-nonna': [
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=80'
    ],
    'verde-grill': [
        'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80'
    ],
    'brasa-burger': [
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&w=900&q=80'
    ],
    'bistro-central': [
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'
    ]
};

// ==========================================
// 3. EXIBIR AS FOTOS
// ==========================================

if (idRestaurante && fotosPorRestaurante[idRestaurante]) {
    // Se existe um ID e ele está no nosso objeto de fotos...

    const fotos = fotosPorRestaurante[idRestaurante];
    // Pega o array de URLs daquele restaurante.

    let html = `<h2>Fotos do restaurante</h2>`;
    html += `<div class="grid-fotos">`;
    // Usa a classe "grid-fotos" que já está no CSS.

    for (let i = 0; i < fotos.length; i++) {
        html += `<img src="${fotos[i]}" alt="Foto do restaurante" class="foto-item">`;
    }
    // Para cada URL, cria uma tag <img> com a classe "foto-item".

    html += `</div>`;

    galeria.innerHTML = html;
    // Coloca todo esse HTML dentro da div #galeria-fotos.

} else {
    // Se não tiver ID ou não encontrarmos fotos para esse restaurante...
    galeria.innerHTML = '<p>Nenhuma foto disponível para este restaurante.</p>';
}

console.log('fotos.js carregado com sucesso!');
