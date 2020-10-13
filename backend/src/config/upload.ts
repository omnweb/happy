import { request, response } from 'express'
import multer from 'multer' // Biblioteca para upload de arquivos
import path from 'path'

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'), // caminho para a pasta de salvamento
        filename: (request, file, cb) => {
            //Nomeia o arquivo
            const fileName = `${Date.now()}-${file.originalname}`

            cb(null, fileName)
        }
    })
}