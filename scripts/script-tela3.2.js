function criarPerguntasAbertas(){
    const perguntasAbertas = document.querySelector('.perguntas');
    
    let quantidadePer = 1;
    let quantidadePerguntasCard = 1;
    // quantidadePerguntas1 = quantidadePerguntasCard

    
    for(let i = 0; i < quantidadePerguntas; i++){ 
        perguntasAbertas.innerHTML += `
                                <div class="caixa-perguntas">
                                    <div class="titulos">
                                            <p>Pergunta ${quantidadePer ++}</p>
                                        </div>
                                        <div class="ion">
                                            <ion-icon name="create-outline" onclick="mostrarCriacao(${i})" data-identifier="expand"></ion-icon>
                                        </div>
                                    </div>
                                </div>
                                <div class="caixa-input2 hidden pergunta${i}">
                                        <div class="titulos-input">
                                            <p>Pergunta ${quantidadePerguntasCard ++}</p>
                                        </div>
                                        <input type="text" placeholder="Texto da pergunta" class="texto-criacao placeholdercriacao" data-identifier="question"/> 
                                        <input type="text" placeholder="Cor de fundo da pergunta" class="cor-fundo placeholdercriacao" data-identifier="question"/>
                                    
                                        <div class="titulos-input">
                                            <p>Resposta Correta</p>
                                        </div>
                                        <input type="text" placeholder="Resposta Correta" class="resposta-correta placeholdercriacao" data-identifier="question"/>
                                        <input type="text" placeholder="URL da imagem" class="url-image2 placeholdercriacao" data-identifier="question"/>

                                        <div class="titulos-input">
                                            <p>Respostas incorretas</p>
                                        </div>
                                        <div class="input-incorretas">
                                            <input type="text" placeholder="Resposta incorreta 1" class="resposta-incorretas1 placeholdercriacao" data-identifier="question"/>
                                            <input type="text" placeholder="URL da imagem 1" class="url-incorretas1 placeholdercriacao" data-identifier="question"/>
                                        </div>   
                                        <div class="input-incorretas">
                                            <input type="text" placeholder="Resposta incorreta 2" class="incorretas2 placeholdercriacao" data-identifier="question"/>
                                            <input type="text" placeholder="URL da imagem 2" class="url-incorretas2 placeholdercriacao" data-identifier="question"/>
                                        </div>   
                                        <div class="input-incorretas">
                                            <input type="text" placeholder="Resposta incorreta 3" class="incorretas3 placeholdercriacao"/>
                                            <input type="text" placeholder="URL da imagem 3" class="url-incorretas3 placeholdercriacao"/>
                                        </div>   
                                    </div>`    
    
    }   

}

function mostrarCriacao(id) {

    const fecharPerguntas = document.querySelectorAll('.caixa-input2');
    fecharPerguntas.forEach(function pergunta(p) {
        p.classList.add('hidden')
    })
 
    const perguntaSelecionada = document.querySelector('.pergunta' + id);
    perguntaSelecionada.classList.remove('hidden')
}

// function teste(id){
//     validarDados(id);
//     // armazenarDados();
//     console.log('Chamou' + id)
// }

let validado1 = 0;
let textoCriacao = null;
let cor = null;
let resposta = null;
let url = null;
let incorreta1 = null;
let incorreta2 = null;
let incorreta3 = null;
let url_incorreta1 = null;
let url_incorreta2 = null;
let url_incorreta3 = null;


let arrayQuestoes = [];
let arrayRepostas = [];

function validarDados(id){
    for(let i = 0; i < quantidadePerguntas; i++){         
        
        let perguntas = document.querySelector(`.pergunta${i}`)
        
        const texto = perguntas.querySelector('.texto-criacao').value;
        textoCriacao = texto;

        const corDeFundo = perguntas.querySelector('.cor-fundo').value;
        cor = corDeFundo;        

        const respostaCorreta = perguntas.querySelector('.resposta-correta').value;
        resposta = respostaCorreta;
               

        const urlCriacao = perguntas.querySelector('.url-image2').value;
        url = urlCriacao;

        const respostaIncorreta1 = perguntas.querySelector(`.resposta-incorretas1`).value;
        incorreta1 = respostaIncorreta1;
        
        
        const respostaIncorreta2 = perguntas.querySelector(`.incorretas2`).value;
        incorreta2 = respostaIncorreta2;
        
        
        const respostaIncorreta3 = perguntas.querySelector(`.incorretas3`).value;
        incorreta3 = respostaIncorreta3;
        

        const urlIncorreta1 = perguntas.querySelector(`.url-incorretas1`).value;
        url_incorreta1 = urlIncorreta1;
        

        const urlIncorreta2 = perguntas.querySelector(`.url-incorretas2`).value;
        url_incorreta2 = urlIncorreta2;
        
        
        const urlIncorreta3 = perguntas.querySelector(`.url-incorretas3`).value;
        url_incorreta3 = urlIncorreta3;
      
        
        if(textoCriacao.length < 20 ){
            alert("Minimo 20 caracteres")
        }else{
            validado1++
        }

        if(cor.includes('#') === false || cor.length !== 7 ){
            alert('Digite a cor em formato hexadecimal #******.')
        }else{
            validado1++
        }
        
        if(resposta === null){
            alert('Digite uma resposta correta.')
        }else{
            validado1++
        }
        
        if(url.includes('http','https','com','//') === false){
            alert('Digite um URL valido.')
        }else{
            validado1++
        }

        if(incorreta1 === null || incorreta2 === null || incorreta3 === null){
            alert("Você deve preencher pelo menos 1 resposta incorreta")
        }else{
            validado1++
        }

        if(url_incorreta1 === null || url_incorreta2 === null || url_incorreta3 === null){
            alert("Você deve preencher pelo menos 1 url incorreta")
        }else{
            validado1++
        }
        
        if(validado1 >= 6){
            
        }else{
            validado1 = 0
        }
        
        armazenarDados();  
    }
    armazenandoRepostas();
} 
    


function armazenarDados(){
    
    arrayQuestoes.push({
        title: textoCriacao,
        color: cor,
        answers: [arrayRepostas]
    })       
}

function armazenandoRepostas(){
    arrayRepostas.push({
        text: resposta,
        image: url,
        isCorrectAnswer: true,
    })

    arrayRepostas.push({
        text: incorreta1,
        image: url_incorreta1,
        isCorrectAnswer: false,
    })

    arrayRepostas.push({
        text: incorreta2,
        image: url_incorreta2,
        isCorrectAnswer: false,
    })

    arrayRepostas.push({
        text: incorreta3,
        image: url_incorreta3,
        isCorrectAnswer: false,
    })
}

function abrirNiveis(){
    validarDados();
    fecharPagina();     
    criarNiveisAbertos();  
}

function fecharPagina(){
    const fechar = document.querySelector('.perguntas');
    fechar.classList.add('hidden');        

    const abrir = document.querySelector('.niveis');
    abrir.classList.remove('hidden')

    const fecharBotao = document.querySelector('.botao-prosseguir-2');
    fecharBotao.classList.add('hidden')

    const abrirBotao = document.querySelector('.botao-prosseguir-3');
    abrirBotao.classList.remove('hidden')
}