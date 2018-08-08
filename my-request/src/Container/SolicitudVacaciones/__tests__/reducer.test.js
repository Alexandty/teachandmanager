
import AddSoliitudVacaciones from '../reducer';

describe('Test del reducer ADD_SOLICITUD_VACACIONES', () => {
    it('Debe retornar el estado incial', () => {
        expect(AddSoliitudVacaciones([], "")).toEqual([]);
    })
    it('Debe ingresar al type ADD_SOLICITUD_VACACIONES', () => {
        const action = { type: "ADD_SOLICITUD_VACACIONES", vacationSolicitudData: "yo" }
        expect(AddSoliitudVacaciones([], action)).toEqual({ "vacationSolicitudData": "yo" });
    })


});