// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImagem = document.getElementById("lightbox-imagem");
const fecharLightbox = document.querySelector(".fechar-lightbox");
const imagensPequenas = document.querySelectorAll(".imagem-pequena");


// Abrir lightbox ao clicar em uma imagem pequena
imagensPequenas.forEach(imagem => {
    imagem.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImagem.src = imagem.src;
    });
});

// Fechar lightbox ao clicar no botão "X"
fecharLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Fechar lightbox ao clicar fora da imagem
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Personalizar link do WhatsApp
const whatsappBtns = document.querySelectorAll(".whatsapp-btn");

whatsappBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        event.preventDefault(); // Evita que o link seja aberto diretamente

        const produto = btn.getAttribute("data-produto");
        const preco = btn.getAttribute("data-preco");

        // Mensagem personalizada
        const mensagem = `Olá, gostaria de comprar o ${produto} (${preco}). Poderia me ajudar?`;

        // Codifica a mensagem para uso em URL
        const mensagemCodificada = encodeURIComponent(mensagem);

        // Cria o link do WhatsApp
        const linkWhatsApp = `https://wa.me/5582993948377?text=${mensagemCodificada}`;

        // Abre o link no WhatsApp
        window.open(linkWhatsApp, "_blank");
    });
});