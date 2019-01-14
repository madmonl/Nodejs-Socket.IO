const path = require('path')
const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const { generateMessage } = require('./utils/message')

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
  console.log('New user connected')

  socket.emit(
    'newMessage', 
    generateMessage("Admin", "Welcome to the chat")
  )

  socket.broadcast.emit(
    'newMessage', 
    generateMessage("Admin", "New user joined")
  )

  socket.on('createMessage', (message, ack) => {
    console.log(message)
    io.emit('newMessage', generateMessage(message.from, message.text))
    ack('this is from the server!')
  })
  
  socket.on('disconnect', () => console.log('user disconnected'))
})

server.listen(port)