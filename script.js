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

/* JS tela 2 - execução de um quizz */

function getQuizz(ID_DO_QUIZZ) {
    const resposta = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/" + ID_DO_QUIZZ);
    resposta.then(renderizarQuizz);
  }

function comparador() { 
    return Math.random() - 0.5; 
}

function renderizarQuizz(resposta) {
    const quizz = resposta.data;
    var div = document.querySelector(".execucao-quizz");
    div.innerHTML = "";

    div.innerHTML = `
    <div clas]s="titulo">
        <p>${quizz.title}</p>
        <img src="${quizz.image}">
        <div class="mask"></div>
    </div>
    `;

    quizz.questions.forEach(question => {

        question.answers.sort(comparador); // Após esta linha, a question.answers estará embaralhada

        div.innerHTML = `
            <div class="pergunta">
            <div class="pergunta-inner-box">
                <div class="titulo-pergunta">
                    <p>${question.title}</p>
                </div>

                <div class="opcoes">
                    <div class="column1">
                        <div class="opcao" onclick="showAnswer()" id="answer1">
                            <img src="${question.answers[0].image}">
                            <h6>${question.answers[0].text}</h6>
                        </div>

                        <div class="space"></div>

                        <div class="opcao" onclick="showAnswer()" id="answer2">
                            <img src="${question.answers[1].image}">
                            <h6>${question.answers[1].text}</h6>
                        </div>
                    </div>

                    <div class="column2">
                        <div class="opcao" onclick="showAnswer()" id="answer3">
                            <img src="${question.answers[2].image}">
                            <h6>${question.answers[2].text}</h6>
                        </div>

                        <div class="space"></div>

                        <div class="opcao" onclick="showAnswer()" id="answer4">
                            <img src="${question.answers[3].image}">
                            <h6>${question.answers[3].text}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
}

function showAnswer() {
    const answer1 = document.getElementById("answer1")
    answer1.classList.add(`${question.answers[0].isCorrectAnswer}`);

    const answer2 = document.getElementById("answer2")
    answer2.classList.add(`${question.answers[1].isCorrectAnswer}`);

    const answer3 = document.getElementById("answer3")
    answer3.classList.add(`${question.answers[2].isCorrectAnswer}`);

    const answer4 = document.getElementById("answer4")
    answer4.classList.add(`${question.answers[3].isCorrectAnswer}`);
}