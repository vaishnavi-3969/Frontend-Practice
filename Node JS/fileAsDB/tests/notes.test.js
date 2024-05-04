const add = (num1, num2) => num1 + num2

test('add takes 2 nos. and returns a sum', () => {
    const result = add(3, 4)
    expect(result).toBe(7)
})