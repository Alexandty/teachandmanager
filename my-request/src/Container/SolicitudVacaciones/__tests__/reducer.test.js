
import AddSoliitudVacaciones from '../reducer';

describe('Test del reducer ADD_SOLICITUD_VACACIONES', () => {
    it('Debe retornar el estado incial', () => {
        expect(AddSoliitudVacaciones([], "")).toEqual([]);
    })
    it('Debe ingresar al type ADD_SOLICITUD_VACACIONES', () => {
        const action = { type: "ADD_SOLICITUD_VACACIONES", vacationSolicitudData:[ "yo"] }
        expect(AddSoliitudVacaciones([], action)).toEqual({ "vacationSolicitudData":[ "yo"] });
    })
    it('Debe ingresar al type CHECK_SOLICITUD_VACACIONES', () => {
        const action = { type: "CHECK_SOLICITUD_VACACIONES", vacationSolicitudData:[ "yo"] }
        expect(AddSoliitudVacaciones([], action)).toEqual({ "vacationSolicitudData":[ "yo"], 'availableDaysVacation': false });
    })
    it('Debe ingresar al type GET_AVAILABLE_DAYS', () => {
        const action = { type: "GET_AVAILABLE_DAYS", avalableDaysData:1 }
        expect(AddSoliitudVacaciones([], action)).toEqual({ "avalableDaysData":1});
    })


});