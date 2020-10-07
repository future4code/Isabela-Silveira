function criaTarefa() {
    const inputTarefa = document.getElementById("tarefa")
    const diaSemana = document.getElementById("dias-semana").value
    const ondeAcrescenta = document.getElementById(diaSemana)

    if(inputTarefa.value !== "") {
        ondeAcrescenta.innerHTML += `<p>${tarefa.value}</p>`
        inputTarefa.value = ""
        // diaSemana.innerHTML += `<p>${domingo}</p>`
    
    } else{
        alert("Digite uma tarefa válida! :)")
    }
    
    const ondeAcrescenta = document.getElementById(diaSemana).innerHTML += `<p>${domingo}</p>`
} 

