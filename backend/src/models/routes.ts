import { Router } from 'express'
import OrphanageController from '../controllers/OrphanagesController'

const routes = Router()
// Cadastrando orfanatos

routes.post('/orphanages', OrphanageController.create)

export default routes;