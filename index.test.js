const {add} = require('./index')

describe('add', () => {
    it('should work', () =>{
        expect(add(2,6)).toBe(4)
    })
})
