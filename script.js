function ampliarImagem(imagem) {
    if (imagem.classList.contains('ampliada')) {
        imagem.style.transform = "scale(1)"; // Restaura o tamanho original
        imagem.classList.remove('ampliada');
    } else {
        imagem.style.transform = "scale(1.5)"; // Amplia a imagem
        imagem.classList.add('ampliada');
    }
}

// DESENVOLVIMENTO...
// PROJETO NÃO FINALIZADO.