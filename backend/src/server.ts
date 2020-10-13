// Startando o servidor
import express from 'express'
import path from 'path'
import 'express-async-errors'
import errorHandler from './errors/handler'

//Importando a conexão
import './database/connection'

import routes from './routes'

const app = express() // Importando express

app.use(express.json()) // Habilitando o uso do json no express
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.listen(3333) //Porta usada

app.use(errorHandler)