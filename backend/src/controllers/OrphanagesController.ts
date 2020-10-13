import { Request, Response } from 'express'
import { create } from "domain";
import { getRepository } from 'typeorm' // Importando repositório que será acessado antes de cada response
import Orphanage from '../models/Orphanage' // Importando a classe orphanage

export default {
    async create(request: Request, response: Response) {
        const { name, latitude, longitude, about, instructions, opening_hours, open_on_weekends } = request.body
        const orphanagesRepository = getRepository(Orphanage) // Com isso orphanagesRepository já possui todos os métos de crud
        const orphanage = orphanagesRepository.create({ name, latitude, longitude, about, instructions, opening_hours, open_on_weekends }) // Criando orfanato passando os dados que vieram inicialmente da requisição

        await orphanagesRepository.save(orphanage) // Salvando passando orphanage pra função save
        return response.status(201).json(orphanage)
    }
}