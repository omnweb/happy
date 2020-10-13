// Startando o servidor
import express from 'express'

//Importando a conexão
import './database/connection'

import routes from './routes'

const app = express() // Importando express

app.use(express.json()) // Habilitando o uso do json no express
app.use(routes)

app.listen(3333) //Porta usada