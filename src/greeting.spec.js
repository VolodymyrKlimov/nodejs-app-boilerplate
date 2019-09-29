import greet from './greeting';

describe('Greeting', () => {
  it('Returns appropriate greeting string', () => {
    const name = 'Vova';
    const greetingString = greet(name);

    expect(greetingString).toBe('Hello, Vova!');
  });
});
