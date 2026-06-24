const form=document.querySelector('.formulario');

form.addEventListener('submit',(event)=>{
event.preventDefault();
console.log('Evento submit disparado');
const data=new FormData(form);
const email=data.get('email').trim();
const senha=data.get('senha').trim();

if(email===''||senha===''){
    alert('Preencha todos os campos');
    return;
}

const usuariosSalvos=localStorage.getItem('usuarios')
let usuarios=[];

if(usuariosSalvos!==null){
    usuarios=JSON.parse(usuariosSalvos)
}

const usuarioEncontrado=usuarios.find((user)=>{
    return user.email===email && user.senha===senha;
});
if(usuarioEncontrado){
const usuarioLogado={
    email:usuarioEncontrado.email,
    nome:usuarioEncontrado.nome||'usuario'
}
localStorage.setItem('usuarioLogado',JSON.stringify(usuarioLogado));

window.location.href='../home/index.html';
}
else{
    alert('Email ou senhas invalidos, tente novamente.')
}
});

