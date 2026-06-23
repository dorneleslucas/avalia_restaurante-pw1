const usuarioLogadoJSON=localStorage.getItem('usuarioLogado');

if(usuarioLogadoJSON===null){
    window.location.href='../login/index.html';
} else{
    const usuarioLogado=JSON.parse(usuarioLogadoJSON);

    const saudacao=document.querySelector('#saudacao');
    if(saudacao){
        saudacao.textContent=`Bem-vindo(a),${usuarioLogado.nome||'Usuario'}!`;
    }
const btnSair=document.querySelector('#btn-logout');
if(btnSair){
    btnSair.addEventListener('click',function(){
        localStorage.removeItem('usuarioLogado');
        window.location.href='../login/index.html';
    });
}
}