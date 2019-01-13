const socket = io()

socket.on('connect', () => {
  console.log('connected to server')
});

socket.on('newMessage', (message) => {
  console.log(`new message recieved: ${JSON.stringify(message)}`)
})

socket.on('disconnect', () => {
  console.log('disconnected from server')
});