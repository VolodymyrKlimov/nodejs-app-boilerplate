const greet = require('./greeting');

describe('greeting', () => {
  it('correctly greets the world', () => {
    const expectedGreeting = 'Hello World!';
    expect(greet('World')).toEqual(expectedGreeting);
  });
});
