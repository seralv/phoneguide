const express = require('express')
const morgan = require('morgan')
const chalk = require('chalk')
const cors = require('cors')
const logger = require('./loggerMiddleware')
const app = express()

app.use(cors())
app.use(logger)
app.use(express.json())
app.use('/', express.static('build'))

morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456'
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523'
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345'
  },
  {
    id: 4,
    name: 'Mary Poppendick',
    number: '39-23-6423122'
  }
]

app.get('/info', (request, response) => {
  const entries = persons.length
  const dateNow = new Date()
  response.send(`
    <p>Phonebook has info for ${entries} people</p>
    <p>${dateNow}</p>`)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
  console.log('persons', persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(p => p.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
    console.log(chalk.redBright('Error 404'))
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(p => p.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const genId = Math.floor(Math.random() * (54698723 - 1) + 1)
  return genId
}

const findName = (name) => {
  const searchName = persons.find(p => p.name.toLowerCase() === name.toLowerCase())

  if (searchName) {
    return true
  } else {
    return false
  }
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({
      error: 'no name provided'
    })
  }
  if (!body.number) {
    return response.status(400).json({
      error: 'no number provided'
    })
  }
  if (findName(body.name)) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }
  const person = {
    name: body.name,
    number: body.number || '000-000-00000',
    date: new Date(),
    id: generateId()
  }

  persons = persons.concat(person)

  response.json(person)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(chalk.greenBright(`Server is running on http://localhost:${PORT}`))
})
