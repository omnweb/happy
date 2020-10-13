import { Router } from 'express'
import OrphanageController from './controllers/OrphanagesController'
import multer from 'multer'
import uploadConfig from './config/upload'

const routes = Router()
// Cadastrando orfanatos

const upload = multer(uploadConfig)

routes.get('/orphanages', OrphanageController.index) //Buscando orfanatos
routes.get('/orphanages/:id', OrphanageController.show) //Buscando orfanatos
routes.post('/orphanages', upload.array('images'), OrphanageController.create) // Inserindo orfanatos

export default routes;