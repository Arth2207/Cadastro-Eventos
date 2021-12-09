let dataEvento = 21/12/2021;
    let dataAtual  = 9/12/2021;
    if(dataEvento<=dataAtual){
        console.log("A data do evento nao pode ser anterior e nem igual a data atual")
    } else{
        console.log("data permitida!")
    } 
    var listaDeParticipantes =["Maria","João","Pedro","Gustavo", "gabriel"]
    if(listaDeParticipantes.length > 100){
        console.log("o evento não poderá exceder 100 participantes")
    } else{
        console.log("Participantes cadastrados")
    } 
    let idadedoParticipante = 17;
    if(idadedoParticipante >= 18) {
        console.log("Cadastro permitido")
    } else{
        console.log(" Cadastro negado, o criador do evento deverá ter ao menos 18 anos")
    }
