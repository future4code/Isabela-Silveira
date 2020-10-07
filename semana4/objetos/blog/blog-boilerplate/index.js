function capturar() {
    let tituloPost = document.getElementById("titulo-post").value
    let autorPost = document.getElementById("autor-post").value
    let conteudoPost = document.getElementById("conteudo-post").value
    
    let post = {
        titulo: tituloPost,
        autor: autorPost,
        conteudo: conteudoPost
        
    }
    
    let arrayPost = [post.titulo, post.autor, post.conteudo]
    arrayPost.push(post)
    tituloPost.value = ""
    autorPost.value = ""
    conteudoPost.value = ""

    let inserePostTitulo = document.getElementById("titulo-post")
    let inserePostAutor = document.getElementById("autor-post")
    let inserePostConteudo = document.getElementById("conteudo-post")
    let ondeInsere = document.getElementById("container-de-posts")

    ondeInsere.innerHTML += `<p>${inserePostTitulo.value}</p>`
    ondeInsere.innerHTML += `<p>${inserePostAutor.value}</p>`
    ondeInsere.innerHTML += `<p>${inserePostConteudo.value}`

}





// const formularioPost = {
//     titulo: 'Primeiro blog',
//     autor: 'Isabela',
//     conteudo: 'Meu primeiro conteúdo'
// }

// console.log(formularioPost)