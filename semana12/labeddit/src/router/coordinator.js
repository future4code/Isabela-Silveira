export const goToLogin = (history) => {
    history.push('/login')
}

export const goToRegister = (history) => {
    history.push('/cadastro')
}

export const goToFeed = (history) => {
    history.push('/feed')
}

export const goToAddPost = (history) => {
    history.push('/adicionarPost')
}

export const goToPost = (history, id) => {
    history.push(`/post/${id}`)
}

