function aplicarDesconto(livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}

// os {...} fará uma copia de todo array para um objeto. no caso ali vai alterar o preco