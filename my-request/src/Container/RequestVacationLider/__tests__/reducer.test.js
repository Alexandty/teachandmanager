import requestVacationLider from '../reducer';

describe('Test para el reducer requestVacationLider', () => {
    it('No debe ingresar a ningu type y retornar el mismo estado que le envio', () => {
        expect(requestVacationLider('state', 'action')).toEqual('state');
    })
    it('debe ingresar al type LOAD_REQUEST_VACATION_SOLVERS y cambiar la listVacationRequestSolvers con los datos que llegan', () => {
        expect(requestVacationLider('', { type: 'LOAD_REQUEST_VACATION_SOLVERS', list: [{ id: 1 }, { id: 2 }] }))
            .toEqual({ 'listVacationRequestSolvers': [{ id: 1 }, { id: 2 }] });
    })
})