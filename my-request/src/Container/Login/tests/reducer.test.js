import login from '../reducer';

describe('Test reducer login', () => {
    it('No debe ingresar al type del login ', () => {
        expect(login('state', "")).toEqual('state');
    });
    it('Debe ingresar al type login', () => {
        expect(login({ user: 'a', logged: false }, { type: "LOGIN", user: 'b' }))
            .toEqual({ user: 'b', logged: true });
    });
});