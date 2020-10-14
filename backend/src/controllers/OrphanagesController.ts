import { Request, Response } from 'express'
import { create } from "domain";
import { getRepository } from 'typeorm' // Importando repositório que será acessado antes de cada response
import Orphanage from '../models/Orphanage' // Importando a classe orphanage
import orphanageView from '../views/orphanages_view'
import * as Yup from 'yup'

export default {
    // Listar Orfanatos
    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage)
        const orphanages = await orphanagesRepository.find({ relations: ['images'] })
        return response.json(orphanageView.renderMany(orphanages))
    },
    // Listar por id   
    async show(request: Request, response: Response) {
        const { id } = request.params;
        const orphanagesRepository = getRepository(Orphanage)
        const orphanage = await orphanagesRepository.findOneOrFail(id, { relations: ['images'] }) // Se não encontrar o id gera uma falha
        return response.json(orphanageView.render(orphanage))
    },
    // Criar Orfanatos
    async create(request: Request, response: Response) {
        const { name, latitude, longitude, about, instructions, opening_hours, open_on_weekends } = request.body
        const orphanagesRepository = getRepository(Orphanage) // Com isso orphanagesRepository já possui todos os métos de crud
        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => { return { path: image.filename } })
        const data = { name, latitude, longitude, about, instructions, opening_hours, open_on_weekends, images }
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                }))
        })
        await schema.validate(data, {
            abortEarly: false,
        })
        const orphanage = orphanagesRepository.create(data) // Criando orfanato passando os dados que vieram inicialmente da requisição

        await orphanagesRepository.save(orphanage) // Salvando passando orphanage pra função save
        return response.status(201).json(orphanage)
    }
}