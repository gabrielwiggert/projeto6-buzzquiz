function montarQuizzSucesso(){
    const sucessoQuizz = document.querySelector('.sucesso-quizz')
    sucessoQuizz.innerHTML +=`  <div class="titulos">
                                    <p>Seu quizz está pronto!</p>
                                </div>
                                <div class="imagem-sucesso">
                                    <img src="${urlQuizz}" alt="">
                                    <p>${tituloQuizz}</p>
                                </div>          
                                <div class="botao-prosseguir-4 ">
                                    <button onclick="abrirQuizz()">Acessar Quizz</button>
                                </div>
                                <div class="voltar">
                                    <p onclick="voltarHome()">Voltar para home</p>
                                </div>`                           
                           
}

function criandoObjeto(){
    arrayObjeto.push({
        title: tituloQuizz,
	    image: urlQuizz,
	    question: [arrayQuestoes],
        levels: [arrayNiveis]
        
})
}

function postObjeto(){
    const promise = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', arrayObjeto)
    promise.then(sucesso)
    promisse.catch(erro)
}

function sucesso(resposta){
    const retorno = localStorage.setItem(resposta.data)    
    console.log(retorno)
    console.log(resposta.status)
}

function erro(resposta){
    console.log(resposta.status)
}