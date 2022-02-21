function comecarCriacao(){
    const fechar = document.querySelector('.lista-quizzes')
    fechar.classList.add('hidden')

    const abrir = document.querySelector('.criacao-de-quizzes')
    abrir.classList.remove('hidden')

    
}

function mostrarQuizzesExistentes(){
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
    promise.then(exibirQuizzes)
}
let quizzes;
function exibirQuizzes(resposta){
    quizzes = resposta.data

    
    const quizzesDinamicos = document.querySelector('.lista-quizzes');

    quizzesDinamicos.innerHTML += `<div class="todos-quizzes">`

    for(let i = 0; i <resposta.data.length; i++){
    quizzesDinamicos.innerHTML += `<div class="dupla">
                                        <figure>
                                            <img src="${quizzes[i].image}" alt="" onclick="abreQuizz(${i})">
                                            <p></p>
                                        </figure>
                                        <figure>
                                            <img src="${quizzes[i+1].image}" alt="" onclick="abreQuizz(${i+1})">
                                            <p></p>
                                        </figure>
                                        </div>`                                  
                                        
    }   
    quizzesDinamicos.innerHTML += `</div>`
}
console.log(quizzes)
function abreQuizz(resposta){
    getQuizz(quizzes[resposta].id)
}

mostrarQuizzesExistentes();