let validado = 0; 
let urlQuizz = null;
let quantidadePerguntas = null;
let tituloQuizz = null;
let quantidadeNiveis = null;

let arrayObjeto = [];
function validarCriacao(){
        
    const urlImage = document.querySelector('.url-image').value;  
    urlQuizz = urlImage;
    const tituloCriacao = document.querySelector('.titulo-criacao').value;
    tituloQuizz = tituloCriacao;
    const quantidadeDePerguntas = document.querySelector('.quantidade-perguntas').value;
    quantidadePerguntas = (quantidadeDePerguntas);
    const quantidadeDeNiveis = document.querySelector('.quantidade-niveis').value;
    quantidadeNiveis = quantidadeDeNiveis;
    if(tituloCriacao.length < 20 || tituloCriacao.length > 65){
        alert('Digite entre 20 e 65 caracteres.')
    }else{
        validado ++
    }
    if(urlImage.includes('http','https','com','//') === false){
        alert('Digite um URL valido.')
    }else{
        validado ++
    }
    if(quantidadeDePerguntas < 3){
        alert('Digite números e no minimo 3 perguntas.')
    }else{
        validado ++
    }
    if(quantidadeDeNiveis < 2){
        alert('Digite números e no minimo 2 niveis')
    }else{
        validado ++
    }
    
    if(validado !== 4){
        validado = 0
    }else{
        const fechar = document.querySelector('.criacao-de-quizzes');
        fechar.classList.add('hidden');        

        const abrir = document.querySelector('.perguntas');
        abrir.classList.remove('hidden')

        const abrirBotao = document.querySelector('.botao-prosseguir-2');
        abrirBotao.classList.remove('hidden')
    }
   
}


function abrirPerguntas(){
    validarCriacao();
    criarPerguntasAbertas();
    
} 






