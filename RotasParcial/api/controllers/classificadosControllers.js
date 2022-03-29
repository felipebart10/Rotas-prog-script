module.exports = {
    menuClassificadosControllers,
    menuClassificadosVeiculosControllers,
    menuClassificadosVeiculosVolkswagenControllers,
}


function menuClassificadosControllers(req, res) {
    res.render('classificados/frm_classificadosMenu.ejs', {
        title: 'Re-fatorando',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        titulo: 'Menu de Classificados',
        autor: '5º ADS - Programação Script - Noturno - Felipe Oliveira Bartocci'
    })
}

    function menuClassificadosVeiculosControllers(req, res) {
        res.render('classificados/frm_classificadosAutomoveisMenu.ejs', {
            title: 'Re-fatorando',
            mensagem: 'Iniciando com NodeJS - Express - EJS',
            titulo: 'Classificados de veículos',
            autor: '5º ADS - Programação Script - Noturno - Felipe Oliveira Bartocci'
        })
    }

    function menuClassificadosVeiculosVolkswagenControllers(req, res) {
        res.render('classificados/frm_classificadosAutomoveisVolkswagenMenu.ejs', {
            title: 'Re-fatorando',
            mensagem: 'Iniciando com NodeJS - Express - EJS',
            titulo: 'Veículos VolksWagen',
            autor: '5º ADS - Programação Script - Noturno - Felipe Oliveira Bartocci'
        })
    }

   