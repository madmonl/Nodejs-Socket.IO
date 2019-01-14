const expect = require('expect')
const { generateMessage } = require('./message')

describe('generateMessage', () => {
  it('should generate correct message', () => {
    const from = 'liad'
    const text = 'test text'
    const message = generateMessage(from, text)

    expect(typeof message.createdAt).toBe('number')
    expect(message).toInclude({from, text})
  })
})
