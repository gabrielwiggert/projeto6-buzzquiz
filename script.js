let validado = 0; 

function validarCriacao(){
        
    const urlImage = document.querySelector('.url-image').value;        
    const tituloCriacao = document.querySelector('.titulo-criacao').value;
    const quantidadeDePerguntas = document.querySelector('.quantidade-perguntas').value;
    const quantidadeDeNiveis = document.querySelector('.quantidade-niveis').value;
    
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
        alert('Minimo 3 perguntas.')
    }else{
        validado ++
    }
    if(quantidadeDeNiveis < 2){
        alert('Minimo 2 niveis')
    }else{
        validado ++
    }
    
    if(validado === 4){
        const abrir = document.querySelector('.criacao-de-quizzes');
        abrir.classList.add('hidden');
        console.log(abrir);
    }

}

function abrirPerguntas(){
    validarCriacao();
} 


