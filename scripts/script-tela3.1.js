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

/* JS tela 2 - execução de um quizz */





let acertos = 0;
let numPergunta = 0;
let idPergunta = 0;
let quizzGlobal;

function getQuizz(ID_DO_QUIZZ) {
    const resposta = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/" + ID_DO_QUIZZ);
    resposta.then(renderizarQuizz);
  }

function comparador() { 
    return Math.random() - 0.5; 
}

function renderizarQuizz(resposta) {
    let quizz = resposta.data;
    quizzGlobal = resposta.data;
    var div = document.querySelector(".execucao-quizz");
    div.innerHTML = "";

    div.innerHTML = `
    <div class="titulo">
        <p>${quizz.title}</p>
        <img src="${quizz.image}">
        <div class="mask"></div>
    </div>
    `;

    quizz.questions.forEach(question => {

        question.answers.sort(comparador); // Após esta linha, a question.answers estará embaralhada

        div.innerHTML += `
            <div class="pergunta" id="${numPergunta}" data-identifier="question">
            <div class="pergunta-inner-box">
                <div class="titulo-pergunta">
                    <p>${question.title}</p>
                </div>

                <div class="opcoes">
                    <div class="column1">
                        <div class="opcao" onclick="showAnswer(this)" id="answer1${numPergunta}" data-identifier="answer">
                            <img src="${question.answers[0].image}">
                            <h6>${question.answers[0].text}</h6>
                        </div>

                        <div class="space"></div>

                        <div class="opcao" onclick="showAnswer(this)" id="answer2${numPergunta}" data-identifier="answer">
                            <img src="${question.answers[1].image}">
                            <h6>${question.answers[1].text}</h6>
                        </div>
                    </div>
        `;

        if (question.answers.length > 2) {
        div.innerHTML+= `
            <div class="column2">
                            <div class="opcao" onclick="showAnswer(this)" id="answer3${numPergunta}" data-identifier="answer">
                                <img src="${question.answers[2].image}">
                                <h6>${question.answers[2].text}</h6>
                            </div>

                            <div class="space"></div>

                            <div class="opcao" onclick="showAnswer(this)" id="answer4${numPergunta}" data-identifier="answer">
                                <img src="${question.answers[3].image}">
                                <h6>${question.answers[3].text}</h6>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
            `;
        }

        else {
            div.innerHTML+= `
            </div>
            </div>
            </div>
            `
        }
        numPergunta++;
    });
}

function showAnswer(answer) {

    const answer1 = document.getElementById(`answer1${idPergunta}`);
    if (!answer1.classList.contains("true") && !answer1.classList.contains("false")) {
        answer1.classList.add(`${quizzGlobal.questions[idPergunta].answers[0].isCorrectAnswer}`);

        const answer2 = document.getElementById(`answer2${idPergunta}`);
        answer2.classList.add(`${quizzGlobal.questions[idPergunta].answers[1].isCorrectAnswer}`);
        
        if (quizzGlobal.questions[idPergunta].answers.length > 2) {
            const answer3 = document.getElementById(`answer3${idPergunta}`);
            answer3.classList.add(`${quizzGlobal.questions[idPergunta].answers[2].isCorrectAnswer}`);

            const answer4 = document.getElementById(`answer4${idPergunta}`);
            answer4.classList.add(`${quizzGlobal.questions[idPergunta].answers[3].isCorrectAnswer}`);
        }

        if (answer.classList.contains("true")) {
            acertos++;
        }
    }

    setTimeout(focarNaProximaPergunta, 2000);
}

function focarNaProximaPergunta() {
        idPergunta++;
        const pergunta = document.getElementById(`${idPergunta}`);
        if (idPergunta == numPergunta) {
            finalizarQuizz();
        }
        else {
            pergunta.scrollIntoView();
        }
}

function finalizarQuizz() {
    var div = document.querySelector(".execucao-quizz");

    let taxaAcerto = ((acertos - 1) / quizzGlobal.questions.length) * 100;
    taxaAcerto = Math.round(taxaAcerto);

    let flag = 0;
    let i = 0;
    let seletor;

    while (flag == 0) {
        seletor = quizzGlobal.levels[i]; //REVER LÓGICA/COUNTING AQUI
        if (taxaAcerto <= quizzGlobal.levels[i].minValue) {
            flag = 1;
        }
        i++;
    }

    div.innerHTML += `
        <div class="pergunta" id="resultado" data-identifier="quizz-result">
        <div class="pergunta-inner-box">
            <div class="titulo-pergunta">
                <p>${seletor.title}</p>
            </div>

            <div class="opcoes">
                <div class="column1">
                    <div class="opcao">
                        <img src="${seletor.image}">
                        <h6>${seletor.text}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    const pergunta = document.getElementById('resultado');
    pergunta.scrollIntoView();

    div.innerHTML += `
    <div class="botoes">
                <button onclick="reiniciarQuizz()" id="reiniciar">Reiniciar Quizz</button>
                <div class="space"></div>
                <button onclick="voltarParaHome()" id="home">Voltar pra home</button>
            </div>
    `;
}

function reiniciarQuizz() {
    window.location.reload();
}

function voltarParaHome() {
    let execucao = document.querySelector(".execucao-quizz");
    execucao.classList.add("hidden");

    let home = document.querySelector(".lista-quizzes");
    home.classList.remove("hidden");
}

//getQuizz(6936);
//getQuizz(6989);
//getQuizz(7013);
