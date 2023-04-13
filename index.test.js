const {add} = require('./index')

describe('add', () => {
    it('should work', () =>{
        expect(add(2,2)).toBe(4)
    })
})
