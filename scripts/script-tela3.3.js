function criarNiveisAbertos(){
    const nivelAberto = document.querySelector('.niveis');
    
    let quantidadePer = 1;
    let quantidadePerguntasCard = 1;
    

    
    for(let i = 0; i < quantidadeNiveis; i++){ 
        nivelAberto.innerHTML += `
                                <div class="caixa-perguntas">
                                    <div class="titulos">
                                            <p>Nível ${quantidadePer ++}</p>
                                        </div>
                                        <div class="ion">
                                            <ion-icon name="create-outline" onclick="mostrarNiveis(${i}) data-identifier="expand""></ion-icon>
                                        </div>
                                    </div>
                                </div>
                                <div class="caixa-input3 hidden perguntas${i} data-identifier="level"">
                                <div class="titulos-input">
                                    <p>Nível ${quantidadePerguntasCard ++}</p>
                                </div>
                                
                                    <input type="text" placeholder="Título do nível" class="nivel placeholdercriacao"/> 
                                    <input type="text" placeholder="% de acerto mínima" class="porcentagem placeholdercriacao"/>
                                    <input type="text" placeholder="URL da imagem do nível" class="url-nivel placeholdercriacao"/>
                                    <input type="text" placeholder="Descrição do nível" class="descricao placeholdercriacao"/>
                                </div>`    
    
    }   

}

function mostrarNiveis(id) {

    const fecharPerguntas = document.querySelectorAll('.caixa-input3');
    fecharPerguntas.forEach(function pergunta(p) {
        p.classList.remove('hidden')
    })
 
    const perguntaSelecionada = document.querySelector('.perguntas' + id);
    perguntaSelecionada.classList.add('hidden')
    console.log("chamou")
}


let validado2 = 0;
let tituloNiveis = null;
let porcentagemNiveis = null;
let urlNiveis = null;
let descricaoNiveis = null;

let arrayNiveis = [];

function validarDadosNiveis(id){
    for(let i = 0; i < quantidadeNiveis; i++){         
        let niveis = document.querySelector(`.perguntas${i}`)
    
        const titulo = niveis.querySelector('.nivel').value;
        tituloNiveis = titulo;

        const porcentagem = niveis.querySelector('.porcentagem').value;
        porcentagemNiveis = porcentagem;

        const urlnivel = niveis.querySelector('.url-nivel').value;
        urlNiveis = urlnivel;

        const descricao = niveis.querySelector('.descricao').value;
        descricaoNiveis = descricao;
               
        if(titulo.length < 10 ){
            alert("Minimo 10 caracteres.")
        }else{
            validado2++
        }

        if(porcentagem > 100 && porcentagem < 0 ){
            alert('Digite um valor de 0 a 100.')
        }else{
            validado2++
        }

        if(urlnivel.includes('http','https','com','//') === false){
            alert('Digite um URL valido.')
        }else{
            validado2++
        }

        if(descricao.length < 30){
            alert('Minimo 30 caracteres.')
        }else{
            validado2++
        }

        if(validado2 === 4){
            
        }else{
            valida2 = 0
        }
        armazenarDadosNiveis();  
    } 
    
}

function armazenarDadosNiveis(){
   
    arrayNiveis.push({
        title: tituloNiveis,
        image: urlNiveis,
        text: descricaoNiveis,
        minValue: porcentagemNiveis,
    })
}


function abrirSucesso(){
    validarDadosNiveis();
    fecharPaginaNiveis();
    montarQuizzSucesso();    
    criandoObjeto();    
}

function fecharPaginaNiveis(){
    const fechar = document.querySelector('.niveis');
    fechar.classList.add('hidden');        

    const abrir = document.querySelector('.sucesso-quizz');
    abrir.classList.remove('hidden')

    const fecharbotao = document.querySelector('.botao-prosseguir-3')
    fecharbotao.classList.add('hidden')

}