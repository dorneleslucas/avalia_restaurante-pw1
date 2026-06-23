const form=document.querySelector('.formulario');

form.addEventListener('submit',(event)=>{
event.preventDefault();
const data=new FormData(form);
const nome=data.get('nome').trim();
const email=data.get('email').trim();
const senha=data.get('senha').trim();
const perfil=data.get('perfil');

if(!nome||!email||!senha||!perfil){
    alert('Preencha todos os campos');
    return;
}

const usuariosSalvos=localStorage.getItem('usuarios');
let usuarios=[];
if(usuariosSalvos!==null){
    usuarios=JSON.parse(usuariosSalvos);
}
const emailExiste=usuarios.some((user)=>user.email===email);
if(emailExiste){
    alert('Este email ja esta cadastrado.')
    return;
}
const novoUsuario={
    nome:nome,
    email:email,
    senha:senha,
    perfil:perfil
};
usuarios.push(novoUsuario);
localStorage.setItem('usuarios',JSON.stringify(usuarios));
alert('Cadastro realizado com sucesso!');
window.location.href='../login/index.html'
});
