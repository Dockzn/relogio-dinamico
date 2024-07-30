function mudar() {
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('foto')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    if (hora < 10) hora = '0' + hora
    if (minuto < 10) minuto = '0' + minuto
    if (segundo < 10) segundo = '0' + segundo

    mensagem.innerHTML = `Agora são <strong>${hora}:${minuto}:${segundo}</strong> horas.`

    if (hora >= 5 && hora < 12) {
        // BOM DIA
        imagem.src = 'imagens/fotomanhared.jpg'
        document.body.style.background = '#004576' // COR
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        imagem.src = 'imagens/fototardered.jpg'
        document.body.style.background = '#da5b01' // COR
    } else {
        // BOA NOITE
        imagem.src = 'imagens/fotonoitered.jpg'
        document.body.style.background = '#10141d' // COR
    }
}

setInterval(mudar, 1000);
mudar();