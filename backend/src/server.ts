// Startando o servidor

import express from 'express'

const app = express()

app.use(express.json()) // Habilitando o uso do json no express

// Para verificar dados de uma requisição console.log(request.query)
// Para verificar parâmetros de uma requisição console.log(request.params)
// Para verificar body de uma requisição console.log(request.body)

app.get('/users/:id', (request, response) => { //1 parâmentro é a rota
    return response.json({ message: 'Helo Word' }) // retornando json por ser uma api restfull
})

app.listen(3333) //Porta usada