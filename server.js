import express from 'express'

const port = 3000

const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))
server.use(express.json())

server.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

process.on('unhandledRejection', (error) => {
    console.error('unhandledRejection', error.message)
})
