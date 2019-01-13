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

  socket.emit('newEmail', {
    from: 'liad@gmail.com',
    text: 'new email',
    createdat: 123
  })

  socket.on('createMessage', message => console.log(message))
  
  socket.emit('newMessage', {
    from: 'liad',
    text: 'new chat app mmessage',
    createdAt: 123
  })
  
  socket.on('disconnect', () => console.log('user disconnected'))
})




server.listen(port)