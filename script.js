function ampliarImagem(imagenm) {
    imagem.style.transform = "scale(1.2)"; // Ampliar a imagem 
    imagem.style.trasition = "transform 0.5s"; // transação suave
}

function voltarImagem() {
    const imagens = document.querySelectorAll('.img_diario');

    imagens.forEach(imagem => {
        imagem.style.transform = "scale(1)"; // voltar ao tamanho original
        imagem.style.transitin = "transform 0.5s"; // transação suave
    })
}