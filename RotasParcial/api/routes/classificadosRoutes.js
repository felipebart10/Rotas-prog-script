const controllerClassificados = require('../controllers/classificadosControllers.js')

app.get('/classificados/classificadosMenu', controllerClassificados.menuClassificadosControllers)

app.get('/classificados/classificadosAutomoveisMenu', controllerClassificados.menuClassificadosVeiculosControllers)

app.get('/classificados/classificadosAutomoveisVolkswagenMenu', controllerClassificados.menuClassificadosVeiculosVolkswagenControllers)

