const path = require('path')
const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
  console.log('New user connected')

  socket.on('createMessage', message => {
    console.log(message)
    io.emit('newMessage', {
      ...message,
      createdAt: new Date().getTime()
    })
  })
  
  socket.on('disconnect', () => console.log('user disconnected'))
})




server.listen(port)