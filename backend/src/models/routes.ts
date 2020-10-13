import { Router } from 'express'
import OrphanageController from '../controllers/OrphanagesController'

const routes = Router()
// Cadastrando orfanatos

routes.get('/orphanages', OrphanageController.index) //Buscando orfanatos
routes.get('/orphanages/:id', OrphanageController.show) //Buscando orfanatos
routes.post('/orphanages', OrphanageController.create) // Inserindo orfanatos

export default routes;