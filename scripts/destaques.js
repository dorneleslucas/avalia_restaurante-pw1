const form = document.querySelector('.filtros-form');  // formulario 
const btnFiltrar = document.querySelector('#botao-filtrar');

function verificaValor (valorSelecionado, filtroSelecionado) { 
     if(filtroSelecionado === "")
         return true; 
     if(filtroSelecionado === "ate-30" ) 
        return valorSelecionado <= 30; 
     if (filtroSelecionado === "31-50") 
        return valorSelecionado > 30 && valorSelecionado <= 50; 
     if (filtroSelecionado === "51-80")  
        return valorSelecionado > 50 && valorSelecionado <= 80; 
     if(filtroSelecionado === "acima-80")  
        return valorSelecionado > 80 ; 
     
 }

 function verificaTipo (tipoSelecionado, filtroSelecionado) { 
    if(filtroSelecionado === "") { 
        return true;
    } 
    return filtroSelecionado === tipoSelecionado; 
 }


 function verificaStatus (statusSelecionado, filtroSelecionado) { 
    
    if(filtroSelecionado === "") { 
        return true; 
    }
    return filtroSelecionado === statusSelecionado; 
 }

 function aplicarFiltro() {

const filtroValor = document.querySelector('#filtro-valor').value;
const filtroTipo = document.querySelector('#filtro-tipo').value; 
const filtroStatus = document.querySelector('input[name ="status"]:checked').value;
const restaurantes = document.querySelectorAll('.restaurante'); // 


restaurantes.forEach(restaurante => {

const dataValor = Number( restaurante.dataset.valor); 
const dataTipo = restaurante.dataset.tipo; 
const dataStatus = restaurante.dataset.status;


const valorAplicado = verificaValor(dataValor,filtroValor); 
const tipoAplicado = verificaTipo(dataTipo,filtroTipo);
const statusAplicado = verificaStatus(dataStatus,filtroStatus); 

if(valorAplicado && tipoAplicado && statusAplicado) { 
   restaurante.style.display = ""; 
} else { 
   restaurante.style.display = "none"; 
}

});
   
 }
// Quando clicar em "Ver fotos", salva o ID no localStorage e redireciona
document.querySelectorAll('.btn-fotos').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // impede o redirecionamento imediato
        const id = this.dataset.restaurante;
        localStorage.setItem('restauranteFotos', id); // salva no localStorage
        window.location.href = this.href; // agora redireciona
    });
});


btnFiltrar.addEventListener('click' , aplicarFiltro); 

// 1. Referências ao modal (certifique-se de que o HTML do modal existe)
const overlay = document.getElementById('modal-overlay');
const modalConteudo = document.getElementById('modal-conteudo');
const fecharModal = document.getElementById('modal-fechar');

function abrirModal(html) {
    modalConteudo.innerHTML = html;
    overlay.classList.add('aberto');
}

fecharModal.addEventListener('click', function() {
    overlay.classList.remove('aberto');
});
overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
        overlay.classList.remove('aberto');
    }
});

// 2. Objeto com detalhes dos restaurantes (pratos, endereço, horário)
const detalhesRestaurantes = {
    'sabor-da-casa': {
        pratos: ['Feijoada', 'Baião de dois', 'Pudim'],
        endereco: 'Rua das Flores, 123',
        horario: '11h às 15h'
    },
    'cantina-da-nonna': {
        pratos: ['Pizza Margherita', 'Lasanha', 'Tiramisù'],
        endereco: 'Av. Itália, 456',
        horario: '18h às 23h'
    },
    'verde-grill': {
        pratos: ['Salada tropical', 'Grelhado de legumes', 'Suco detox'],
        endereco: 'Rua Verde, 789',
        horario: '10h às 22h'
    },
    'brasa-burger': {
        pratos: ['Burger clássico', 'Batata frita', 'Milkshake'],
        endereco: 'Rua do Fogo, 101',
        horario: '17h às 00h'
    },
    'bistro-central': {
        pratos: ['Filé mignon', 'Risoto de funghi', 'Crème brûlée'],
        endereco: 'Praça Central, 50',
        horario: '19h às 23h'
    }
};

// 3. Eventos para "Ver comentários"
document.querySelectorAll('.btn-comentarios').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const id = this.dataset.restaurante;
        const avaliacoes = buscarAvaliacoes(); // função do localStorage
        const filtrados = [];
        for (let i = 0; i < avaliacoes.length; i++) {
            if (avaliacoes[i].restaurante === id) {
                filtrados.push(avaliacoes[i]);
            }
        }
        // Nome do restaurante sem hífen (usando if/else para evitar replace)
        let nomeExibicao = '';
        if (id === 'sabor-da-casa')
             nomeExibicao = 'Sabor da Casa';
        else if 
        (id === 'cantina-da-nonna') nomeExibicao = 'Cantina da Nonna';
        else if 
        (id === 'verde-grill') nomeExibicao = 'Verde & Grill';
        else if 
        (id === 'brasa-burger') nomeExibicao = 'Brasa Burger';
        else if 
        (id === 'bistro-central') nomeExibicao = 'Bistro Central';
        else 
        nomeExibicao = id;

        let html = '<h3>Comentários sobre ' + nomeExibicao + '</h3>';
        if (filtrados.length === 0) {
            html += '<p>Nenhum comentário ainda.</p>';
        } else {
            for (let i = 0; i < filtrados.length; i++) {
                const av = filtrados[i];
                html += `
                    <div class="comentario-item">
                        <strong>${av.cliente}</strong>
                        <p>${av.comentario}</p>
                        <small>Notas: ${av.feedback} (geral), ${av.atendimento} (atend.), ${av.custo} (custo), ${av.qualidade} (comida)</small>
                    </div>
                `;
            }
        }
        abrirModal(html);
    });
});

// 4. Eventos para "Detalhes do prato"
document.querySelectorAll('.btn-detalhes').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const id = this.dataset.restaurante;
        const info = detalhesRestaurantes[id] || {};
        let html = '<h3>Detalhes do restaurante</h3>';
        html += '<p><strong>Pratos principais:</strong> ';
        if (info.pratos) {
            html += info.pratos.join(', ');
        } else {
            html += 'Não informado';
        }
        html += '</p>';
        html += '<p><strong>Endereço:</strong> ' + (info.endereco || 'Não informado') + '</p>';
        html += '<p><strong>Horário:</strong> ' + (info.horario || 'Não informado') + '</p>';
        abrirModal(html);
    });
});
