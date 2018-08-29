
import AddSoliitudVacaciones from '../reducer';

describe('Test del reducer ADD_SOLICITUD_VACACIONES', () => {
    it('Debe retornar el estado incial', () => {
        expect(AddSoliitudVacaciones([], "")).toEqual([]);
    })
    it('Debe ingresar al type ADD_SOLICITUD_VACACIONES', () => {
        const action = {
            type: "ADD_SOLICITUD_VACACIONES", vacationSolicitudData: ["yo"], mensaje: '',
        }
        expect(AddSoliitudVacaciones([], action)).toEqual({ "availableDaysVacation": true, "mensaje": "", "vacationSolicitudData": ["yo"] });
    })
    it('Debe ingresar al type CHECK_SOLICITUD_VACACIONES', () => {
        const action = { type: "CHECK_SOLICITUD_VACACIONES", availableDaysVacation: 1, days: 1 }
        expect(AddSoliitudVacaciones([], action)).toEqual({ "mensaje": "1 Dias disponibles para fecha seleccionada", 'availableDaysVacation': false });
    })
    it('Debe ingresar al type GET_AVAILABLE_DAYS', () => {
        const action = { type: "GET_AVAILABLE_DAYS", avalableDaysData: 1 }
        expect(AddSoliitudVacaciones([], action)).toEqual({ "avalableDaysData": 1 });
    })
    it('Debe ingresar al type ERROR_SOLICITUD_VACACIONES', () => {
        const action = { type: "ERROR_SOLICITUD_VACACIONES", availableDaysVacation: true }
        expect(AddSoliitudVacaciones([], action)).toEqual({ "availableDaysVacation": true });
    })
});