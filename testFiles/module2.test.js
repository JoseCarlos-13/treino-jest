const { studentsList } = require('./module2.test')

describe('testing module2', () => {
    test('must return students list', () => {
        const students = [
            { name: 'John Bender', age: 17 },
            { name: 'Allison Reynolds', age: 16 },
        ]

        const result = studentsList(students)
        expect(result[0].name).toEqual('John Bender')
    });
    
});
