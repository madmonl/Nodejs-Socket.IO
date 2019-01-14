const socket = io()

socket.on('connect', () => {
  console.log('connected to server')
});

socket.on('newMessage', (message) => {
  console.log(`new message recieved: ${JSON.stringify(message)}`)
  const li = $('<li></li>')
  li.text(`${message.from}: ${message.text}`)
  $('#messages').append(li)
})

socket.on('disconnect', () => {
  console.log('disconnected from server')
});

socket.emit('createMessage', {
  from: 'Frank',
  text: 'ack test'
}, data => console.log(`Got it: ${data}`))

$('#message-form').on('submit', (e) => {
  e.preventDefault()
  socket.emit('createMessage', {
    from: 'User',
    text: $('[name=message]').val()
  }, () => {})
})