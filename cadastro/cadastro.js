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
})