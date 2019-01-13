const expect = require('expect')
const { generatedMessage } = require('./message')

describe('generateMessage', () => {
  it('should generate correct message', () => {
    const from = 'liad'
    const text = 'test text'
    const message = generatedMessage(from, text)

    expect(message).toInclude({from, text})
    expect(message.createdAt).toBe(Number)
  })
})
