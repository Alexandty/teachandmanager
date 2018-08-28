import login from '../reducer';

describe('Test reducer login', () => {
    it('No debe ingresar al type del login ', () => {
        expect(login('state', "")).toEqual('state');
    });
    it('Debe ingresar al type login', () => {
        expect(login({ user: 'a', logged: false }, { type: "LOGIN", user: 'b' }))
            .toEqual({ user: 'b', logged: true });
    });

    it('Debe ingresar al type ERROR_FIELD', () => {
        expect(login({ msj: 'a' }, { type: "ERROR_FIELD", msj: 'b' }))
            .toEqual({ msj: 'b' });
    });
});