const CHAVE_STORAGE = 'feedback';

function buscarAvaliacoes() {
    const dados = localStorage.getItem(CHAVE_STORAGE);
    if (dados) {
        return JSON.parse(dados);
    }
    return [];
}

function salvarAvaliacoes(novaAvaliacao) {
    const avaliacoes = buscarAvaliacoes();
    avaliacoes.push(novaAvaliacao);
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(avaliacoes));
}