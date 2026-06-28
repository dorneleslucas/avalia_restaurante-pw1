const form = document.querySelector('.formulario-avaliacao'); 
const btnSalvar = document.querySelector('#botao-salvar-avaliacao'); 

const inputCliente = document.querySelector('#avaliacao-cliente'); 
const selectRestaurante = document.querySelector('#avaliacao-restaurante');  
const selectFeedback = document.querySelector('#avaliacao-feedback'); 
const selectAtendimento = document.querySelector('#avaliacao-atendimento'); 
const selectCusto = document.querySelector('#avaliacao-custo'); 
const selectQualidade = document.querySelector('#avaliacao-qualidade'); 
const textereaComentario = document.querySelector('#avaliacao-comentario'); 

// localstorage 

const CHAVE_STORAGE = 'feedback'; 

function buscarAvaliacoes () { 
    const dados = localStorage.getItem(CHAVE_STORAGE); 

     // Se tiver dados, converte de texto para array

    if(dados) { 
        return JSON.parse(dados); 
    }
    return []; 
}

function salvarAvaliacoes (novaAvaliacao){ 
    const avaliacoes = buscarAvaliacoes(); 

    avaliacoes.push(novaAvaliacao); 

    localStorage.setItem(CHAVE_STORAGE ,JSON.stringify(avaliacoes)); 

    console.log('avaliacao salva!'); 

}


function validarCampos () {
    const restaurante = selectRestaurante.value; 
    const cliente = inputCliente.value.trim();
    const feedback = selectFeedback.value; 
    const atendimento = selectAtendimento.value;  
    const custo = selectCusto.value;  
    const qualidade = selectQualidade.value; 
    const comentario = textereaComentario.value; 
    if(restaurante === '') { 
        alert('por favor, selecione um restaurante ') ; 
        return false; 
    }

    if(cliente === '') { 
        alert('por favor,digite seu nome'); 
        return false; 
    }

     if(feedback === '') { 
        alert('por favor, selecione uma nota para o seu feedback '); 
        return false; 
    }
     if(atendimento === '') { 
        alert('por favor, selecione uma nota para atendimento'); 
        return false; 
    }
     if(custo === '') { 
        alert('por favor, selecione uma nota para custo'); 
        return false; 
    }
     if(qualidade === '') { 
        alert('por favor, selecione uma nota para a qualidade da comida'); 
        return false; 
    }

    if(comentario === '') {
        alert('por favor, coloque um comentario para o restaurante'); 
        return false; 
    }
    
    console.log('todos os campos foram preenchidos');  
    return true; 

}

btnSalvar.addEventListener('click' , validarCampos);

// 1. Referência ao botão limpar e ao container de comentários
const btnLimpar = document.querySelector('#botao-limpar');
const listaComentarios = document.querySelector('#lista-comentarios');

// 2. Função para exibir todos os comentários
function exibirComentarios() {
    const avaliacoes = buscarAvaliacoes();
    if (avaliacoes.length === 0) {
        listaComentarios.innerHTML = '<p style="color:#777;">Nenhum comentário ainda. Seja o primeiro!</p>';
        return;
    }
    let html = '';
    for (let i = 0; i < avaliacoes.length; i++) {
        const av = avaliacoes[i];
        html += `
            <div class="comentario-item">
                <strong>${av.restaurante} - ${av.cliente}</strong>
                <div class="notas">
                    Geral: ${av.feedback} | Atendimento: ${av.atendimento} | Custo: ${av.custo} | Comida: ${av.qualidade}
                </div>
                <p class="texto">${av.comentario}</p>
            </div>
        `;
    }
    listaComentarios.innerHTML = html;
}

// 3. Modificar o evento do btnSalvar para salvar e recarregar
btnSalvar.addEventListener('click', function() {
    if (validarCampos()) {
        const novaAvaliacao = {
            restaurante: selectRestaurante.value,
            cliente: inputCliente.value.trim(),
            feedback: selectFeedback.value,
            atendimento: selectAtendimento.value,
            custo: selectCusto.value,
            qualidade: selectQualidade.value,
            comentario: textereaComentario.value.trim()
        };
        salvarAvaliacoes(novaAvaliacao);
        exibirComentarios(); // atualiza a lista
        alert('Avaliação salva com sucesso!');
        form.reset(); // limpa os campos após salvar (opcional)
    }
});

// 4. Evento para o botão limpar
btnLimpar.addEventListener('click', function() {
    form.reset();
});

// 5. Ao carregar a página, exibir os comentários já salvos
exibirComentarios();