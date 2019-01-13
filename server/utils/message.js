const generateMessage = (from, to) => ({
  from,
  to,
  createdAt: new Date().getTime()
})

module.exports = { generateMessage }
