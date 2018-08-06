import RequestVacationList from '../reducer';

describe('Test del reducer RequestVacationList', () => {
    it('Debe retornar el estado incial', () => {
        expect(RequestVacationList([], "")).toEqual([]);
    })
    it('Debe ingresar al type REPLACE_PRODUCTS', () => {
        const action = { type: "REPLACE_PRODUCTS", VacationData: "yo" }
        expect(RequestVacationList([], action)).toEqual({"VacationData": "yo"});
    })
})